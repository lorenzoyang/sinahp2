# Project guidance

## Status and safety invariants

This repository preserves a historical Sina Hotpot website as a public portfolio demo.
The demo is https://sinahp2.yrw.workers.dev/ and the existing Worker name is `sinahp2`.
The current https://sinahp.com/ belongs to the restaurant and is maintained independently.
Do not describe this repository as its current production website.

Keep the archive notice visible on every page in all five languages. Restaurant information
and assets are historical; the source license does not grant reuse of the brand or assets.
Do not reconnect real booking services, CAPTCHA, advertising tags or conversion tracking.
There is no production mode. No environment variables or form-service keys are required.

## Commands

Node >=22.12. Install locked dependencies with `npm ci`.

```bash
npm run dev             # Astro development server
npm run check           # Astro + TypeScript diagnostics
npm run build           # diagnostics and static build; require zero diagnostics
npm run preview         # build and preview the Worker locally
npm run test:demo       # Playwright browser checks
npm run deploy          # build and deploy to the existing Cloudflare Worker
```

Install the browser for tests with `npx playwright install chromium` when needed.
Run the build after non-trivial changes. Run browser checks when changing the demo flow,
locale routing, archive notice or tracking/data-submission safeguards.

## Architecture and conventions

Astro 6 static output, strict TypeScript, Tailwind CSS v4, Cloudflare adapter with
compile-time image optimization. No CMS, database or booking backend.

- `src/data/routing.ts` defines locales `it | zh | en | es | fr`, page slugs, topic slugs
  and URL helpers. Italian is unprefixed; use `getPath()` and `getCultureTopicPath()`.
- Italian routes are explicit wrappers under `src/pages`; other languages use
  `src/pages/[locale]/[...slug].astro`. Preserve existing routes, including result pages.
- Page/layout code imports public data barrels (`src/data/site.ts`, `copy.ts`, etc.).
- UI strings live in `src/data/copy/{locale}.ts` and satisfy `LocaleCopy`. Update all
  five translations when changing the shape. The `archive` group contains demo notices.
- Home-section text and culture topics use their existing typed locale modules.
- Restaurant data is historical. Display hours, schema-era hours and simulation ranges
  remain in `restaurant.ts`; preserve location-specific slot ranges and midnight handling.
- Gallery files use eager glob imports and numerical filename ordering. Images use
  `astro:assets`, presets in `src/utils/ui.ts`, and build-time optimization.
- Components declare local class maps in frontmatter, composed from shared UI maps.
  Reuse the existing colors, spacing and responsive layout rather than redesigning.
- Browser scripts use stable `data-*` selectors through `scripts/dom.ts`.

## Browser-only reservation simulation

`ReservationForm.astro` renders disabled controls and a button of type `button`.
Its fields intentionally have no `name` attributes. `scripts/reservationForm.ts` attaches
all handlers before enabling controls. It preserves required-field validation, dynamic
location time slots and date minimums, then navigates to the localized demo result route.

Never create a payload or put field values in requests, URLs, logs, browser storage or
analytics. Clear the form on navigation and browser history restoration. Native form
submission is prevented. With JavaScript disabled or initialization incomplete the form
must remain disabled. The result page must clearly say no real reservation was sent.
Telephone/WhatsApp booking actions are replaced by a clearly labeled current-site link;
historical contact details in the footer are plain text. Maps and social links remain external.

## Metadata and privacy

`SiteLayout.astro` is the only document shell. Every title/share description identifies
the historical demo. Canonical and share URLs use the Cloudflare demo origin. Every
page has `noindex, follow`, reinforced by `public/_headers`; robots.txt permits crawling
so crawlers can see the directive. There is no sitemap, hreflang SEO output or JSON-LD.
Language-switch paths still use routing helpers and per-topic alternate paths.

The privacy pages describe the local simulation and possible Cloudflare technical logs
and external links. Do not restore the former restaurant data-controller, booking-email,
health-data consent, or advertising-consent claims. Do not claim the hosting provider
collects no technical information.

## Publishing and archival

Keep AGPL-3.0-only and the existing brand/photo/copy exclusions unchanged. Do not rewrite
Git history or rename the Worker. Final rollout order: push reviewed changes, deploy,
verify the live demo, update GitHub About, then archive the public repository last.
Report unavailable credentials or failed remote steps accurately; do not infer completion.
