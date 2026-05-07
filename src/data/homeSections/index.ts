import type { Locale } from "../routing";
import { enHomeSections } from "./en";
import { esHomeSections } from "./es";
import { frHomeSections } from "./fr";
import { itHomeSections } from "./it";
import type { HomeSectionContent } from "./types";
import { zhHomeSections } from "./zh";

export const homeSections = {
  it: itHomeSections,
  zh: zhHomeSections,
  en: enHomeSections,
  es: esHomeSections,
  fr: frHomeSections,
} as const satisfies Record<Locale, HomeSectionContent>;

export function getHomeSections(locale: Locale) {
  return homeSections[locale];
}
