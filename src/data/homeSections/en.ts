import type { HomeSectionContent } from "./types";

export const enHomeSections = {
    signatures: {
      intro:
        "Premium hotpot is defined by readable ingredients, well-balanced broth, thin-sliced meats, fresh greens, and sauces that guests can shape for themselves.",
      items: [
        [
          "Broths with direction",
          "Mild, spicy, or split broth changes the pace and flavor profile of the entire table.",
        ],
        [
          "Fresh ingredients that cook fast",
          "Thin-sliced beef, mushrooms, tofu, and greens should feel clean, quick, and easy to understand.",
        ],
        [
          "Sauce as a finishing layer",
          "Each guest can tune the same ingredient toward savory, spicy, fresh, or aromatic notes.",
        ],
      ],
    },
    occasions: {
      eyebrow: "Dining occasions",
      title: "One format, several ways to host a dinner",
      intro:
        "Hotpot is naturally social, but it is not limited to loud group dinners. It can also feel polished, calm, and well paced.",
      items: [
        [
          "Dates and slower evenings",
          "Cooking at the table stretches the meal naturally and gives conversation space without forcing it.",
        ],
        [
          "Groups and celebrations",
          "The table stays active throughout the meal, which makes sharing and discovery part of the event.",
        ],
        [
          "Families and mixed-preference tables",
          "Different broths and flexible ingredients help new guests and regulars enjoy the same dinner comfortably.",
        ],
        [
          "Hosts, clients, and informal business dinners",
          "The format feels memorable and refined while remaining accessible to Italian and international guests.",
        ],
      ],
    },
    visit: {
      eyebrow: "First visit",
      title: "A few cues make the experience easier",
      intro:
        "For many European guests, hotpot is unfamiliar. The homepage should reduce friction and help them arrive prepared.",
      items: [
        "A split pot is usually the easiest first choice.",
        "Starting with vegetables, tofu, and thin-sliced meats makes the meal easier to read.",
        "Sauces work best when adjusted gradually after the first few bites.",
        "Allergies, dietary needs, and special occasions should be mentioned in the reservation note.",
      ],
    },
    atmosphere: {
      eyebrow: "In-room experience",
      title: "Steam, warmth, and service with a clear rhythm",
      intro:
        "A premium hotpot dinner is not only about variety. It is about how the table feels as the meal unfolds.",
      items: [
        "The pot stays at the center, so the dinner keeps a shared focal point from start to finish.",
        "Steam and aroma create presence without making the room feel heavy or overdesigned.",
        "The service format works for long dinners and for more time-defined evening plans.",
      ],
      stats: [
        "Fast online reservation request",
        "Prato open late",
        "Florence open for lunch and dinner",
        "Suitable for local and international guests",
      ],
    },
    reservation: {
      eyebrow: "End with a clear next step",
      title: "Reserve before you arrive",
      intro:
        "A short request is enough to notify the right location. If plans change quickly, direct contact is still available.",
      items: [
        "Choose the location based on timing and area.",
        "Add allergies or special requests before arrival.",
        "Use WhatsApp for urgent updates or last-minute questions.",
      ],
    },
  } as const satisfies HomeSectionContent;
