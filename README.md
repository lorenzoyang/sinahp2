# Sina Hotpot Website

Astro site for Sina Hotpot with multilingual static pages, Cloudflare output,
optimized local image assets, and a Web3Forms reservation flow.

## Commands

Run commands from the project root.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Astro dev server. |
| `npm run check` | Run Astro and TypeScript diagnostics. |
| `npm run build` | Run diagnostics and build the Cloudflare output. |
| `npm run validate` | Alias for the production build check. |
| `npm run preview` | Build and preview through Wrangler. |
| `npm run deploy` | Build and deploy with Wrangler. |

## Project Structure

- `src/pages`: default and localized route entrypoints.
- `src/layouts/SiteLayout.astro`: shared document shell, navigation, SEO tags, and footer.
- `src/components/pages`: page-level Astro components.
- `src/components/ui`: small reusable UI components.
- `src/data`: restaurant, routing, SEO, gallery, copy, and page image data.
- `src/utils`: presentation helpers, shared UI class maps, and reservation time utilities.
- `src/scripts`: small client-side enhancements for menus, carousels, reveals, and reservations.
- `src/assets/images`: imported images processed by Astro.

## Content And Data

- Restaurant metadata is in `src/data/restaurant.ts`.
- Routes and locale rules are in `src/data/routing.ts`.
- SEO and structured data are in `src/data/seo.ts`.
- Gallery groups are derived in `src/data/gallery.ts` from image folders.
- Page copy is split by locale under `src/data/copy`.
- Home section copy is split by locale under `src/data/homeSections`.
- Culture topic content is split by topic under `src/data/cultureTopics`.

When editing restaurant hours, update both the display text (`hours`) and the
structured values (`schemaOpeningHours`, `reservationTimeRanges`) so the site,
schema output, and reservation form stay aligned.

## Reservation Form

The reservation form submits through Web3Forms.

- `PUBLIC_WEB3FORMS_ACCESS_KEY`: Web3Forms access key.
- `PUBLIC_WEB3FORMS_CAPTCHA_ENABLED`: set to `true` to render and require
  hCaptcha. Leave unset or set to `false` to disable captcha without removing
  the related code.

Reservation time slots are generated from `reservationTimeRanges` with the
shared helper in `src/utils/reservation.ts`.

## Deployment Notes

The project uses `@astrojs/cloudflare` with compile-time image optimization.
Before deploying, run `npm run build` and verify that Astro reports zero
diagnostics.
