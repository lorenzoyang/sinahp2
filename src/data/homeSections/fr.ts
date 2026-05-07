import type { HomeSectionContent } from "./types";

export const frHomeSections = {
    signatures: {
      intro:
        "Un hotpot premium se reconnait par des ingredients lisibles, un bouillon equilibre, de fines tranches, des legumes frais et des sauces que chacun peut ajuster.",
      items: [
        [
          "Des bouillons avec une direction claire",
          "Doux, epice ou double: le bouillon change le rythme et le profil gustatif de toute la table.",
        ],
        [
          "Des ingredients frais a cuisson rapide",
          "Boeuf finement tranche, champignons, tofu et legumes doivent rester nets, frais et faciles a comprendre.",
        ],
        [
          "La sauce comme finition personnelle",
          "Chaque invite peut orienter un meme ingredient vers des notes salees, epicees, fraiches ou aromatiques.",
        ],
      ],
    },
    occasions: {
      eyebrow: "Occasions de diner",
      title: "Un meme format pour plusieurs styles de repas",
      intro:
        "Le hotpot est naturellement convivial, mais il ne se limite pas aux repas bruyants. Il peut aussi etre pose, elegant et bien rythme.",
      items: [
        [
          "Couples et soirees plus lentes",
          "La cuisson a table allonge le repas naturellement et laisse de la place a la conversation.",
        ],
        [
          "Groupes et celebrations",
          "La table reste active pendant tout le repas et le partage devient une partie de l’occasion.",
        ],
        [
          "Familles et tables aux gouts mixtes",
          "Des bouillons differents et des ingredients flexibles aident debutants et habitues a manger ensemble.",
        ],
        [
          "Invites et diners informels de travail",
          "Le format est memorable et soigne, tout en restant accessible pour des clients italiens et internationaux.",
        ],
      ],
    },
    visit: {
      eyebrow: "Premiere visite",
      title: "Quelques repères suffisent",
      intro:
        "Pour beaucoup de clients europeens, le hotpot est nouveau. La page doit reduire l’incertitude et preparer la visite.",
      items: [
        "La marmite double est souvent le choix le plus simple pour commencer.",
        "Commencer par legumes, tofu et viandes fines rend l’experience plus facile a lire.",
        "Les sauces s’ajustent mieux progressivement apres les premieres bouchees.",
        "Allergies, besoins alimentaires et occasions speciales doivent etre indiques dans la reservation.",
      ],
    },
    atmosphere: {
      eyebrow: "Experience en salle",
      title: "Vapeur, chaleur et service au rythme maitrise",
      intro:
        "Un diner hotpot premium ne repose pas seulement sur la variete. Il depend aussi de la sensation de table du debut a la fin.",
      items: [
        "La marmite reste au centre et garde un point focal partage pendant tout le repas.",
        "La vapeur et les parfums donnent de la presence sans alourdir l’atmosphere.",
        "Le service convient aussi bien aux diners longs qu’aux rencontres au timing plus net.",
      ],
      stats: [
        "Demande de reservation rapide en ligne",
        "Prato ouvert tard",
        "Florence ouverte le midi et le soir",
        "Adapte aux clients locaux et internationaux",
      ],
    },
    reservation: {
      eyebrow: "Terminer par une action simple",
      title: "Reservez avant d’arriver",
      intro:
        "Une courte demande suffit pour prevenir la bonne adresse. En cas de changement rapide, le contact direct reste disponible.",
      items: [
        "Choisissez l’adresse selon l’horaire et le quartier.",
        "Ajoutez allergies ou demandes speciales avant l’arrivee.",
        "Utilisez WhatsApp pour les changements urgents ou les questions de derniere minute.",
      ],
    },
  } as const satisfies HomeSectionContent;
