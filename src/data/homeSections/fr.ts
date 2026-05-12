import type { HomeSectionContent } from "./types";

export const frHomeSections = {
    signatures: {
      intro:
        "Un hotpot premium se reconnaît par des ingrédients lisibles, un bouillon équilibré, de fines tranches, des légumes frais et des sauces que chacun peut ajuster.",
      items: [
        [
          "Des bouillons avec une direction claire",
          "Doux, épicé ou double: le bouillon change le rythme et le profil gustatif de toute la table.",
        ],
        [
          "Des ingrédients frais à cuisson rapide",
          "Bœuf finement tranché, champignons, tofu et légumes doivent rester nets, frais et faciles à comprendre.",
        ],
        [
          "La sauce comme finition personnelle",
          "Chaque invité peut orienter un même ingrédient vers des notes salées, épicées, fraîches ou aromatiques.",
        ],
      ],
    },
    occasions: {
      eyebrow: "Occasions de dîner",
      title: "Un même format pour plusieurs styles de repas",
      intro:
        "Le hotpot est naturellement convivial, mais il ne se limite pas aux repas bruyants. Il peut aussi être posé, élégant et bien rythmé.",
      items: [
        [
          "Couples et soirées plus lentes",
          "La cuisson à table allonge le repas naturellement et laisse de la place à la conversation.",
        ],
        [
          "Groupes et célébrations",
          "La table reste active pendant tout le repas et le partage devient une partie de l’occasion.",
        ],
        [
          "Familles et tables aux goûts mixtes",
          "Des bouillons différents et des ingrédients flexibles aident débutants et habitués à manger ensemble.",
        ],
        [
          "Invités et dîners informels de travail",
          "Le format est mémorable et soigné, tout en restant accessible pour des clients italiens et internationaux.",
        ],
      ],
    },
    visit: {
      eyebrow: "Première visite",
      title: "Quelques repères suffisent",
      intro:
        "Pour beaucoup de clients européens, le hotpot est nouveau. La page doit réduire l’incertitude et préparer la visite.",
      items: [
        "La marmite double est souvent le choix le plus simple pour commencer.",
        "Commencer par légumes, tofu et viandes fines rend l’expérience plus facile à lire.",
        "Les sauces s’ajustent mieux progressivement après les premières bouchées.",
        "Allergies, besoins alimentaires et occasions spéciales doivent être indiqués dans la réservation.",
      ],
    },
    atmosphere: {
      eyebrow: "Expérience en salle",
      title: "Vapeur, chaleur et service au rythme maîtrisé",
      intro:
        "Un dîner hotpot premium ne repose pas seulement sur la variété. Il dépend aussi de la sensation de table du début à la fin.",
      items: [
        "La marmite reste au centre et garde un point focal partagé pendant tout le repas.",
        "La vapeur et les parfums donnent de la présence sans alourdir l’atmosphère.",
        "Le service convient aussi bien aux dîners longs qu’aux rencontres au timing plus net.",
      ],
      stats: [
        "Demande de réservation rapide en ligne",
        "Prato ouvert tard",
        "Florence ouverte le midi et le soir",
        "Adapté aux clients locaux et internationaux",
      ],
    },
    reservation: {
      eyebrow: "Terminer par une action simple",
      title: "Réservez avant d’arriver",
      intro:
        "Une courte demande suffit pour prévenir la bonne adresse. En cas de changement rapide, le contact direct reste disponible.",
      items: [
        "Choisissez l’adresse selon l’horaire et le quartier.",
        "Ajoutez allergies ou demandes spéciales avant l’arrivée.",
        "Utilisez WhatsApp pour les changements urgents ou les questions de dernière minute.",
      ],
    },
  } as const satisfies HomeSectionContent;
