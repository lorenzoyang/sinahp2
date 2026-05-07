import type { Locale } from "../routing";
import type { LocalizedContent, TextSection } from "../types";

export type TopicContent = {
  kicker: string;
  title: string;
  summary: string;
  highlights: readonly string[];
  detailIntro: string;
  sections: readonly TextSection[];
  tipsTitle: string;
  tips: readonly string[];
};

export type CultureTopic = {
  image: string;
  content: LocalizedContent<Locale, TopicContent>;
};
