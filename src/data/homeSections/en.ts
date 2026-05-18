import type { HomeSectionContent } from "./types";

export const enHomeSections = {
    signatures: {
      intro:
        "Clear quality: aromatic broths, fresh ingredients, and sauces guests can shape for themselves.",
      items: [
        [
          "Aromatic broths",
          "Choose a mild, spicy, or split base for the table.",
        ],
        [
          "Fresh ingredients",
          "Thin cuts and vegetables arrive ready for quick cooking.",
        ],
        [
          "Personal sauces",
          "Finish each bite with your own balance of flavor.",
        ],
      ],
    },
    reservation: {
      eyebrow: "Reservation",
      title: "Reserve your table",
      intro:
        "Send a request online or message us on WhatsApp for quick confirmation.",
    },
  } as const satisfies HomeSectionContent;
