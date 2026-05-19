import type { HomeSectionContent } from "./types";

export const enHomeSections = {
    signatures: {
      intro:
        "Quality lives in the rhythm of the table: fragrant broth, ingredients cooked in the moment, and sauces that make every bite your own.",
      items: [
        [
          "Broths that open the meal",
          "Mild, spicy, or split, the broth gives the table character without making it complicated.",
        ],
        [
          "Ingredients cooked in the moment",
          "Thin meats, vegetables, mushrooms, and tofu are made for small, hot tastings throughout the meal.",
        ],
        [
          "Sauces for your own balance",
          "Each guest can find their point between savory, fresh, spicy, and aromatic.",
        ],
      ],
    },
    reservation: {
      eyebrow: "Reservation",
      title: "Bring everyone around the pot",
      intro:
        "Send a request online or message us on WhatsApp for quick confirmation and last-minute changes.",
    },
  } as const satisfies HomeSectionContent;
