export const defaultLocale = "it" as const;
export const locales = ["it", "zh", "en", "es", "fr"] as const;
export const nonDefaultLocales = ["zh", "en", "es", "fr"] as const;

export type Locale = (typeof locales)[number];
export type PageId =
  | "home"
  | "culture"
  | "locations"
  | "reservation"
  | "success"
  | "privacy";
export type LocalizedRoutePage = PageId | "cultureTopic";
export type CultureTopicId =
  | "basics"
  | "broths"
  | "ingredients"
  | "ritual"
  | "etiquette";
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

export const pageSlugs: Record<Exclude<PageId, "home">, string> = {
  culture: "hotpot-culture",
  locations: "locations",
  reservation: "reservation",
  success: "reservation-success",
  privacy: "privacy-policy",
};

export const primaryNavPages = [
  "home",
  "culture",
  "locations",
  "reservation",
] as const satisfies PageId[];

const localizedStaticPages = [
  "home",
  "culture",
  "locations",
  "reservation",
  "success",
  "privacy",
] as const satisfies PageId[];

export const cultureTopicSlugs: Record<CultureTopicId, string> = {
  basics: "what-is-hotpot",
  broths: "broths-and-flavors",
  ingredients: "ingredients-and-sauces",
  ritual: "how-to-eat-hotpot",
  etiquette: "first-visit-etiquette",
};

export const cultureTopicIds = Object.keys(
  cultureTopicSlugs,
) as CultureTopicId[];

function getLocalePrefix(locale: Locale) {
  return locale === defaultLocale ? "" : `/${locale}`;
}

export function getPath(locale: Locale, page: PageId = "home") {
  const pagePath = page === "home" ? "" : pageSlugs[page];
  const prefix = getLocalePrefix(locale);

  if (!pagePath) {
    return `${prefix || "/"}`;
  }

  return `${prefix}/${pagePath}/`;
}

export function getCultureTopicPath(locale: Locale, topic: CultureTopicId) {
  const prefix = getLocalePrefix(locale);

  return `${prefix}/${pageSlugs.culture}/${cultureTopicSlugs[topic]}/`;
}

export function getCultureTopicAlternatePaths(topic: CultureTopicId) {
  return Object.fromEntries(
    locales.map((locale) => [locale, getCultureTopicPath(locale, topic)]),
  ) as Record<Locale, string>;
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

function getStaticPageSlug(page: PageId) {
  return page === "home" ? undefined : pageSlugs[page];
}

export function asLocale(value: string | undefined): Locale {
  if (locales.includes(value as Locale)) {
    return value as Locale;
  }

  return defaultLocale;
}
