# Web3Forms to Resend Migration

## Short Answer

A seamless visitor experience is possible, but a pure drop-in endpoint swap is not.

The current reservation flow posts directly from the browser to Web3Forms. Resend is an email API, so its API key must stay server-side and the browser must not call Resend directly. The smooth path is to add a small server-side reservation endpoint that accepts the current form payload, sends the email through Resend, and returns the same response shape the client already expects:

```json
{ "success": true, "message": "Reservation request sent." }
```

With that compatibility endpoint, most form markup and UX can stay the same. The unavoidable changes are:

- Change the browser submit target from Web3Forms to a local endpoint such as `/api/reservation`.
- Move email delivery to server-side code.
- Store `RESEND_API_KEY` as a server secret, not a `PUBLIC_` client variable.
- Replace or reimplement Web3Forms captcha/spam handling.
- Update privacy-policy copy from Web3Forms to Resend.

## Current Implementation

Relevant files:

- `src/components/ReservationForm.astro`
- `src/scripts/reservationForm.ts`
- `astro.config.mjs`
- `README.md`
- `src/data/copy/*.ts`

Current behavior:

- `ReservationForm.astro` renders hidden Web3Forms fields:
  - `access_key`
  - `subject`
  - `from_name`
  - `botcheck`
- `reservationForm.ts` submits JSON to `https://api.web3forms.com/submit`.
- The client checks for `result.success` and redirects to the reservation success page.
- Optional captcha uses `https://web3forms.com/client/script.js`.
- Privacy copy names Web3Forms as the form-processing provider.

## Recommended Migration Shape

Use a compatibility endpoint:

```text
Browser form -> /api/reservation -> Resend API -> restaurant inbox
```

This keeps the public reservation form behavior stable while moving secrets and email delivery to the server.

Do not call Resend directly from `reservationForm.ts`. Resend requires API authentication with a bearer token, and that token would be exposed to visitors if used in client JavaScript.

## Resend Setup

1. Create or use a Resend account.
2. Add and verify a sending domain. Resend requires a verified owned domain for production sending.
3. Choose a sender address at that verified domain, for example:

```text
Sina Hotpot <reservations@sinahp.com>
```

4. Create a Resend API key with `sending_access` permission.
5. Add local development variables to `.env`:

```bash
RESEND_API_KEY="re_xxxxxxxxx"
RESEND_FROM_EMAIL="Sina Hotpot <reservations@sinahp.com>"
RESEND_TO_EMAIL="sinahotpot@gmail.com"
```

6. Add production secrets to Cloudflare:

```bash
wrangler secret put RESEND_API_KEY
wrangler secret put RESEND_FROM_EMAIL
wrangler secret put RESEND_TO_EMAIL
```

## Astro Environment Schema

Add server-only variables to `astro.config.mjs`:

```js
env: {
  schema: {
    PUBLIC_WEB3FORMS_ACCESS_KEY: envField.string({
      context: "client",
      access: "public",
      optional: true,
    }),
    PUBLIC_WEB3FORMS_CAPTCHA_ENABLED: envField.boolean({
      context: "client",
      access: "public",
      default: false,
    }),
    RESEND_API_KEY: envField.string({
      context: "server",
      access: "secret",
    }),
    RESEND_FROM_EMAIL: envField.string({
      context: "server",
      access: "secret",
    }),
    RESEND_TO_EMAIL: envField.string({
      context: "server",
      access: "secret",
    }),
  },
},
```

Long term, remove the Web3Forms variables after the new endpoint is live and the form component no longer renders Web3Forms-specific fields.

## Compatibility Endpoint

Create `src/pages/api/reservation.ts` as an on-demand endpoint. The current project already uses the Cloudflare adapter, so only this endpoint needs `prerender = false`.

```ts
import type { APIRoute } from "astro";
import {
  RESEND_API_KEY,
  RESEND_FROM_EMAIL,
  RESEND_TO_EMAIL,
} from "astro:env/server";

type ReservationPayload = Record<string, unknown>;

const RESEND_EMAILS_ENDPOINT = "https://api.resend.com/emails";

export const prerender = false;

function getString(payload: ReservationPayload, key: string): string {
  const value = payload[key];

  return typeof value === "string" ? value.trim() : "";
}

function createEmailText(payload: ReservationPayload): string {
  return [
    "New reservation request",
    "",
    `Name: ${getString(payload, "name")}`,
    `Phone: ${getString(payload, "phone")}`,
    `Location: ${getString(payload, "location")}`,
    `Guests: ${getString(payload, "guests")}`,
    `Date: ${getString(payload, "date")}`,
    `Time: ${getString(payload, "time")}`,
    "",
    "Message:",
    getString(payload, "message") || "-",
  ].join("\n");
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const payload = (await request.json()) as ReservationPayload;

  if (getString(payload, "botcheck")) {
    return jsonResponse({ success: false, message: "Invalid submission." }, 400);
  }

  const requiredFields = ["name", "phone", "location", "guests", "date", "time"];
  const missingField = requiredFields.find((field) => !getString(payload, field));

  if (missingField) {
    return jsonResponse({ success: false, message: "Missing required fields." }, 400);
  }

  const resendResponse = await fetch(RESEND_EMAILS_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "User-Agent": "sinahp2/1.0",
    },
    body: JSON.stringify({
      from: RESEND_FROM_EMAIL,
      to: [RESEND_TO_EMAIL],
      subject: getString(payload, "subject") || "Sina Hotpot Reservation Request",
      text: createEmailText(payload),
    }),
  });

  if (!resendResponse.ok) {
    return jsonResponse(
      { success: false, message: "The reservation request could not be sent." },
      502,
    );
  }

  return jsonResponse({ success: true, message: "Reservation request sent." });
};
```

This uses direct `fetch()` instead of the Resend SDK to keep the Cloudflare Worker path small. If you prefer the SDK, install `resend` and follow Resend's Astro guide, but the endpoint still needs to remain server-side.

## Client-Side Switch

In `src/scripts/reservationForm.ts`, change:

```ts
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
```

to:

```ts
const RESERVATION_ENDPOINT = "/api/reservation";
```

and submit to `RESERVATION_ENDPOINT`.

For the first release, you can keep the response handling unchanged because the endpoint returns `{ success, message }`.

The existing client currently blocks submission when `payload.access_key` is missing. During a phased migration, either:

- Keep a harmless placeholder `PUBLIC_WEB3FORMS_ACCESS_KEY` until cleanup.
- Or remove the `access_key` hidden input and the missing-key check in the same migration.

The second option is cleaner once Resend is live.

## Captcha And Spam Protection

This is the least drop-in part of the migration.

Web3Forms currently provides the form backend and its captcha integration. Resend will not validate hCaptcha or handle form spam for you. Choose one:

- Keep hCaptcha, but replace the Web3Forms script with the official hCaptcha script and verify the token server-side before calling Resend.
- Use Cloudflare Turnstile and verify the token server-side in `/api/reservation`.
- Temporarily rely on the honeypot plus server-side validation, then add captcha if spam appears.

If keeping captcha enabled, add a server secret such as `HCAPTCHA_SECRET` or `TURNSTILE_SECRET_KEY` and verify the submitted token in the endpoint. A client-side "token exists" check is not enough on its own.

## Privacy Copy Updates

Update every locale in `src/data/copy/*.ts` where Web3Forms is named.

Suggested English replacement:

```text
Resend: sends reservation request emails to Sina Hotpot on behalf of this website.
```

Suggested retention wording:

```text
Technical, anti-spam, and email delivery logs are retained according to the settings and periods of the relevant providers. Reservation request emails are retained in Sina Hotpot's email inbox according to business and legal requirements.
```

Also review whether Resend's DPA, region, tracking, and message-storage settings match the site's privacy requirements.

## Rollout Plan

1. Add the server-only Resend env schema.
2. Add `/api/reservation` and return Web3Forms-shaped JSON.
3. Configure local `.env` and Cloudflare secrets.
4. Point `reservationForm.ts` at `/api/reservation`.
5. Submit a test reservation locally.
6. Deploy to a preview environment and confirm the email arrives.
7. Remove Web3Forms fields, script, variables, and README references.
8. Update privacy-policy provider text in all locales.
9. Re-run `npm run build`.
10. Deploy production and monitor Cloudflare logs plus Resend logs.

## Rollback Plan

Keep the old Web3Forms access key available until the Resend flow is confirmed in production.

Rollback is then:

1. Point the client submit endpoint back to `https://api.web3forms.com/submit`.
2. Restore the Web3Forms hidden fields and captcha script if they were removed.
3. Redeploy.

## Final Recommendation

For this project, the best migration is a compatibility endpoint. It gives users a seamless reservation experience and keeps the front-end flow nearly unchanged, while satisfying the important security requirement that the Resend API key never reaches the browser.

Useful references:

- Resend Send Email API: https://resend.com/docs/api-reference/emails/send-email
- Resend Astro guide: https://resend.com/docs/send-with-astro
- Resend API keys: https://resend.com/docs/api-reference/api-keys/create-api-key
- Resend verified sender/domain behavior: https://resend.com/docs/knowledge-base/how-do-I-create-an-email-address-or-sender-in-resend
- Astro on-demand rendering: https://docs.astro.build/en/guides/on-demand-rendering/
- Astro environment variables: https://docs.astro.build/en/guides/environment-variables/
