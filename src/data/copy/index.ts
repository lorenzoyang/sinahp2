import type { Locale } from "../routing";
import type { LocaleCopy } from "./types";
import { enCopy } from "./en";
import { esCopy } from "./es";
import { frCopy } from "./fr";
import { itCopy } from "./it";
import { zhCopy } from "./zh";

export const copy = {
  it: itCopy,
  zh: zhCopy,
  en: enCopy,
  es: esCopy,
  fr: frCopy,
} as const satisfies Record<Locale, LocaleCopy>;
