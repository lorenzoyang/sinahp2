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
  archive: {
    label: string;
    notice: string;
    currentWebsite: string;
    sourceCode: string;
    historicalContact: string;
    formNotice: string;
    javascriptRequired: string;
    dataNotice: string;
  };
  meta: {
    homeTitle: string;
    description: string;
  };
  layout: {
    skipToContent: string;
    contact: string;
    social: string;
  };
  a11y: {
    primaryNavigation: string;
    languageMenu: string;
    mobileNavigation: string;
    restaurantPhotos: string;
    photoSlides: string;
    photoNavigation: string;
    photoLabel: string;
    carousel: string;
  };
  nav: Record<Exclude<PageId, "success"> | "menu", string>;
  cta: Record<
    | "reserve"
    | "culture"
    | "map"
    | "viewDetails"
    | "backHome"
    | "learnMore"
    | "gallery",
    string
  >;
  home: {
    eyebrow: string;
    title: string;
    intro: string;
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
    wechat: string;
    address: string;
    hours: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    categories: Record<GalleryCategoryId, string>;
    video: {
      eyebrow: string;
      title: string;
      intro: string;
      play: string;
      pause: string;
      mute: string;
      unmute: string;
    };
  };
  reservation: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: Record<
      "name" | "phone" | "guests" | "date" | "time" | "location" | "message",
      string
    >;
    placeholders: Record<"name" | "phone" | "location" | "message", string>;
    hints: Record<"time", string>;
    consentPrefix: string;
    privacyLink: string;
    consentSuffix: string;
    submit: string;
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
