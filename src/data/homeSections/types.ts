import type { TextPair } from "../types";

export type HomeSectionContent = {
  signatures: {
    intro: string;
    items: readonly TextPair[];
  };
  occasions: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly TextPair[];
  };
  visit: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly string[];
  };
  atmosphere: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly string[];
    stats: readonly string[];
  };
  reservation: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly string[];
  };
};
