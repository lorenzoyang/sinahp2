import type { Locale } from "./site";

type TextPair = readonly [string, string];

type HomeSectionContent = {
  signatures: {
    intro: string;
    items: readonly TextPair[];
  };
  occasions: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly TextPair[];
  };
  visit: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly string[];
  };
  atmosphere: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly string[];
    stats: readonly string[];
  };
  reservation: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly string[];
  };
};

export const homeSections = {
  it: {
    signatures: {
      intro:
        "Brodi ben definiti, carni tagliate sottili, verdure fresche e salse personali: la qualita dell’hotpot si costruisce su equilibrio, velocita di cottura e materia prima leggibile.",
      items: [
        [
          "Brodi con carattere",
          "Una base intensa o delicata cambia tutta la cena e accompagna il tavolo dall’inizio all’ultimo assaggio.",
        ],
        [
          "Tagli sottili e ingredienti freschi",
          "Carni, funghi, tofu e verdure devono cuocere in pochi secondi e restare nitidi nel gusto.",
        ],
        [
          "Salse che completano il morso",
          "Ogni ospite puo costruire un equilibrio diverso tra note piccanti, sapide, fresche e aromatiche.",
        ],
      ],
    },
    occasions: {
      eyebrow: "Occasioni da tavola",
      title: "Una cena che funziona in contesti diversi",
      intro:
        "L’hotpot regge bene ritmi e gruppi diversi. La formula resta conviviale, ma il tono puo essere rilassato, elegante o piu celebrativo.",
      items: [
        [
          "Coppie e serate lente",
          "Il ritmo della cottura rende la cena piu distesa e lascia spazio alla conversazione senza fretta.",
        ],
        [
          "Gruppi e compleanni",
          "Il tavolo resta attivo per tutta la serata e aiuta a condividere ingredienti, tempi e curiosita.",
        ],
        [
          "Famiglie e ospiti misti",
          "Con brodi differenti e ingredienti vari, anche chi prova l’hotpot per la prima volta trova un percorso semplice.",
        ],
        [
          "Clienti e cene informali di lavoro",
          "L’esperienza ha presenza scenica, ma resta accessibile e facile da spiegare a ospiti italiani e internazionali.",
        ],
      ],
    },
    visit: {
      eyebrow: "Prima visita",
      title: "Pochi passaggi per sentirsi subito a proprio agio",
      intro:
        "Per molti clienti europei il primo hotpot e nuovo. Una guida breve aiuta a entrare nell’esperienza senza irrigidirla.",
      items: [
        "Per una prima visita la pentola doppia e spesso la scelta piu comoda.",
        "Conviene iniziare con ingredienti delicati e passare ai sapori piu intensi in un secondo momento.",
        "Le salse funzionano meglio se regolate poco alla volta, dopo i primi assaggi.",
        "Allergie, occasioni speciali e preferenze importanti vanno indicate gia nella prenotazione.",
      ],
    },
    atmosphere: {
      eyebrow: "Esperienza in sala",
      title: "Calore, vapore e servizio dal ritmo naturale",
      intro:
        "Un buon hotpot non e solo varietà: e un tavolo che resta vivo, ordinato e leggibile mentre la cena si sviluppa.",
      items: [
        "Il tavolo resta il centro della serata, con un servizio che accompagna senza interrompere.",
        "Il vapore e il profumo del brodo danno presenza scenica senza trasformare la cena in qualcosa di teatrale.",
        "La formula e adatta sia a cene lunghe sia a incontri piu diretti, grazie a tempi di servizio chiari.",
      ],
      stats: [
        "Prenotazione online rapida",
        "Prato aperto fino a tardi",
        "Firenze anche a pranzo",
        "Adatto a tavoli misti e internazionali",
      ],
    },
    reservation: {
      eyebrow: "Chiudi la serata bene",
      title: "Prenota prima di arrivare",
      intro:
        "Bastano pochi dati per inviare una richiesta alla sede scelta. Per esigenze urgenti, il contatto diretto resta disponibile.",
      items: [
        "Scegli la sede in base a orario e zona.",
        "Indica in anticipo allergie o richieste particolari.",
        "Per cambi rapidi o dubbi dell’ultimo minuto puoi usare WhatsApp.",
      ],
    },
  },
  zh: {
    signatures: {
      intro:
        "好火锅的高级感，来自清晰的锅底层次、薄切肉类、新鲜蔬菜与可自由搭配的蘸料，而不是堆砌复杂说明。",
      items: [
        [
          "有辨识度的锅底",
          "清汤、麻辣或鸳鸯锅，会直接决定整桌的节奏和味道走向。",
        ],
        [
          "现点现涮的核心食材",
          "薄切肉片、菌菇、豆制品和蔬菜需要在短时间内保持鲜度与口感。",
        ],
        [
          "蘸料完成个人风味",
          "同样一口食材，通过不同蘸料比例，可以变得更香、更鲜或更有层次。",
        ],
      ],
    },
    occasions: {
      eyebrow: "适合的场景",
      title: "同一顿火锅，可以适配不同聚餐需求",
      intro:
        "火锅天然适合分享，但并不只适合热闹聚会。它也可以是一顿有节奏、有质感的晚餐。",
      items: [
        [
          "情侣约会",
          "边煮边吃的节奏让用餐更放松，也给交流留出自然空间。",
        ],
        [
          "朋友聚餐与生日",
          "一桌人围着同一口锅，会让分享和互动比普通点菜更自然。",
        ],
        [
          "家庭聚餐",
          "不同汤底和丰富食材能兼顾口味差异，让长辈和第一次吃火锅的人都更容易接受。",
        ],
        [
          "商务或接待场景",
          "它有足够的记忆点，同时又不像正式西餐那样有明显门槛，适合中外客人一起用餐。",
        ],
      ],
    },
    visit: {
      eyebrow: "第一次来也轻松",
      title: "先知道这几件事，体验会顺很多",
      intro:
        "对很多欧洲客人来说，火锅是新体验。首页应该先帮助他们理解，而不是增加压力。",
      items: [
        "第一次来，鸳鸯锅通常是最稳妥的选择。",
        "可以先从蔬菜、豆腐和薄切牛肉等熟悉食材开始。",
        "蘸料建议少量多次调整，比一次调得很重更容易找到平衡。",
        "过敏、忌口和特殊场合建议在预约备注中提前说明。",
      ],
    },
    atmosphere: {
      eyebrow: "到店体验",
      title: "热气、香气与稳定节奏，共同构成高级感",
      intro:
        "高端火锅不只是食材价格更高，而是整桌体验更完整：桌面状态、服务节奏和氛围都要一致。",
      items: [
        "锅在桌中央，让整顿饭始终围绕共享和交流展开。",
        "热气与香味带来视觉记忆点，但整体体验仍保持克制和舒适。",
        "服务节奏清晰，既适合慢慢吃，也适合安排明确的晚餐会面。",
      ],
      stats: [
        "线上预约提交快速",
        "Prato 营业到深夜",
        "Firenze 提供午餐与晚餐",
        "适合本地客人与国际客人",
      ],
    },
    reservation: {
      eyebrow: "提前安排更从容",
      title: "到店前先把座位定好",
      intro:
        "提交几个核心信息后，门店就能收到预约请求。临时变动或紧急确认，也可以直接联系门店。",
      items: [
        "根据时间和位置选择合适门店。",
        "特殊饮食需求提前备注，现场体验会更顺畅。",
        "如需快速确认或修改，可直接使用 WhatsApp。",
      ],
    },
  },
  en: {
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
  },
  es: {
    signatures: {
      intro:
        "Un hotpot premium se reconoce por ingredientes claros, buen equilibrio en el caldo, carnes finas, vegetales frescos y salsas que cada persona puede ajustar.",
      items: [
        [
          "Caldos con personalidad",
          "Suave, picante o doble: el caldo cambia el ritmo y el perfil de sabor de toda la mesa.",
        ],
        [
          "Ingredientes frescos y de coccion rapida",
          "Carne fina, setas, tofu y verduras deben sentirse limpios, frescos y faciles de entender.",
        ],
        [
          "La salsa como capa final",
          "Cada persona puede llevar el mismo ingrediente hacia notas mas saladas, picantes, frescas o aromaticas.",
        ],
      ],
    },
    occasions: {
      eyebrow: "Momentos para compartir",
      title: "Un formato flexible para distintas cenas",
      intro:
        "El hotpot es social por naturaleza, pero no solo sirve para cenas ruidosas. Tambien puede sentirse elegante, calmado y bien medido.",
      items: [
        [
          "Parejas y noches tranquilas",
          "Cocinar en la mesa alarga la cena con naturalidad y deja espacio para conversar sin prisa.",
        ],
        [
          "Grupos y celebraciones",
          "La mesa se mantiene activa durante toda la comida y convierte compartir en parte de la experiencia.",
        ],
        [
          "Familias y mesas mixtas",
          "Diferentes caldos e ingredientes flexibles ayudan a que principiantes y habituales disfruten juntos.",
        ],
        [
          "Invitados y cenas informales de trabajo",
          "El formato resulta memorable y refinado, pero sigue siendo accesible para clientes italianos e internacionales.",
        ],
      ],
    },
    visit: {
      eyebrow: "Primera visita",
      title: "Unas pocas claves lo hacen mas facil",
      intro:
        "Para muchos clientes europeos el hotpot es nuevo. La pagina debe reducir dudas y preparar mejor la visita.",
      items: [
        "La olla doble suele ser la opcion mas facil para empezar.",
        "Empezar con verduras, tofu y carnes finas ayuda a leer mejor la experiencia.",
        "Las salsas funcionan mejor si se ajustan poco a poco tras los primeros bocados.",
        "Alergias, necesidades alimentarias y ocasiones especiales deben indicarse en la reserva.",
      ],
    },
    atmosphere: {
      eyebrow: "Experiencia en sala",
      title: "Vapor, calidez y un servicio con ritmo claro",
      intro:
        "Una cena premium de hotpot no depende solo de la variedad. Tambien depende de como se siente la mesa a medida que avanza.",
      items: [
        "La olla permanece en el centro y mantiene un foco compartido de principio a fin.",
        "El vapor y el aroma crean presencia sin volver la experiencia pesada.",
        "El formato de servicio funciona tanto para cenas largas como para encuentros con horario definido.",
      ],
      stats: [
        "Solicitud online rapida",
        "Prato abierto hasta tarde",
        "Florencia abre al mediodia y por la noche",
        "Adecuado para clientes locales e internacionales",
      ],
    },
    reservation: {
      eyebrow: "Cierra con un paso claro",
      title: "Reserva antes de llegar",
      intro:
        "Una solicitud breve basta para avisar a la sede correcta. Si el plan cambia rapido, el contacto directo sigue disponible.",
      items: [
        "Elige la sede segun horario y zona.",
        "Anota alergias o peticiones especiales antes de la visita.",
        "Usa WhatsApp para cambios urgentes o dudas de ultima hora.",
      ],
    },
  },
  fr: {
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
  },
} as const satisfies Record<Locale, HomeSectionContent>;

export function getHomeSections(locale: Locale) {
  return homeSections[locale];
}
