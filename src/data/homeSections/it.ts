import type { HomeSectionContent } from "./types";

export const itHomeSections = {
    signatures: {
      intro:
        "Qualità leggibile: buon brodo, ingredienti freschi e salse personali.",
      items: [
        [
          "Brodi aromatici",
          "Scegli una base delicata, piccante o doppia.",
        ],
        [
          "Ingredienti freschi",
          "Tagli sottili e verdure pronti per una cottura veloce.",
        ],
        [
          "Salse personalizzate",
          "Completa ogni boccone con il tuo equilibrio di sapori.",
        ],
      ],
    },
    reservation: {
      eyebrow: "Prenotazione",
      title: "Riserva il tuo tavolo",
      intro:
        "Invia la richiesta online o scrivici su WhatsApp per conferme rapide.",
    },
  } as const satisfies HomeSectionContent;
