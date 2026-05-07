import type { Locale, PageId } from "./site";
import type { TextPair } from "./types";

type LocaleCopy = {
  meta: {
    homeTitle: string;
    description: string;
  };
  nav: Record<Exclude<PageId, "success"> | "menu", string>;
  cta: Record<
    | "reserve"
    | "culture"
    | "call"
    | "map"
    | "whatsapp"
    | "backHome"
    | "learnMore",
    string
  >;
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    proof: readonly string[];
    sections: {
      ritualTitle: string;
      ritualIntro: string;
      locationsTitle: string;
      locationsIntro: string;
      premiumTitle: string;
    };
    steps: readonly TextPair[];
    premium: readonly string[];
  };
  culture: {
    eyebrow: string;
    title: string;
    intro: string;
    blocks: readonly TextPair[];
    whyTitle: string;
    whyItems: readonly string[];
    etiquetteTitle: string;
    etiquette: readonly string[];
  };
  locations: {
    eyebrow: string;
    title: string;
    intro: string;
    daily: string;
    phone: string;
    address: string;
    hours: string;
  };
  reservation: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: Record<
      "name" | "phone" | "guests" | "date" | "time" | "location" | "message",
      string
    >;
    placeholders: Record<"name" | "phone" | "message", string>;
    consent: string;
    privacyLink: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    missingKey: string;
  };
  success: {
    title: string;
    intro: string;
    next: string;
  };
  privacy: {
    title: string;
    intro: string;
    sections: readonly TextPair[];
  };
};

export const copy = {
  it: {
    meta: {
      homeTitle: "Sina Hotpot | Hotpot premium a Prato e Firenze",
      description:
        "Sina Hotpot porta in Toscana l’esperienza conviviale dell’hotpot cinese, con ingredienti selezionati, brodi intensi e due ristoranti a Prato e Firenze.",
    },
    nav: {
      home: "Home",
      culture: "Cos’e l’hotpot",
      locations: "Ristoranti",
      reservation: "Prenota",
      privacy: "Privacy",
      menu: "Menu",
    },
    cta: {
      reserve: "Prenota un tavolo",
      culture: "Scopri l’hotpot",
      call: "Chiama",
      map: "Apri mappa",
      whatsapp: "WhatsApp",
      backHome: "Torna alla home",
      learnMore: "Scopri di piu",
    },
    home: {
      eyebrow: "Hotpot cinese premium in Toscana",
      title: "鲜入围煮 Sina Hotpot",
      intro:
        "Un tavolo caldo, brodi aromatici e ingredienti scelti da cuocere al momento: un’esperienza raffinata, sociale e facile da amare anche al primo assaggio.",
      proof: [
        "Due sedi: Prato e Firenze",
        "Ingredienti freschi da condividere",
        "Prenotazione rapida online",
      ],
      sections: {
        ritualTitle: "Come funziona",
        ritualIntro:
          "L’hotpot non e solo una zuppa: e un modo di cenare insieme, scegliendo tempi, sapori e ingredienti direttamente al tavolo.",
        locationsTitle: "Scegli la sede piu comoda",
        locationsIntro:
          "Prato apre fino a tardi, Firenze accoglie anche a pranzo nel centro storico.",
        premiumTitle: "Pensato per una cena importante",
      },
      steps: [
        [
          "Scegli il brodo",
          "Piccante, delicato o doppio: la base definisce il ritmo della cena.",
        ],
        [
          "Ordina ingredienti freschi",
          "Carne, verdure, funghi, tofu e specialita da cuocere pochi secondi.",
        ],
        [
          "Cuoci al tavolo",
          "Ogni ospite prepara il boccone come preferisce, senza fretta.",
        ],
        [
          "Condividi il momento",
          "Il centro del tavolo diventa il punto di incontro della serata.",
        ],
      ],
      premium: [
        "Atmosfera moderna con dettagli caldi e orientali.",
        "Percorso ideale per gruppi, coppie e clienti curiosi.",
        "Esperienza memorabile per ospiti italiani e internazionali.",
      ],
    },
    culture: {
      eyebrow: "Guida per il primo assaggio",
      title: "Che cos’e l’hotpot?",
      intro:
        "L’hotpot e una tradizione cinese in cui il brodo resta caldo al centro del tavolo. Gli ospiti cuociono ingredienti freschi, combinano salse e costruiscono il proprio percorso di gusto.",
      blocks: [
        [
          "Una cena partecipata",
          "Non arriva tutto gia pronto: si cucina insieme, si assaggia e si conversa.",
        ],
        [
          "Sapori personalizzabili",
          "Brodo, livello di piccantezza, ingredienti e salsa cambiano da persona a persona.",
        ],
        [
          "Perfetto per scoprire",
          "E un modo accessibile per entrare nella cultura gastronomica cinese senza formalita.",
        ],
      ],
      whyTitle: "Perche vale la pena provarlo",
      whyItems: [
        "E conviviale: il tavolo resta vivo per tutta la cena.",
        "E flessibile: ogni ospite sceglie intensita, tempi e ingredienti.",
        "E scenografico: profumi, vapore e colori creano un’esperienza da ricordare.",
      ],
      etiquetteTitle: "Piccoli consigli",
      etiquette: [
        "Inizia dagli ingredienti piu delicati, poi passa ai sapori piu intensi.",
        "Usa le salse per creare il tuo equilibrio tra piccante, fresco e sapido.",
        "Se hai allergie o esigenze particolari, indicarlo nella prenotazione.",
      ],
    },
    locations: {
      eyebrow: "Prato e Firenze",
      title: "Due indirizzi per la tua prossima cena",
      intro:
        "Scegli Prato per una serata fino a tardi o Firenze per un’esperienza nel centro storico. Ogni sede mantiene lo stile Sina Hotpot: caldo, curato, contemporaneo.",
      daily: "Aperto tutti i giorni",
      phone: "Telefono",
      address: "Indirizzo",
      hours: "Orari",
    },
    reservation: {
      eyebrow: "Richiesta di prenotazione",
      title: "Prenota il tuo tavolo",
      intro:
        "Compila i dati principali: il responsabile della sede ricevera una notifica via email con la tua richiesta.",
      labels: {
        name: "Nome",
        phone: "Telefono",
        guests: "Numero di persone",
        date: "Data",
        time: "Ora",
        location: "Sede",
        message: "Note opzionali",
      },
      placeholders: {
        name: "Il tuo nome",
        phone: "+39 ...",
        message: "Allergie, occasioni speciali o altre richieste",
      },
      consent:
        "Inviando il modulo accetti che Sina Hotpot usi questi dati solo per gestire la richiesta di prenotazione.",
      privacyLink: "Leggi la privacy policy",
      submit: "Invia richiesta",
      sending: "Invio in corso...",
      success: "Richiesta inviata.",
      error:
        "Non e stato possibile inviare la richiesta. Riprova o contattaci via WhatsApp.",
      missingKey:
        "Web3forms non e ancora configurato. Imposta PUBLIC_WEB3FORMS_ACCESS_KEY prima della pubblicazione.",
    },
    success: {
      title: "Richiesta ricevuta",
      intro:
        "Grazie. La tua richiesta e stata inviata a Sina Hotpot. Per modifiche urgenti puoi contattarci direttamente su WhatsApp.",
      next: "Nel frattempo puoi controllare indirizzo, orari e percorso della sede scelta.",
    },
    privacy: {
      title: "Privacy policy",
      intro:
        "Questa pagina spiega in modo semplice quali dati vengono raccolti dal sito Sina Hotpot e per quali finalita.",
      sections: [
        [
          "Dati raccolti",
          "Il modulo di prenotazione raccoglie nome, telefono, numero di persone, data, ora, sede scelta e note opzionali. Le note possono includere allergie o richieste particolari solo se le inserisci volontariamente.",
        ],
        [
          "Finalita del trattamento",
          "I dati vengono usati per ricevere e gestire la richiesta di prenotazione, contattarti se necessario e organizzare il servizio in sala.",
        ],
        [
          "Base giuridica e conservazione",
          "Il trattamento avviene per dare seguito alla tua richiesta. I dati sono conservati solo per il tempo necessario alla gestione della prenotazione e degli obblighi amministrativi applicabili.",
        ],
        [
          "Servizi terzi",
          "Il modulo usa Web3forms per inoltrare la richiesta via email. Link esterni come Google Maps, Instagram, Facebook e WhatsApp possono applicare le proprie policy.",
        ],
        [
          "Diritti e contatti",
          "Puoi chiedere informazioni, rettifica o cancellazione dei dati scrivendo a sinahotpot@gmail.com. Questa informativa e una base operativa e non sostituisce una revisione legale professionale.",
        ],
      ],
    },
  },
  zh: {
    meta: {
      homeTitle: "鲜入围煮 Sina Hotpot | 普拉托与佛罗伦萨高端火锅",
      description:
        "鲜入围煮 Sina Hotpot 在托斯卡纳呈现高端中式火锅体验，服务 Prato 与 Firenze 两家门店。",
    },
    nav: {
      home: "首页",
      culture: "火锅文化",
      locations: "门店",
      reservation: "预约",
      privacy: "隐私政策",
      menu: "菜单",
    },
    cta: {
      reserve: "预约座位",
      culture: "了解火锅",
      call: "电话",
      map: "打开地图",
      whatsapp: "WhatsApp",
      backHome: "返回首页",
      learnMore: "了解详细",
    },
    home: {
      eyebrow: "托斯卡纳高端中式火锅",
      title: "鲜入围煮 Sina Hotpot",
      intro:
        "一口热锅、两种汤底、现点现涮的精选食材，让本地客人与游客都能轻松理解并享受中式火锅。",
      proof: [
        "Prato 与 Firenze 两家门店",
        "适合聚餐与约会",
        "线上快速提交预约",
      ],
      sections: {
        ritualTitle: "火锅怎么吃",
        ritualIntro:
          "火锅不是普通汤品，而是围坐同食、边煮边聊、自由搭配味道的餐桌体验。",
        locationsTitle: "选择合适门店",
        locationsIntro: "Prato 营业到深夜，Firenze 位于市中心并提供午餐时段。",
        premiumTitle: "适合重要聚餐的体验",
      },
      steps: [
        ["选择锅底", "麻辣、清汤或鸳鸯锅，决定整顿饭的味道基础。"],
        ["点选食材", "肉类、蔬菜、菌菇、豆制品与特色菜品都可按喜好搭配。"],
        ["桌边现涮", "每位客人都能掌握熟度与节奏。"],
        ["分享氛围", "锅在桌中央，交流自然发生。"],
      ],
      premium: [
        "现代餐厅氛围融合东方细节。",
        "适合朋友、情侣、家庭与商务聚餐。",
        "帮助外国客人理解中国餐饮文化。",
      ],
    },
    culture: {
      eyebrow: "第一次吃火锅指南",
      title: "火锅是什么？",
      intro:
        "火锅是一种来自中国的共享式餐饮体验：汤底在桌上持续加热，客人把新鲜食材放入锅中煮熟，再搭配蘸料享用。",
      blocks: [
        ["共同参与的晚餐", "食物不是全部预先做好，而是在桌上一起完成。"],
        ["味道可以定制", "锅底、辣度、食材和蘸料都能根据个人偏好调整。"],
        [
          "认识中国文化",
          "火锅轻松、有互动感，很适合第一次尝试中餐文化的外国客人。",
        ],
      ],
      whyTitle: "为什么值得尝试",
      whyItems: [
        "它很适合社交，整顿饭都有交流。",
        "它很灵活，每个人都能找到适合自己的味道。",
        "它很有记忆点，热气、香气和食材色彩都很有感染力。",
      ],
      etiquetteTitle: "小建议",
      etiquette: [
        "先从清淡食材开始，再尝试更浓郁的味道。",
        "蘸料可以少量多次调整。",
        "如有过敏或特殊需求，请在预约备注中说明。",
      ],
    },
    locations: {
      eyebrow: "Prato 与 Firenze",
      title: "两家门店，选择你的下一次火锅",
      intro:
        "Prato 适合晚间与深夜聚餐；Firenze 位于历史中心附近，午餐和晚餐都可安排。",
      daily: "每天营业",
      phone: "电话",
      address: "地址",
      hours: "营业时间",
    },
    reservation: {
      eyebrow: "预约请求",
      title: "预约座位",
      intro: "填写以下信息后，门店负责人会通过邮件收到预约通知。",
      labels: {
        name: "姓名",
        phone: "电话号码",
        guests: "人数",
        date: "日期",
        time: "时间",
        location: "门店",
        message: "可选说明",
      },
      placeholders: {
        name: "你的姓名",
        phone: "+39 ...",
        message: "过敏、特殊情况或其他需求",
      },
      consent:
        "提交表单即表示你同意 Sina Hotpot 仅为处理预约请求使用这些信息。",
      privacyLink: "查看隐私政策",
      submit: "提交预约",
      sending: "正在提交...",
      success: "预约请求已提交。",
      error: "暂时无法提交，请重试或通过 WhatsApp 联系我们。",
      missingKey:
        "Web3forms 尚未配置。发布前请设置 PUBLIC_WEB3FORMS_ACCESS_KEY。",
    },
    success: {
      title: "预约请求已收到",
      intro:
        "谢谢。你的预约请求已发送给 Sina Hotpot。如需紧急修改，请直接通过 WhatsApp 联系我们。",
      next: "你也可以继续查看门店地址、营业时间与路线。",
    },
    privacy: {
      title: "隐私政策",
      intro: "本页面说明 Sina Hotpot 网站会收集哪些数据，以及这些数据的用途。",
      sections: [
        [
          "收集的数据",
          "预约表单会收集姓名、电话、人数、日期、时间、选择的门店和可选备注。备注中可能包含你自愿填写的过敏或特殊需求。",
        ],
        [
          "使用目的",
          "这些数据用于接收和处理预约请求，在必要时与你联系，并帮助门店安排服务。",
        ],
        [
          "法律依据与保存",
          "数据处理基于你的预约请求。数据仅在处理预约及适用行政义务所需期间保存。",
        ],
        [
          "第三方服务",
          "表单使用 Web3forms 将预约信息转发至邮箱。Google Maps、Instagram、Facebook 和 WhatsApp 等外部链接适用其各自政策。",
        ],
        [
          "权利与联系",
          "你可以通过 sinahotpot@gmail.com 要求查询、更正或删除数据。本说明为基础运营文本，不替代专业法律审核。",
        ],
      ],
    },
  },
  en: {
    meta: {
      homeTitle: "Sina Hotpot | Premium Hotpot in Prato and Florence",
      description:
        "Sina Hotpot brings premium Chinese hotpot to Tuscany with selected ingredients, aromatic broths, and restaurants in Prato and Florence.",
    },
    nav: {
      home: "Home",
      culture: "What is hotpot",
      locations: "Locations",
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
          "A participatory dinner",
          "The meal is finished together at the table, so conversation comes naturally.",
        ],
        [
          "Personal flavors",
          "Broth, spice level, ingredients, and dipping sauce can all be adjusted.",
        ],
        [
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
  },
  es: {
    meta: {
      homeTitle: "Sina Hotpot | Hotpot premium en Prato y Florencia",
      description:
        "Sina Hotpot ofrece hotpot chino premium en Toscana con ingredientes seleccionados, caldos aromaticos y restaurantes en Prato y Florencia.",
    },
    nav: {
      home: "Inicio",
      culture: "Que es hotpot",
      locations: "Locales",
      reservation: "Reservar",
      privacy: "Privacidad",
      menu: "Menu",
    },
    cta: {
      reserve: "Reservar mesa",
      culture: "Descubrir hotpot",
      call: "Llamar",
      map: "Abrir mapa",
      whatsapp: "WhatsApp",
      backHome: "Volver al inicio",
      learnMore: "Ver detalles",
    },
    home: {
      eyebrow: "Hotpot chino premium en Toscana",
      title: "鲜入围煮 Sina Hotpot",
      intro:
        "Una olla caliente, caldos aromaticos e ingredientes seleccionados para cocinar en la mesa: una experiencia refinada, social y facil de disfrutar.",
      proof: [
        "Dos locales: Prato y Florencia",
        "Ingredientes frescos para compartir",
        "Solicitud de reserva online",
      ],
      sections: {
        ritualTitle: "Como funciona",
        ritualIntro:
          "El hotpot no es solo sopa. Es una forma de comer juntos eligiendo caldo, ingredientes, ritmo y salsas.",
        locationsTitle: "Elige tu local",
        locationsIntro:
          "Prato abre hasta tarde; Florencia recibe al mediodia y por la noche en el centro historico.",
        premiumTitle: "Pensado para una cena especial",
      },
      steps: [
        ["Elige el caldo", "Picante, suave o doble: el caldo marca el tono."],
        [
          "Pide ingredientes frescos",
          "Carne, verduras, setas, tofu y especialidades se cocinan en pocos momentos.",
        ],
        ["Cocina en la mesa", "Cada persona controla el punto y el ritmo."],
        [
          "Comparte la experiencia",
          "La olla convierte la mesa en el centro de la noche.",
        ],
      ],
      premium: [
        "Ambiente moderno con detalles chinos calidos.",
        "Ideal para grupos, parejas, familias y curiosos.",
        "Una forma clara y acogedora de descubrir la cultura gastronomica china.",
      ],
    },
    culture: {
      eyebrow: "Guia para la primera vez",
      title: "Que es el hotpot?",
      intro:
        "El hotpot es una tradicion china en la que el caldo se mantiene caliente en el centro de la mesa. Los invitados cocinan ingredientes frescos, mezclan salsas y crean su propio recorrido de sabores.",
      blocks: [
        [
          "Una cena participativa",
          "La comida se termina juntos en la mesa y la conversacion fluye naturalmente.",
        ],
        [
          "Sabores personales",
          "Caldo, picante, ingredientes y salsa se adaptan a cada persona.",
        ],
        [
          "Cultura para compartir",
          "Es una manera accesible de descubrir la cocina china mas alla de los platos conocidos.",
        ],
      ],
      whyTitle: "Por que probarlo",
      whyItems: [
        "Es social: la mesa esta activa durante toda la cena.",
        "Es flexible: cada persona elige ritmo y sabor.",
        "Es memorable: vapor, aromas, colores y compartir crean una ocasion especial.",
      ],
      etiquetteTitle: "Consejos simples",
      etiquette: [
        "Empieza por ingredientes delicados antes de sabores mas intensos.",
        "Usa las salsas para equilibrar picante, frescor y sabor.",
        "Indica alergias o necesidades especiales en la nota de reserva.",
      ],
    },
    locations: {
      eyebrow: "Prato y Florencia",
      title: "Dos locales para tu proxima noche de hotpot",
      intro:
        "Elige Prato para cenar hasta tarde o Florencia para almuerzo y cena cerca del centro historico.",
      daily: "Abierto todos los dias",
      phone: "Telefono",
      address: "Direccion",
      hours: "Horario",
    },
    reservation: {
      eyebrow: "Solicitud de reserva",
      title: "Reserva tu mesa",
      intro:
        "Envia los datos principales y el responsable del restaurante recibira tu solicitud por email.",
      labels: {
        name: "Nombre",
        phone: "Telefono",
        guests: "Personas",
        date: "Fecha",
        time: "Hora",
        location: "Local",
        message: "Nota opcional",
      },
      placeholders: {
        name: "Tu nombre",
        phone: "+39 ...",
        message: "Alergias, ocasiones especiales u otras peticiones",
      },
      consent:
        "Al enviar el formulario aceptas que Sina Hotpot use estos datos solo para gestionar tu solicitud de reserva.",
      privacyLink: "Leer la politica de privacidad",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      success: "Solicitud enviada.",
      error:
        "No hemos podido enviar la solicitud. Intentalo de nuevo o contacta por WhatsApp.",
      missingKey:
        "Web3forms aun no esta configurado. Define PUBLIC_WEB3FORMS_ACCESS_KEY antes del lanzamiento.",
    },
    success: {
      title: "Solicitud recibida",
      intro:
        "Gracias. Tu solicitud ha sido enviada a Sina Hotpot. Para cambios urgentes, contacta directamente por WhatsApp.",
      next: "Tambien puedes revisar direccion, horarios y ruta del local elegido.",
    },
    privacy: {
      title: "Politica de privacidad",
      intro:
        "Esta pagina explica que datos recoge el sitio de Sina Hotpot y para que se utilizan.",
      sections: [
        [
          "Datos recogidos",
          "El formulario recoge nombre, telefono, numero de personas, fecha, hora, local elegido y notas opcionales. Las notas pueden incluir alergias o peticiones especiales solo si las escribes voluntariamente.",
        ],
        [
          "Finalidad",
          "Los datos se usan para recibir y gestionar solicitudes de reserva, contactarte si es necesario y organizar el servicio.",
        ],
        [
          "Base legal y conservacion",
          "El tratamiento se basa en tu solicitud. Los datos se conservan solo el tiempo necesario para gestionar la reserva y obligaciones administrativas aplicables.",
        ],
        [
          "Servicios de terceros",
          "El formulario usa Web3forms para enviar la solicitud por email. Enlaces externos como Google Maps, Instagram, Facebook y WhatsApp pueden aplicar sus propias politicas.",
        ],
        [
          "Derechos y contacto",
          "Puedes solicitar acceso, rectificacion o eliminacion escribiendo a sinahotpot@gmail.com. Este texto es una base operativa y no sustituye una revision legal profesional.",
        ],
      ],
    },
  },
  fr: {
    meta: {
      homeTitle: "Sina Hotpot | Hotpot premium a Prato et Florence",
      description:
        "Sina Hotpot propose une experience de hotpot chinois premium en Toscane, avec ingredients selectionnes, bouillons aromatiques et restaurants a Prato et Florence.",
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
          "Un diner participatif",
          "Le repas se termine ensemble a table et la conversation vient naturellement.",
        ],
        [
          "Des saveurs personnelles",
          "Bouillon, niveau d’epices, ingredients et sauce s’adaptent a chacun.",
        ],
        [
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
  },
} as const satisfies Record<Locale, LocaleCopy>;
