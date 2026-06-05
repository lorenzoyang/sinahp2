import {
  cultureTopicIds,
  defaultLocale,
  getCultureTopicAlternatePaths,
  getPath,
  htmlLang,
  locales,
  type Locale,
  type PageId,
} from "./routing";
import { brand, locations } from "./restaurant";
import defaultSocialImageUrl from "../assets/images/brand/sina-hotpot-logo-horizontal.svg?url";

export const siteOrigin = "https://sinahp.com";
export const siteName = brand.publicName;
export { defaultSocialImageUrl };
export const defaultSocialImageAlt = "Sina Hotpot logo";

export const openGraphLocales: Record<Locale, string> = {
  it: "it_IT",
  zh: "zh_CN",
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
};

export const indexablePages = [
  "home",
  "culture",
  "locations",
  "gallery",
  "reservation",
  "privacy",
] as const satisfies readonly PageId[];

export type AlternatePathMap = Partial<Record<Locale, string>>;
export type HreflangLink = {
  hreflang: string;
  href: string;
};
export type IndexableUrlGroup = {
  paths: Record<Locale, string>;
};

export function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, `${siteOrigin}/`).toString();
}

export function getCanonicalUrl(path: string): string {
  return toAbsoluteUrl(path);
}

export function getHreflangLinks(paths: AlternatePathMap): HreflangLink[] {
  const localeLinks = locales.flatMap((locale) => {
    const path = paths[locale];

    if (!path) {
      return [];
    }

    return {
      hreflang: htmlLang[locale],
      href: toAbsoluteUrl(path),
    };
  });
  const defaultPath = paths[defaultLocale];

  if (!defaultPath) {
    return localeLinks;
  }

  return [
    ...localeLinks,
    {
      hreflang: "x-default",
      href: toAbsoluteUrl(defaultPath),
    },
  ];
}

export function getPageAlternatePaths(page: PageId): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, getPath(locale, page)]),
  ) as Record<Locale, string>;
}

export function getIndexableUrlGroups(): IndexableUrlGroup[] {
  const pageGroups = indexablePages.map((page) => ({
    paths: getPageAlternatePaths(page),
  }));
  const topicGroups = cultureTopicIds.map((topicId) => ({
    paths: getCultureTopicAlternatePaths(topicId),
  }));

  return [...pageGroups, ...topicGroups];
}

export function getWebsiteStructuredData(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteOrigin}/#website`,
        name: siteName,
        url: siteOrigin,
        inLanguage: locales.map((locale) => htmlLang[locale]),
        publisher: {
          "@id": `${siteOrigin}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteOrigin}/#organization`,
        name: siteName,
        legalName: brand.legal.legalName,
        url: siteOrigin,
        email: brand.email,
        taxID: brand.legal.taxId,
        vatID: brand.legal.vatId,
        identifier: {
          "@type": "PropertyValue",
          propertyID: `${brand.legal.registrationAuthority} / P.IVA / C.F.`,
          value: brand.legal.taxId,
        },
        sameAs: [brand.instagram, brand.facebook],
      },
      ...locations.map((location) => ({
        "@type": "Restaurant",
        "@id": `${siteOrigin}/locations/#${location.id}`,
        name: `${siteName} ${location.city}`,
        url: `${siteOrigin}${getPath(defaultLocale, "locations")}#${location.id}`,
        email: brand.email,
        telephone: location.phone,
        servesCuisine: ["Chinese", "Hot pot"],
        priceRange: "EUR 30-50",
        image: toAbsoluteUrl(defaultSocialImageUrl),
        address: {
          "@type": "PostalAddress",
          streetAddress: location.structuredAddress.streetAddress,
          addressLocality: location.structuredAddress.addressLocality,
          postalCode: location.structuredAddress.postalCode,
          addressRegion: "Tuscany",
          addressCountry: "IT",
        },
        openingHours: location.schemaOpeningHours,
        sameAs: [brand.instagram, brand.facebook],
      })),
    ],
  };
}
