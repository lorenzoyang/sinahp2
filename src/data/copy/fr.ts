import type { LocaleCopy } from "./types";

export const frCopy = {
    meta: {
      homeTitle: "Sina Hotpot | Hotpot premium a Prato et Florence",
      description:
        "Sina Hotpot propose une experience de hotpot chinois premium en Toscane, avec ingredients selectionnes, bouillons aromatiques et restaurants a Prato et Florence.",
    },
    layout: {
      skipToContent: "Aller au contenu",
      contact: "Contact",
      social: "Social",
    },
    nav: {
      home: "Accueil",
      culture: "Le hotpot",
      locations: "Adresses",
      reservation: "Reserver",
      privacy: "Confidentialite",
      menu: "Menu",
    },
    cta: {
      reserve: "Reserver une table",
      culture: "Decouvrir le hotpot",
      call: "Appeler",
      map: "Ouvrir la carte",
      whatsapp: "WhatsApp",
      backHome: "Retour accueil",
      learnMore: "En savoir plus",
    },
    home: {
      eyebrow: "Hotpot chinois premium en Toscane",
      title: "鲜入围煮 Sina Hotpot",
      intro:
        "Une marmite fumante, des bouillons parfumes et des ingredients choisis a cuire a table: une experience raffinee, conviviale et facile a aimer.",
      proof: [
        "Deux adresses: Prato et Florence",
        "Ingredients frais a partager",
        "Demande de reservation rapide",
      ],
      sections: {
        ritualTitle: "Comment ca marche",
        ritualIntro:
          "Le hotpot n’est pas seulement une soupe: c’est un repas partage ou chacun choisit bouillon, ingredients, rythme et sauces.",
        locationsTitle: "Choisir une adresse",
        locationsIntro:
          "Prato ouvre tard le soir; Florence accueille le midi et le soir dans le centre historique.",
        premiumTitle: "Pour un diner qui compte",
      },
      steps: [
        [
          "Choisir le bouillon",
          "Epice, doux ou double: le bouillon donne le ton.",
        ],
        [
          "Commander les ingredients",
          "Boeuf, legumes, champignons, tofu et specialites cuisent en quelques instants.",
        ],
        ["Cuire a table", "Chaque invite controle le rythme et la cuisson."],
        [
          "Partager le moment",
          "La marmite transforme la table en centre de la soiree.",
        ],
      ],
      premium: [
        "Atmosphere moderne avec details chinois chaleureux.",
        "Ideal pour groupes, couples, familles et curieux.",
        "Une maniere claire et accueillante de decouvrir la culture culinaire chinoise.",
      ],
    },
    culture: {
      eyebrow: "Guide premiere experience",
      title: "Qu’est-ce que le hotpot?",
      intro:
        "Le hotpot est une tradition chinoise ou le bouillon reste chaud au centre de la table. Les invites cuisent des ingredients frais, melangent des sauces et composent leur propre parcours de saveurs.",
      blocks: [
        [
          "ritual",
          "Un diner participatif",
          "Le repas se termine ensemble a table et la conversation vient naturellement.",
        ],
        [
          "ingredients",
          "Des saveurs personnelles",
          "Bouillon, niveau d’epices, ingredients et sauce s’adaptent a chacun.",
        ],
        [
          "basics",
          "Une culture a partager",
          "C’est une facon accessible de decouvrir la cuisine chinoise au-dela des plats connus.",
        ],
      ],
      whyTitle: "Pourquoi essayer",
      whyItems: [
        "C’est convivial: la table reste active pendant tout le repas.",
        "C’est flexible: chacun choisit son rythme et ses saveurs.",
        "C’est memorable: vapeur, aromes, couleurs et partage creent une vraie occasion.",
      ],
      etiquetteTitle: "Conseils simples",
      etiquette: [
        "Commence par les ingredients delicats avant les saveurs plus intenses.",
        "Utilise les sauces pour equilibrer piquant, fraicheur et umami.",
        "Indique allergies ou besoins particuliers dans la note de reservation.",
      ],
    },
    locations: {
      eyebrow: "Prato et Florence",
      title: "Deux adresses pour votre prochaine soiree hotpot",
      intro:
        "Choisissez Prato pour un diner tardif ou Florence pour le midi et le soir pres du centre historique.",
      daily: "Ouvert tous les jours",
      phone: "Telephone",
      address: "Adresse",
      hours: "Horaires",
    },
    reservation: {
      eyebrow: "Demande de reservation",
      title: "Reservez votre table",
      intro:
        "Envoyez les informations principales et le responsable du restaurant recevra votre demande par email.",
      labels: {
        name: "Nom",
        phone: "Telephone",
        guests: "Personnes",
        date: "Date",
        time: "Heure",
        location: "Adresse",
        message: "Note optionnelle",
      },
      placeholders: {
        name: "Votre nom",
        phone: "+39 ...",
        message: "Allergies, occasion speciale ou autres demandes",
      },
      consent:
        "En envoyant ce formulaire, vous acceptez que Sina Hotpot utilise ces donnees uniquement pour traiter votre demande de reservation.",
      privacyLink: "Lire la politique de confidentialite",
      submit: "Envoyer la demande",
      sending: "Envoi...",
      success: "Demande envoyee.",
      error:
        "La demande n’a pas pu etre envoyee. Reessayez ou contactez-nous sur WhatsApp.",
      missingKey:
        "Web3forms n’est pas encore configure. Definissez PUBLIC_WEB3FORMS_ACCESS_KEY avant le lancement.",
    },
    success: {
      title: "Demande recue",
      intro:
        "Merci. Votre demande a ete envoyee a Sina Hotpot. Pour toute modification urgente, contactez-nous directement sur WhatsApp.",
      next: "Vous pouvez aussi verifier l’adresse, les horaires et l’itineraire du restaurant choisi.",
    },
    privacy: {
      title: "Politique de confidentialite",
      intro:
        "Cette page explique quelles donnees le site Sina Hotpot collecte et comment elles sont utilisees.",
      sections: [
        [
          "Donnees collectees",
          "Le formulaire collecte nom, telephone, nombre de personnes, date, heure, adresse choisie et notes optionnelles. Les notes peuvent contenir allergies ou demandes speciales seulement si vous les indiquez volontairement.",
        ],
        [
          "Finalite",
          "Les donnees servent a recevoir et traiter les demandes de reservation, vous contacter si necessaire et organiser le service.",
        ],
        [
          "Base juridique et conservation",
          "Le traitement repose sur votre demande. Les donnees sont conservees seulement le temps necessaire a la reservation et aux obligations administratives applicables.",
        ],
        [
          "Services tiers",
          "Le formulaire utilise Web3forms pour transmettre la demande par email. Les liens externes comme Google Maps, Instagram, Facebook et WhatsApp peuvent appliquer leurs propres politiques.",
        ],
        [
          "Droits et contact",
          "Vous pouvez demander acces, correction ou suppression en ecrivant a sinahotpot@gmail.com. Ce texte est une base operationnelle et ne remplace pas une revue juridique professionnelle.",
        ],
      ],
    },
  } as const satisfies LocaleCopy;
