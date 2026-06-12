export const defaultLocale = "it" as const;
export const locales = ["it", "zh", "en", "es", "fr"] as const;

export type Locale = (typeof locales)[number];
export type NonDefaultLocale = Exclude<Locale, typeof defaultLocale>;

export const nonDefaultLocales = locales.filter(
  (locale): locale is NonDefaultLocale => locale !== defaultLocale,
);

export const pageSlugs = {
  culture: "hotpot-culture",
  locations: "locations",
  gallery: "gallery",
  reservation: "reservation",
  success: "reservation-success",
  privacy: "privacy-policy",
} as const;

type SluggedPageId = keyof typeof pageSlugs;

export type PageId = "home" | SluggedPageId;
export type LocalizedRoutePage = PageId | "cultureTopic";

export const cultureTopicSlugs = {
  basics: "what-is-hotpot",
  broths: "broths-and-flavors",
  ingredients: "ingredients-and-sauces",
  ritual: "how-to-eat-hotpot",
  etiquette: "first-visit-etiquette",
} as const;

export type CultureTopicId = keyof typeof cultureTopicSlugs;
export type LocalizedRouteProps = {
  locale: Locale;
  page: LocalizedRoutePage;
  topicId?: CultureTopicId;
};

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  zh: "中文",
  en: "English",
  es: "Español",
  fr: "Français",
};

export const localeFlags: Record<Locale, string> = {
  it: "🇮🇹",
  zh: "🇨🇳",
  en: "🇬🇧",
  es: "🇪🇸",
  fr: "🇫🇷",
};

export const htmlLang: Record<Locale, string> = {
  it: "it",
  zh: "zh-CN",
  en: "en",
  es: "es",
  fr: "fr",
};

export const primaryNavPages = [
  "home",
  "culture",
  "locations",
  "gallery",
  "reservation",
] as const satisfies readonly PageId[];

const localizedStaticPages = [
  ...primaryNavPages,
  "success",
  "privacy",
] as const satisfies readonly PageId[];

export const cultureTopicIds = Object.keys(
  cultureTopicSlugs,
) as CultureTopicId[];

function getLocalePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

export function getPath(locale: Locale, page: PageId = "home"): string {
  const pagePath = page === "home" ? "" : pageSlugs[page];
  const prefix = getLocalePrefix(locale);

  if (!pagePath) {
    return prefix ? `${prefix}/` : "/";
  }

  return `${prefix}/${pagePath}/`;
}

export function getCultureTopicPath(
  locale: Locale,
  topic: CultureTopicId,
): string {
  const prefix = getLocalePrefix(locale);

  return `${prefix}/${pageSlugs.culture}/${cultureTopicSlugs[topic]}/`;
}

export function getCultureTopicAlternatePaths(
  topic: CultureTopicId,
): Record<Locale, string> {
  return mapLocales((locale) => getCultureTopicPath(locale, topic));
}

export function getLocalizedStaticPaths() {
  return nonDefaultLocales.flatMap((locale) => {
    const pages = localizedStaticPages.map((page) =>
      createLocalizedPage(locale, page, getStaticPageSlug(page)),
    );
    const topics = cultureTopicIds.map((topicId) =>
      createLocalizedTopic(locale, topicId),
    );

    return [...pages, ...topics];
  });
}

export function getDefaultCultureTopicStaticPaths() {
  return cultureTopicIds.map((topicId) => ({
    params: { topic: cultureTopicSlugs[topicId] },
    props: { topicId },
  }));
}

function createLocalizedPage(
  locale: Locale,
  page: PageId,
  slug: string | undefined,
) {
  return {
    params: { locale, slug },
    props: { locale, page } satisfies LocalizedRouteProps,
  };
}

function createLocalizedTopic(locale: Locale, topicId: CultureTopicId) {
  return {
    params: {
      locale,
      slug: `${pageSlugs.culture}/${cultureTopicSlugs[topicId]}`,
    },
    props: {
      locale,
      page: "cultureTopic",
      topicId,
    } satisfies LocalizedRouteProps,
  };
}

function getStaticPageSlug(page: PageId): string | undefined {
  return page === "home" ? undefined : pageSlugs[page];
}

export function mapLocales<TValue>(
  mapper: (locale: Locale) => TValue,
): Record<Locale, TValue> {
  return Object.fromEntries(
    locales.map((locale) => [locale, mapper(locale)]),
  ) as Record<Locale, TValue>;
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function asLocale(value: string | undefined): Locale {
  if (isLocale(value)) {
    return value;
  }

  return defaultLocale;
}
