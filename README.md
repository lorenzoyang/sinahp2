# Sina Hotpot — archived website demo

Historical implementation of the former Sina Hotpot restaurant website in Prato and Firenze, Italy.

**Demo: [sinahp2.yrw.workers.dev](https://sinahp2.yrw.workers.dev/)** · [Source code](https://github.com/lorenzoyang/sinahp2)

> This is a portfolio demo of the former website, not the restaurant's current website.
> The restaurant has moved to a website built by another team. The current
> [sinahp.com](https://sinahp.com/) is independent of this repository's implementation.
> This project no longer receives active feature development. Restaurant information may
> be outdated. **The demo does not accept real reservations.**

![Sina Hotpot former homepage](docs/screenshot-home.webp)

## What remains available

Five languages (Italian, Chinese, English, Spanish, French), a hotpot culture guide,
location pages, a photo and video gallery, and an interactive reservation simulation.
The original design and restaurant assets are preserved as historical project material;
their reuse is excluded from the source-code license below.

The reservation form runs only in the browser. Use fictional details. Validation still
checks required fields, location-specific time slots and date limits, then opens a
localized result page that explicitly says no reservation was sent. Form values are
never serialized, transmitted or stored, and are cleared when leaving the page.
Controls stay disabled without JavaScript or if initialization fails.

The demo has no booking backend, form-service integration, CAPTCHA, Google Ads or
advertising cookies. Cloudflare may still process technical access/security logs.
Maps, social platforms, GitHub and the current official website are external links.
Every page is marked `noindex, follow`; no sitemap or business structured data is emitted.

## Stack

- Astro 6, static output
- TypeScript, strict mode
- Tailwind CSS v4
- Cloudflare Workers + Wrangler
- Playwright browser checks for the archived demo

## How I built it with AI

I did this solo while learning Astro from the official tutorial and docs. Codex and Claude Code
wrote most of the code. I decided what to build, wrote the requirements, reviewed the diffs, and
tested the result.

What helped:

- **Learning the basics first.** I read the Astro docs before asking an agent to build
  anything. I picked Tailwind because its class names are explicit, which makes AI-generated
  markup easier to review.
- **Giving the agents context.** `CLAUDE.md` describes the project structure, commands, and
  conventions, so Claude Code doesn't start from zero every session. For Codex I added the
  Astro Docs MCP server in `.codex/config.toml`, so it reads the current docs instead of
  guessing.
- **Describing the business, not the code.** I wrote requirements like "adding a language
  shouldn't mean editing every page" or "a new location should update hours, schema, and
  reservation slots." The agents suggested structures; I picked what fit.
- **Small iterations.** Plan, build, run `npm run build`, check desktop and mobile, commit.
  About 80 commits. When something was wrong, I described the behavior instead of asking for a
  rewrite.

The agents were fast at writing code. They couldn't decide what a restaurant needs, whether the
copy sounded right, or whether the layout felt good on a phone. That part was mine.

## Project structure

- `src/data/routing.ts` defines languages, page slugs and localized URL helpers.
- `src/data` contains typed restaurant information, translations, culture and gallery content.
- Italian pages live in `src/pages`; other languages use `src/pages/[locale]/[...slug].astro`.
- `src/layouts/SiteLayout.astro` adds localized archive notices, demo metadata, navigation and footer.
- `src/components/ReservationForm.astro` and `src/scripts/reservationForm.ts` implement the browser-only simulation.
- `src/data/project.ts` identifies the current external official website and source repository.
- Images in `src/assets` are optimized at build time; `public/` contains raw assets and response headers.

Opening hours and reservation ranges are historical data. Keep the existing location
and time-slot relationships for demonstration; do not treat them as current business information.

## Run locally

Requires Node 22.12 or newer. **No `.env` file or reservation-service keys are needed.**

```bash
git clone https://github.com/lorenzoyang/sinahp2.git
cd sinahp2
npm ci
npm run dev
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local Astro development server |
| `npm run check` | Astro and TypeScript diagnostics |
| `npm run build` | Diagnostics and production build |
| `npm run preview` | Build and preview with Wrangler |
| `npm run test:demo` | Browser checks; first install Chromium with `npx playwright install chromium` |
| `npm run deploy` | Build and deploy the historical demo to the existing Cloudflare Worker |

## Deployment and project status

The demo uses the existing Worker name `sinahp2` and public address
`https://sinahp2.yrw.workers.dev/`. Both the Astro site URL and metadata origin use
this address. Keep them consistent if you adapt the project.

Deployment requires your own Cloudflare authentication. There is no production-booking
mode or environment flag: supplying old form keys cannot re-enable real submissions.
Do not reconnect booking services or tracking to this historical demo.

The repository is intended to remain public and be archived after the final update is
pushed, deployed and verified. Archiving the repository does not shut down the demo.
Its screenshot and AI development notes remain as a record of the original project.

GitHub About description:

> Archived multilingual restaurant website built with Astro and Tailwind. Interactive demo with simulated reservations. Mostly written with Codex and Claude Code.

GitHub About website: `https://sinahp2.yrw.workers.dev/`.

## Credit

Built by [@lorenzoyang](https://github.com/lorenzoyang), with Codex and Claude Code as coding assistants.

## License

Copyright (C) 2026 lorenzoyang and contributors.

The project's source code is licensed under the
[GNU Affero General Public License, version 3 only (AGPL-3.0-only)](LICENSE).
You may use, modify, and redistribute it, including commercially, under that license.
It is provided without any warranty; see [LICENSE](LICENSE) for the full terms.

- If you redistribute this code or a covered modified version, retain the copyright and
  license notices, license the covered work under AGPL-3.0, and provide the corresponding
  source as required by the license. You cannot distribute a covered derivative as
  proprietary, closed-source software.
- If you modify this project and let users interact with your version over a network
  (for example, by deploying a website), you must prominently offer those users free access
  to the complete corresponding source of that version, including your changes. A visible
  source-code link to the deployed version's repository or source archive is a practical way
  to provide this access; a link to the unchanged upstream project is insufficient if you
  have made changes.
- Merely visiting a website built with this project does not require visitors to open-source
  their own projects. Private use and modification without distribution or remote user
  interaction do not require publishing your changes.

The Sina Hotpot brand, logos, photos, and restaurant copy belong to Ristorante Sina Hotpot
S.r.l. and are not covered by the source-code license. No permission to reuse those assets
or use the restaurant's trademarks is granted here; obtain permission or replace them when
adapting this project. Third-party dependencies remain under their respective licenses.

This summary explains the intent; the full license text governs the source code.
