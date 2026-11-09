import type { HomeSectionContent } from "./types";

export const itHomeSections = {
    signatures: {
      intro:
        "La qualità si sente nel ritmo della tavola: brodo profumato, ingredienti pronti da cuocere e salse che rendono ogni assaggio tuo.",
      items: [
        [
          "Brodi che aprono la cena",
          "Delicato, piccante o doppio: il brodo dà carattere al tavolo senza complicarlo.",
        ],
        [
          "Ingredienti da cuocere al momento",
          "Tagli sottili, verdure, funghi e tofu arrivano pronti per piccoli assaggi sempre caldi.",
        ],
        [
          "Salse per il tuo equilibrio",
          "Ogni ospite può cercare il proprio punto tra sapido, fresco, piccante e aromatico.",
        ],
      ],
    },
    reservation: {
      "eyebrow": "Simulazione di prenotazione",
      "title": "Prova la prenotazione dimostrativa",
      "intro": "Esplora il modulo originale con dati inventati. La simulazione avviene solo nel browser: non viene inviata alcuna richiesta al ristorante."
    },
  } as const satisfies HomeSectionContent;
