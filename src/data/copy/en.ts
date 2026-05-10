import type { LocaleCopy } from "./types";

export const enCopy = {
    meta: {
      homeTitle: "Sina Hotpot | Premium Hotpot in Prato and Florence",
      description:
        "Sina Hotpot brings premium Chinese hotpot to Tuscany with selected ingredients, aromatic broths, and restaurants in Prato and Florence.",
    },
    layout: {
      skipToContent: "Skip to content",
      contact: "Contact",
      social: "Social",
    },
    nav: {
      home: "Home",
      culture: "What is hotpot",
      locations: "Locations",
      gallery: "Gallery",
      reservation: "Reserve",
      privacy: "Privacy",
      menu: "Menu",
    },
    cta: {
      reserve: "Reserve a table",
      culture: "Discover hotpot",
      call: "Call",
      map: "Open map",
      whatsapp: "WhatsApp",
      backHome: "Back to home",
      learnMore: "Learn more",
    },
    home: {
      eyebrow: "Premium Chinese hotpot in Tuscany",
      title: "鲜入围煮 Sina Hotpot",
      intro:
        "A simmering pot, aromatic broths, and selected ingredients cooked at your table: refined, social, and easy to enjoy on the first visit.",
      proof: [
        "Two locations: Prato and Florence",
        "Fresh ingredients to share",
        "Quick online reservation request",
      ],
      sections: {
        ritualTitle: "How it works",
        ritualIntro:
          "Hotpot is not just soup. It is a shared dining ritual where guests choose the broth, ingredients, pace, and sauces.",
        locationsTitle: "Choose your location",
        locationsIntro:
          "Prato is open late into the night, while Florence welcomes lunch and dinner guests in the historic center.",
        premiumTitle: "Built for a memorable dinner",
      },
      steps: [
        [
          "Choose your broth",
          "Spicy, mild, or split: the broth sets the tone.",
        ],
        [
          "Order fresh ingredients",
          "Beef, vegetables, mushrooms, tofu, and house specialties cook in moments.",
        ],
        ["Cook at the table", "Each guest controls the pace and doneness."],
        [
          "Share the moment",
          "The center of the table becomes the center of the evening.",
        ],
      ],
      premium: [
        "Modern atmosphere with warm Chinese details.",
        "Ideal for groups, couples, families, and curious first-timers.",
        "A clear, welcoming way to experience Chinese dining culture.",
      ],
    },
    culture: {
      eyebrow: "First-time guide",
      title: "What is hotpot?",
      intro:
        "Hotpot is a Chinese dining tradition where broth stays hot at the center of the table. Guests cook fresh ingredients, mix sauces, and build their own flavor journey.",
      blocks: [
        [
          "ritual",
          "A participatory dinner",
          "The meal is finished together at the table, so conversation comes naturally.",
        ],
        [
          "ingredients",
          "Personal flavors",
          "Broth, spice level, ingredients, and dipping sauce can all be adjusted.",
        ],
        [
          "basics",
          "A culture worth sharing",
          "It is an approachable way to discover Chinese food beyond familiar dishes.",
        ],
      ],
      whyTitle: "Why try it",
      whyItems: [
        "It is social: the table stays active throughout the meal.",
        "It is flexible: everyone can choose their own pace and flavor.",
        "It is memorable: steam, aromas, colors, and sharing create a real occasion.",
      ],
      etiquetteTitle: "Simple tips",
      etiquette: [
        "Start with delicate ingredients before stronger flavors.",
        "Use sauces to balance spicy, fresh, savory, and aromatic notes.",
        "Mention allergies or special needs in the reservation note.",
      ],
    },
    locations: {
      eyebrow: "Prato and Florence",
      title: "Two restaurants for your next hotpot night",
      intro:
        "Choose Prato for a late dinner, or Florence for lunch and dinner near the historic center.",
      daily: "Open every day",
      phone: "Phone",
      address: "Address",
      hours: "Hours",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "A closer look at Sina Hotpot",
      intro:
        "Browse table moments, fresh ingredients, cooking action, sauces, and drinks from the restaurants.",
      categories: {
        table: "Table moments",
        ingredients: "Ingredients",
        action: "Cooking action",
        drinks: "Drinks and sauces",
      },
    },
    reservation: {
      eyebrow: "Reservation request",
      title: "Reserve your table",
      intro:
        "Send the main details and the restaurant manager will receive your reservation request by email.",
      labels: {
        name: "Name",
        phone: "Phone number",
        guests: "Guests",
        date: "Date",
        time: "Time",
        location: "Location",
        message: "Optional note",
      },
      placeholders: {
        name: "Your name",
        phone: "+39 ...",
        message: "Allergies, special occasions, or requests",
      },
      consent:
        "By submitting this form, you agree that Sina Hotpot may use these details only to handle your reservation request.",
      privacyLink: "Read the privacy policy",
      submit: "Send request",
      sending: "Sending...",
      success: "Request sent.",
      error:
        "We could not send the request. Please try again or contact us on WhatsApp.",
      missingKey:
        "Web3forms is not configured yet. Set PUBLIC_WEB3FORMS_ACCESS_KEY before launch.",
    },
    success: {
      title: "Request received",
      intro:
        "Thank you. Your request has been sent to Sina Hotpot. For urgent changes, contact us directly on WhatsApp.",
      next: "You can also check the address, opening hours, and route for your selected location.",
    },
    privacy: {
      title: "Privacy policy",
      intro:
        "This page explains what data the Sina Hotpot website collects and how it is used.",
      sections: [
        [
          "Data collected",
          "The reservation form collects name, phone number, guests, date, time, selected location, and optional notes. Notes may include allergies or special requests only if you choose to provide them.",
        ],
        [
          "Purpose",
          "The data is used to receive and handle reservation requests, contact you if needed, and organize restaurant service.",
        ],
        [
          "Legal basis and retention",
          "Processing is based on your request. Data is kept only as long as needed to manage the reservation and applicable administrative duties.",
        ],
        [
          "Third-party services",
          "The form uses Web3forms to forward requests by email. External links such as Google Maps, Instagram, Facebook, and WhatsApp may apply their own policies.",
        ],
        [
          "Rights and contact",
          "You can ask for access, correction, or deletion by writing to sinahotpot@gmail.com. This notice is operational guidance and does not replace professional legal review.",
        ],
      ],
    },
  } as const satisfies LocaleCopy;
