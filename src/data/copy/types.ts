import type { CultureTopicId, PageId } from "../routing";
import type { GalleryCategoryId } from "../gallery";
import type { TextPair } from "../types";

export type CultureBlock = readonly [CultureTopicId, string, string];

export type PrivacySection = {
  title: string;
  paragraphs: readonly string[];
  items?: readonly string[];
};

export type LocaleCopy = {
  meta: {
    homeTitle: string;
    description: string;
  };
  layout: {
    skipToContent: string;
    contact: string;
    social: string;
  };
  nav: Record<Exclude<PageId, "success"> | "menu", string>;
  cta: Record<
    | "reserve"
    | "culture"
    | "call"
    | "map"
    | "whatsapp"
    | "backHome"
    | "learnMore"
    | "gallery",
    string
  >;
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    proof: readonly string[];
    sections: {
      ritualTitle: string;
      ritualIntro: string;
      locationsTitle: string;
      locationsIntro: string;
      premiumTitle: string;
    };
    steps: readonly TextPair[];
  };
  culture: {
    eyebrow: string;
    title: string;
    intro: string;
    blocks: readonly [CultureBlock, CultureBlock, CultureBlock];
    whyTitle: string;
    whyItems: readonly string[];
    etiquetteTitle: string;
    etiquette: readonly string[];
  };
  locations: {
    eyebrow: string;
    title: string;
    intro: string;
    daily: string;
    phone: string;
    address: string;
    hours: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    categories: Record<GalleryCategoryId, string>;
  };
  reservation: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: Record<
      "name" | "phone" | "guests" | "date" | "time" | "location" | "message",
      string
    >;
    placeholders: Record<"name" | "phone" | "message", string>;
    consentPrefix: string;
    privacyLink: string;
    consentSuffix: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    missingKey: string;
    captchaRequired: string;
  };
  success: {
    title: string;
    intro: string;
    next: string;
  };
  privacy: {
    title: string;
    intro: string;
    updated: string;
    sections: readonly PrivacySection[];
  };
};
