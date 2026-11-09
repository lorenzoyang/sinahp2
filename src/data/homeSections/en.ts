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
      "eyebrow": "Reservation demo",
      "title": "Try a simulated reservation",
      "intro": "Explore the original form with fictional details. This simulation runs only in your browser and sends no request to the restaurant."
    },
  } as const satisfies HomeSectionContent;
