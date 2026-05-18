import type { HomeSectionContent } from "./types";

export const frHomeSections = {
    signatures: {
      intro:
        "Une qualité lisible: bouillons parfumés, ingrédients frais et sauces personnelles.",
      items: [
        [
          "Bouillons parfumés",
          "Choisissez une base douce, épicée ou double pour la table.",
        ],
        [
          "Ingrédients frais",
          "Fines tranches et légumes arrivent prêts pour une cuisson rapide.",
        ],
        [
          "Sauces personnelles",
          "Terminez chaque bouchée avec votre propre équilibre de saveurs.",
        ],
      ],
    },
    reservation: {
      eyebrow: "Réservation",
      title: "Réservez votre table",
      intro:
        "Envoyez la demande en ligne ou écrivez-nous sur WhatsApp pour une confirmation rapide.",
    },
  } as const satisfies HomeSectionContent;
