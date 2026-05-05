export const defaultLocale = "it";

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

export const brand = {
  chineseName: "鲜入围煮",
  publicName: "Sina Hotpot",
  email: "sinahotpot@gmail.com",
  whatsapp: "+39 348 032 8697",
  whatsappHref: "https://wa.me/393480328697",
  instagram: "https://www.instagram.com/sinahotpot/",
  facebook: "https://www.facebook.com/p/Sina-Hot-Pot-100071037279604/",
};

export const images = {
  hero: "/images/generated/premium-hotpot-hero.png",
  interior: "/images/restaurant/sina-prato-interior-reference.jpg",
  exterior: "/images/restaurant/sina-prato-exterior-reference.jpg",
  ingredients: "/images/food/hotpot-meat-vegetables-pexels.jpg",
  platter: "/images/food/ingredients-arrangement-pexels.jpg",
  steamingSetup: "/images/food/steaming-hotpot-setup-pexels.jpg",
  mealSpread: "/images/food/hotpot-meal-spread-pexels.jpg",
  culture: "/images/culture/steaming-hotpot-table-pexels.jpg",
  table: "/images/culture/hotpot-table-unsplash.jpg",
} as const;

export const locations = [
  {
    id: "prato",
    city: "Prato",
    phone: "+39 348 032 8697",
    address: "Via cava 109, Prato",
    hours: "18:00-02:00",
    image: images.interior,
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Via%20cava%20109%2C%20Prato",
  },
  {
    id: "firenze",
    city: "Firenze",
    phone: "+39 344 681 3199",
    address: "Via Ghibellina 80R, Firenze",
    hours: "12:00-15:00, 18:30-23:00",
    image: images.platter,
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Via%20Ghibellina%2080R%2C%20Firenze",
  },
] as const;

export type RestaurantLocation = (typeof locations)[number];

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

export function getPhoneHref(phone: string) {
  return `tel:${phone.replaceAll(" ", "")}`;
}

export function getLocationLabel(location: RestaurantLocation) {
  return `${location.city} - ${location.address}`;
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
