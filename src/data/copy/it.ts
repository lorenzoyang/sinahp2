import type { LocaleCopy } from "./types";

export const itCopy = {
    meta: {
      homeTitle: "鲜入围煮 Sina Hotpot | Hotpot cinese a Prato e Firenze",
      description:
        "A Prato e Firenze, Sina Hotpot porta in tavola brodi aromatici, ingredienti freschi e il piacere dell’hotpot condiviso, facile anche al primo assaggio.",
    },
    layout: {
      skipToContent: "Vai al contenuto",
      contact: "Contatti",
      social: "Social",
    },
    a11y: {
      primaryNavigation: "Navigazione principale",
      languageMenu: "Scegli lingua",
      mobileNavigation: "Navigazione mobile",
      restaurantPhotos: "Foto del ristorante {city}",
      photoSlides: "Foto di {city}",
      photoNavigation: "Navigazione foto di {city}",
      photoLabel: "{city}, foto {number}",
      carousel: "carosello",
    },
    nav: {
      home: "Home",
      culture: "Scopri l’hotpot",
      locations: "Ristoranti",
      gallery: "Galleria",
      reservation: "Prenota",
      privacy: "Informativa privacy",
      menu: "Menù",
    },
    cta: {
      reserve: "Prenotazione online",
      culture: "Come funziona l’hotpot",
      call: "Chiama",
      map: "Apri mappa",
      whatsapp: "WhatsApp",
      whatsappReservation: "Prenotazione WhatsApp",
      phoneReservation: "Prenotazione telefonica",
      wechatReservation: "Prenotazione WeChat",
      viewDetails: "Vedi dettagli",
      copyWechat: "Copia ID",
      copied: "Copiato",
      backHome: "Torna alla home",
      learnMore: "Leggi di più",
      gallery: "Guarda la galleria",
    },
    home: {
      eyebrow: "Hotpot cinese da condividere in Toscana",
      title: "鲜入围煮 Sina Hotpot",
      intro:
        "Una pentola che profuma il tavolo, ingredienti da cuocere al momento e un ritmo conviviale: scegli Prato o Firenze e vivi l’hotpot con naturalezza.",
      sections: {
        ritualTitle: "Un rito semplice, da condividere",
        ritualIntro:
          "Scegli il brodo, aggiungi pochi ingredienti per volta e crea il tuo assaggio con le salse.",
        locationsTitle: "Prenota a Prato o Firenze",
        locationsIntro:
          "Scegli la sede più comoda: Prato per la sera fino a tardi, Firenze per pranzo e cena vicino al centro.",
        premiumTitle: "Il gusto Sina in tavola",
      },
      steps: [
        [
          "Scegli il brodo",
          "Delicato, piccante o doppio: la base giusta mette tutti a proprio agio.",
        ],
        [
          "Aggiungi gli ingredienti",
          "Carni sottili, verdure, funghi e tofu arrivano pronti per la cottura al tavolo.",
        ],
        [
          "Cuoci al momento",
          "Immergi poco per volta, aspetta il tempo giusto e assaggia quando il profumo sale.",
        ],
        [
          "Condividi il ritmo",
          "La pentola al centro fa parlare, scegliere e scoprire sapori insieme.",
        ],
      ],
    },
    culture: {
      eyebrow: "Guida all’hotpot cinese",
      title: "Scopri l’hotpot, una cena che si cucina insieme",
      intro:
        "L’hotpot è una tradizione cinese pensata per stare bene a tavola: il brodo resta caldo al centro, gli ingredienti si cuociono al momento e ogni ospite compone il proprio percorso di sapori.",
      blocks: [
        [
          "ritual",
          "Il tavolo diventa vivo",
          "Non arriva un piatto già chiuso: si sceglie, si cuoce e si assaggia insieme.",
        ],
        [
          "ingredients",
          "Ogni assaggio è personale",
          "Brodo, ingredienti, piccantezza e salsa permettono a ciascuno di trovare il proprio equilibrio.",
        ],
        [
          "basics",
          "Facile da provare",
          "Anche chi non conosce la cucina cinese può iniziare con ingredienti familiari e lasciarsi guidare.",
        ],
      ],
      whyTitle: "Perché vale la pena provarlo",
      whyItems: [
        "È conviviale: la cena ha un ritmo naturale, fatto di piccoli assaggi e conversazione.",
        "È flessibile: ogni ospite sceglie intensità, tempi di cottura e salsa.",
        "È memorabile: vapore, profumi e colori trasformano il pasto in un momento da condividere.",
      ],
      etiquetteTitle: "Piccoli consigli",
      etiquette: [
        "Inizia con ingredienti delicati, poi passa a sapori più decisi.",
        "Regola la salsa poco per volta: piccante, fresco, sapido e aromatico possono cambiare ogni boccone.",
        "Se hai allergie o esigenze particolari, indicarle nella prenotazione ci aiuta a preparare il servizio.",
      ],
    },
    locations: {
      eyebrow: "Prato e Firenze",
      title: "Scegli un ristorante",
      intro:
        "Seleziona una delle nostre sedi per prenotare, trovare l'indirizzo o contattarci direttamente.",
      daily: "Aperto tutti i giorni",
      phone: "Telefono",
      wechat: "WeChat",
      address: "Indirizzo",
      hours: "Orari",
      whatsappMessage: "Ciao Sina Hotpot {city}, vorrei prenotare un tavolo.",
    },
    gallery: {
      eyebrow: "Galleria",
      title: "Guarda cosa arriva in tavola",
      intro:
        "Esplora piatti pronti, ingredienti, chef con materie prime fresche, dolci e bevande: un assaggio visivo dell’atmosfera Sina Hotpot prima di prenotare.",
      categories: {
        dishes: "Piatti pronti",
        ingredients: "Materie prime",
        refreshments: "Dolci e bevande",
        chefs: "Chef e ingredienti",
      },
    },
    reservation: {
      eyebrow: "Prenotazione",
      title: "Riserva la tua esperienza hotpot",
      intro:
        "Mandaci data, orario, numero di persone e sede preferita. Riceveremo la richiesta via email e potremo ricontattarti per confermare i dettagli.",
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
        location: "Seleziona un indirizzo",
        message: "Allergie, occasione speciale o preferenze per il tavolo",
      },
      hints: {
        time: "Seleziona prima un indirizzo.",
      },
      consentPrefix: "Ho letto l'",
      privacyLink: "informativa privacy",
      consentSuffix:
        " e acconsento all'uso dei dati inseriti per gestire la prenotazione, incluse eventuali note su allergie o salute.",
      submit: "Invia richiesta",
      sending: "Invio in corso...",
      success: "Richiesta inviata.",
      error:
        "Non è stato possibile inviare la richiesta. Riprova o contattaci via WhatsApp.",
      missingKey:
        "Web3forms non è ancora configurato. Imposta PUBLIC_WEB3FORMS_ACCESS_KEY prima della pubblicazione.",
      captchaRequired:
        "Completa il controllo anti-spam prima di inviare la richiesta.",
    },
    success: {
      title: "Richiesta ricevuta",
      intro:
        "Grazie. La tua richiesta è arrivata a Sina Hotpot. Per modifiche urgenti o conferme rapide puoi scriverci direttamente su WhatsApp.",
      next: "Nel frattempo puoi controllare indirizzo, orari e percorso della sede scelta.",
    },
    cookieConsent: {
      title: "Cookie e annunci",
      body:
        "Con il tuo consenso, Google Ads usa cookie pubblicitari e di misurazione per misurare i clic su WhatsApp e telefono dagli annunci. ",
      privacyLink: "Leggi l'informativa privacy",
      decline: "Rifiuta",
      accept: "Accetta",
    },
    privacy: {
      title: "Informativa privacy",
      intro:
        "Questa informativa spiega come il sito Sina Hotpot tratta i dati personali raccolti tramite il sito e il modulo di prenotazione.",
      updated: "Ultimo aggiornamento: 6 giugno 2026",
      sections: [
        {
          title: "Titolare del trattamento",
          paragraphs: [
            "Il titolare del trattamento è RISTORANTE SINA HOTPOT S.R.L., con sede legale in Via Cava 109, 59100 Prato (PO), P.IVA / C.F. / Registro Imprese Pistoia-Prato: 02455830972, contattabile all'indirizzo email sinahotpot@gmail.com. Il sito riguarda le sedi operative di Prato, Via Cava 109, 59100 Prato, e Firenze, Via Ghibellina 80R, 50122 Firenze.",
          ],
        },
        {
          title: "Dati raccolti",
          paragraphs: [
            "Il modulo di prenotazione raccoglie nome, numero di telefono, numero di persone, data, ora, sede scelta e note opzionali. I dati tecnici necessari alla navigazione, come indirizzo IP, informazioni del browser, data e ora delle richieste, possono essere trattati dai servizi di hosting e sicurezza.",
            "Le note opzionali non sono obbligatorie. Se scegli di inserire allergie, esigenze alimentari o altre informazioni relative alla salute, tali dati saranno usati solo per gestire la prenotazione e organizzare il servizio richiesto.",
          ],
        },
        {
          title: "Finalità e basi giuridiche",
          paragraphs: [
            "I dati sono trattati per ricevere e gestire le richieste di prenotazione, contattarti se necessario, organizzare il servizio in sala, mantenere il sito sicuro e funzionante e adempiere eventuali obblighi amministrativi o di legge.",
          ],
          items: [
            "Richieste di prenotazione: esecuzione di misure precontrattuali o contrattuali richieste dall'utente, art. 6(1)(b) GDPR.",
            "Dati tecnici, sicurezza e prevenzione spam: legittimo interesse al funzionamento e alla protezione del sito, art. 6(1)(f) GDPR.",
            "Eventuali obblighi amministrativi o legali: obbligo di legge, art. 6(1)(c) GDPR.",
            "Allergie o informazioni relative alla salute inserite volontariamente nelle note: consenso esplicito dell'utente per la specifica finalità di gestire la prenotazione e il servizio, art. 9(2)(a) GDPR.",
          ],
        },
        {
          title: "Conferimento dei dati",
          paragraphs: [
            "Nome, telefono, numero di persone, data, ora e sede sono necessari per inviare la richiesta di prenotazione. Senza questi dati Sina Hotpot potrebbe non essere in grado di gestire la richiesta. Le note opzionali possono essere lasciate vuote.",
          ],
        },
        {
          title: "Destinatari e servizi terzi",
          paragraphs: [
            "I dati possono essere trattati da personale autorizzato di Sina Hotpot e da fornitori tecnici usati per pubblicare il sito, proteggere il servizio e inoltrare le richieste di prenotazione.",
          ],
          items: [
            "Web3Forms: riceve i dati del modulo e li inoltra via email a Sina Hotpot.",
            "Cloudflare: fornisce hosting, distribuzione del sito, sicurezza e log tecnici.",
            "Provider email: riceve e conserva le email di prenotazione nella casella di Sina Hotpot.",
            "hCaptcha o strumenti anti-spam equivalenti: possono essere attivati sul modulo per verificare che l'invio provenga da una persona e non da un bot.",
            "Google Ads: se presti consenso, usa cookie pubblicitari e di misurazione per misurare i clic sui link WhatsApp e telefono provenienti dalle campagne pubblicitarie.",
            "Google Maps, Instagram, Facebook e WhatsApp sono collegamenti esterni. I relativi servizi trattano dati solo se decidi di aprire quei link o usare quelle piattaforme.",
          ],
        },
        {
          title: "Trasferimenti fuori dallo Spazio Economico Europeo",
          paragraphs: [
            "Alcuni fornitori tecnici, inclusi servizi di hosting, sicurezza, moduli, email o anti-spam, possono trattare dati anche fuori dallo Spazio Economico Europeo. In questi casi il trattamento deve basarsi sulle garanzie disponibili presso i fornitori, come decisioni di adeguatezza, Data Privacy Framework, clausole contrattuali standard o misure equivalenti quando applicabili.",
          ],
        },
        {
          title: "Conservazione",
          paragraphs: [
            "Le richieste di prenotazione sono conservate per il tempo necessario a gestire la prenotazione e, di norma, non oltre 12 mesi dalla data della richiesta, salvo necessità di conservazione più lunga per obblighi di legge, sicurezza, prevenzione abusi o difesa di diritti.",
            "I log tecnici e anti-spam sono conservati secondo le impostazioni e i tempi dei rispettivi fornitori. Web3Forms dichiara di non conservare le submission del modulo e di cancellare periodicamente eventuali log tecnici.",
          ],
        },
        {
          title: "Cookie e strumenti di tracciamento",
          paragraphs: [
            "Il sito usa strumenti tecnici necessari alla navigazione, alla sicurezza, all'inoltro del modulo e alla prevenzione dello spam. Con il tuo consenso, Google Ads può usare cookie o identificatori pubblicitari e di misurazione per misurare i clic sui link WhatsApp e telefono provenienti dagli annunci.",
            "Puoi accettare o rifiutare il tracciamento pubblicitario dal banner cookie. Il rifiuto non impedisce la navigazione, la prenotazione o l'uso dei link di contatto.",
          ],
        },
        {
          title: "Diritti dell'interessato",
          paragraphs: [
            "Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità dei dati, opposizione al trattamento quando applicabile e revoca del consenso per i dati trattati sulla base del consenso. La revoca non incide sulla liceità del trattamento effettuato prima della revoca.",
            "Puoi esercitare i diritti scrivendo a sinahotpot@gmail.com. Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali, www.garanteprivacy.it.",
          ],
        },
        {
          title: "Decisioni automatizzate",
          paragraphs: [
            "Il sito non effettua profilazione o decisioni automatizzate che producano effetti giuridici o incidano in modo analogo sugli utenti.",
          ],
        },
      ],
    },
  } as const satisfies LocaleCopy;
