import type { TextPair } from "../types";

export type HomeSectionContent = {
  signatures: {
    intro: string;
    items: readonly TextPair[];
  };
  reservation: {
    eyebrow: string;
    title: string;
    intro: string;
  };
};
