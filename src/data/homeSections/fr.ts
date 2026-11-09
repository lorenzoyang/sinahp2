import type { HomeSectionContent } from "./types";

export const frHomeSections = {
    signatures: {
      intro:
        "La qualité se ressent dans le rythme de la table: bouillon parfumé, ingrédients cuits au moment et sauces qui rendent chaque bouchée personnelle.",
      items: [
        [
          "Bouillons qui ouvrent le repas",
          "Doux, épicé ou double: le bouillon donne du caractère à la table sans la compliquer.",
        ],
        [
          "Ingrédients cuits au moment",
          "Viandes fines, légumes, champignons et tofu sont faits pour de petites dégustations bien chaudes.",
        ],
        [
          "Sauces pour votre équilibre",
          "Chaque invité trouve son point entre salé, frais, piquant et parfumé.",
        ],
      ],
    },
    reservation: {
      "eyebrow": "Démo de réservation",
      "title": "Essayez une réservation simulée",
      "intro": "Explorez le formulaire d’origine avec des données fictives. La simulation fonctionne uniquement dans votre navigateur et n’envoie aucune demande au restaurant."
    },
  } as const satisfies HomeSectionContent;
