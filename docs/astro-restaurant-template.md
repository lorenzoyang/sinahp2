# Astro Restaurant Website Template

This guide captures the reusable architecture and development pattern of this
Astro restaurant website. Use it as a Codex-facing blueprint when starting a
new restaurant site for any cuisine or brand.

The goal is not to clone this exact restaurant. The goal is to reuse the
project shape: typed data, localized routes, shared layout, reusable visual
patterns, optimized local images, and small progressive client scripts.

## Core Stack

- Astro with strict TypeScript.
- Tailwind CSS v4 through the Vite integration.
- Static output by default, deployed through the Cloudflare adapter.
- `@astrojs/sitemap` for sitemap and localized alternate URL support.
- Local images imported from `src/assets/images` and rendered with
  `astro:assets`.
- Minimal browser JavaScript, scoped to small enhancements through `data-*`
  attributes.

Use static rendering unless the project needs a secure server-only capability,
such as an email or reservation endpoint. If server behavior is needed, keep it
small, provider-neutral, and isolated from the presentation layer.

## Architecture Principles

- Put restaurant facts in `src/data`, not inside components.
- Keep route files thin; route files should select page components and pass
  typed props.
- Use a single layout shell for document metadata, canonical URLs, localized
  alternates, header, footer, cookie consent, and global scripts.
- Split UI into layout components, page components, reusable UI primitives, and
  page-specific sections.
- Keep copy localized through typed content modules.
- Treat images as first-class content: import them, type them, size them, and
  provide meaningful alt text where the image is informative.
- Add client JavaScript only for behavior that needs the browser. Attach it
  using stable `data-*` hooks instead of brittle class selectors.
- Keep provider choices replaceable. Reservation, email, analytics, cookie, or
  marketing tools should not define the architecture.

## Recommended Project Structure

```text
src/
  assets/images/
    brand/
    homepage/
    gallery/
    locations/
    reservation/
  components/
    layout/
      SiteHeader.astro
      SiteFooter.astro
    pages/
      HomePage.astro
      LocationsPage.astro
      GalleryPage.astro
      ReservationPage.astro
      PrivacyPage.astro
      SuccessPage.astro
    ui/
      SectionHeader.astro
      CtaLink.astro
    home/
      HomeHeroSection.astro
      HomeLocationsSection.astro
  data/
    copy/
      index.ts
      types.ts
      en.ts
      it.ts
    routing.ts
    restaurant.ts
    seo.ts
    gallery.ts
    imageAssets.ts
    pageImages.ts
    site.ts
    types.ts
  layouts/
    SiteLayout.astro
  pages/
    index.astro
    [locale]/[...slug].astro
    locations.astro
    gallery.astro
    reservation.astro
    privacy-policy.astro
    reservation-success.astro
    robots.txt.ts
    404.astro
  scripts/
    dom.ts
    headerMenus.ts
    locationCarousel.ts
    reservationForm.ts
  styles/
    global.css
```

Rename folders and pages for the new restaurant, but keep the ownership model:
routes own routing, data owns facts and copy, components own rendering, scripts
own browser behavior.

## Data Model

Create typed data modules before building the UI. Future projects should define
at least these concepts:

- `RestaurantBrand`: public name, optional legal name, logo, email, phone,
  social links, footer/legal lines.
- `locations`: one or more physical locations with address, phone, hours, map
  URL, reservation time ranges, primary image, and gallery images.
- `localizedCopy`: all nav labels, page headlines, CTA labels, form labels,
  accessibility labels, cookie text, and privacy text by locale.
- `seoMeta`: localized title and description per page.
- `galleryGroups`: typed image groups for food, interiors, drinks, team, events,
  or any other brand-appropriate category.
- `pageImages`: named hero and supporting images for page components.
- `reservationProvider`: a replaceable description of how reservation requests
  are handled.

Use TypeScript `as const`, `satisfies`, and exported types so missing localized
copy, missing routes, or invalid gallery categories fail during development.

Example shape:

```ts
export const defaultLocale = "it" as const;
export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];

export const pageSlugs = {
  locations: "locations",
  gallery: "gallery",
  reservation: "reservation",
  privacy: "privacy-policy",
} as const;

export type PageId = "home" | keyof typeof pageSlugs;
```

## Routing And Localization

Use explicit default-locale pages and a localized catch-all route for
non-default locales.

- `src/pages/index.astro` renders the default home page.
- Default-locale page files render their matching page component.
- `src/pages/[locale]/[...slug].astro` maps localized static paths to page
  components.
- `src/data/routing.ts` owns locales, page IDs, slugs, path helpers, and static
  path generation.
- `getPath(locale, page)` is the only normal way to create internal links.
- `getPageAlternatePaths(page)` and similar helpers feed canonical and hreflang
  tags.

Keep localized route generation typed. Do not hardcode localized URLs inside
components unless there is a specific per-page exception.

## Layout, SEO, And Structured Data

`SiteLayout.astro` should wrap every page and own:

- Global CSS import.
- HTML language attribute.
- Favicon and sitemap links.
- Page title and description.
- Canonical URL.
- Localized alternate links.
- Open Graph and Twitter metadata.
- Default social image.
- Shared structured data.
- Header, main landmark, footer, cookie banner, and global client scripts.
- Skip link and other site-wide accessibility affordances.

Put SEO helpers in `src/data/seo.ts`. Keep `siteOrigin`, social image defaults,
localized SEO metadata, canonical URL helpers, alternate URL helpers, and
schema.org generation in one place.

For structured data, generate a `WebSite` and `Organization` graph plus one
business entity per location when appropriate. Read business-specific values
from data modules, not from page components.

## Component Pattern

Use four tiers of components:

- `components/layout`: persistent chrome such as header and footer.
- `components/pages`: page-level assemblies that import `SiteLayout`, data, and
  page sections.
- `components/ui`: small reusable primitives such as section headers and CTA
  links.
- Feature folders such as `components/home` or `components/locations`: reusable
  sections or widgets for one page family.

Page components should be mostly declarative:

- Read typed data and localized copy at the top.
- Define local class maps for layout, media, text, and actions.
- Render sections using reusable UI primitives.
- Import browser scripts only when that page needs them.

Prefer class maps over long inline class strings in markup. This keeps Astro
files scannable and makes future brand adaptation easier.

## Styling System

Use Tailwind as the default styling layer.

- Define brand tokens in `src/styles/global.css` with `@theme`.
- Keep global CSS for base styles, focus rings, shared interactive states,
  reduced-motion behavior, and selectors that need non-Tailwind syntax.
- Put reusable Tailwind recipes in `src/utils/ui.ts`, such as section bands,
  containers, headings, cards, media frames, and image size presets.
- In components, create small local class maps for page-specific composition.
- Use stable dimensions and responsive constraints for fixed-format UI:
  aspect ratios, min widths, max widths, grid tracks, and image sizes.
- Avoid text overflow by using `min-w-0`, `break-words`, sensible line heights,
  and responsive layout changes.

Recommended visual direction for restaurant sites:

- Image-rich first screen with a full-bleed or immersive hero.
- Clear primary CTA above the fold.
- Strong local identity through brand colors, real food/place photography, and
  location details.
- Compact, readable sections after the hero.
- Cards only for repeated items, forms, modals, or genuinely framed content.
- Accessible contrast, visible focus states, and reduced-motion support.

## Optional UI Libraries

Libraries such as daisyUI may be used in future projects, but treat them as an
adapter layer.

- Keep routing, data, copy, SEO, and image architecture unchanged.
- Use library components only where they reduce repetitive UI work.
- Keep brand tokens and project-specific layout decisions in the project, not
  hidden inside library defaults.
- Wrap library-specific patterns in local components when they appear in more
  than one place.
- Do not let a UI library force copy, data, route, or SEO changes.

## Images And Galleries

Use local images and Astro image optimization.

- Store images by purpose: brand, homepage, gallery, locations, reservation,
  events, team, or menu.
- Import named hero/supporting images in `pageImages.ts`.
- Use `import.meta.glob` plus an image helper for gallery folders.
- Sort gallery images deterministically.
- Provide fallbacks for location galleries so empty folders do not break pages.
- Use `ImageMetadata` types for imported assets.
- Set `loading="eager"` only for critical first-viewport images.
- Define `widths` and `sizes` through shared presets.

Keep gallery categories generic and brand-appropriate. For a new restaurant, the
categories might be dishes, interiors, drinks, staff, events, grill, pasta,
desserts, wine, or private dining.

## Client Scripts

Keep client scripts small and independent.

- Put shared DOM helpers in `src/scripts/dom.ts`.
- Query with `data-*` selectors.
- Export an empty object from scripts when needed so TypeScript treats them as
  modules.
- Respect `prefers-reduced-motion` for animations.
- Avoid coupling scripts to visible text or localized copy.
- Pass script labels or settings through `data-*` attributes from components
  when needed.

Common script candidates:

- Header menu behavior.
- Locale menu closing behavior.
- Photo carousel controls.
- Copy-to-clipboard for contact IDs.
- Reservation form enhancement.
- Reveal-on-scroll animation.
- Cookie consent.
- Analytics conversion hooks.

## Reservation And Contact Flow

Do not hardcode one form provider into the template.

For future projects, define reservation behavior as a replaceable capability:

- Direct phone links.
- Messaging links.
- Map links.
- External booking URL.
- Server-side email endpoint.
- Third-party reservation platform.

If the project submits a form:

- Keep provider credentials server-side unless the provider is explicitly safe
  for public browser use.
- Keep the front-end response shape simple, such as
  `{ success: boolean, message?: string }`.
- Keep provider-specific code in one endpoint or one script module.
- Validate required fields server-side when using an endpoint.
- Keep privacy copy aligned with the actual providers in use.

The reusable part is the form UX, typed labels, location-based time slots, and
success/error handling. The provider is not part of the template.

## Accessibility Checklist

- Every page has one meaningful `h1`.
- Header and mobile navigation have localized `aria-label` values.
- Current navigation links use `aria-current`.
- Language switcher links preserve the matching page where possible.
- Carousels expose region labels, slide labels, and controls.
- Informative images have localized or data-derived alt text.
- Decorative images use empty alt text.
- Forms use real labels, required attributes, clear status messages, and
  `aria-live` for async feedback.
- Focus rings are visible on all interactive elements.
- Reduced-motion preferences are respected.

## Future Project Checklist For Codex

Before building UI:

- Confirm the restaurant name, cuisine, city, locations, contact methods, and
  reservation method.
- Choose locales and the default locale.
- Define routes and page IDs.
- Gather brand assets, logo, color direction, and real photography.
- Create typed brand, location, routing, copy, SEO, gallery, and image modules.
- Decide whether the site is static-only or needs a server endpoint.
- Decide whether daisyUI or another UI library is useful for this project.

During implementation:

- Scaffold route files as thin wrappers.
- Build `SiteLayout.astro` early.
- Create reusable `SectionHeader` and CTA components before page sections.
- Build the home page from sections, not as one large file.
- Keep repeated page patterns in `src/utils/ui.ts`.
- Add browser scripts only after static markup works.
- Keep links generated through route helpers.
- Keep provider-specific reservation logic isolated.

Before delivery:

- Run `npm run build`.
- Check localized URLs, canonical tags, and hreflang links.
- Check mobile and desktop layouts.
- Verify first-viewport images render correctly.
- Test forms, menus, carousels, and cookie controls.
- Search for old brand names, old contact values, placeholder text, and
  provider-specific leftovers.
- Confirm privacy text matches actual project behavior.

## What Not To Copy Blindly

- Current restaurant names, addresses, phone numbers, legal text, social links,
  analytics IDs, or provider configuration.
- Cuisine-specific sections unless they match the new restaurant.
- Existing color tokens without adapting them to the new brand.
- Existing gallery categories if the new restaurant needs different visual
  storytelling.
- A client-side form provider when a future project requires server-side
  secrets.

Use this template as the architectural skeleton. Let each new restaurant supply
its own brand, photography, copy, pages, reservation workflow, and visual tone.
