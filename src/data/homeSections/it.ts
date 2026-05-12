import type { HomeSectionContent } from "./types";

export const itHomeSections = {
    signatures: {
      intro:
        "Brodi ben definiti, carni tagliate sottili, verdure fresche e salse personali: la qualità dell’hotpot si costruisce su equilibrio, velocità di cottura e materia prima leggibile.",
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
          "Ogni ospite può costruire un equilibrio diverso tra note piccanti, sapide, fresche e aromatiche.",
        ],
      ],
    },
    occasions: {
      eyebrow: "Occasioni da tavola",
      title: "Una cena che funziona in contesti diversi",
      intro:
        "L’hotpot regge bene ritmi e gruppi diversi. La formula resta conviviale, ma il tono può essere rilassato, elegante o più celebrativo.",
      items: [
        [
          "Coppie e serate lente",
          "Il ritmo della cottura rende la cena più distesa e lascia spazio alla conversazione senza fretta.",
        ],
        [
          "Gruppi e compleanni",
          "Il tavolo resta attivo per tutta la serata e aiuta a condividere ingredienti, tempi e curiosità.",
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
        "Per molti clienti europei il primo hotpot è nuovo. Una guida breve aiuta a entrare nell’esperienza senza irrigidirla.",
      items: [
        "Per una prima visita la pentola doppia è spesso la scelta più comoda.",
        "Conviene iniziare con ingredienti delicati e passare ai sapori più intensi in un secondo momento.",
        "Le salse funzionano meglio se regolate poco alla volta, dopo i primi assaggi.",
        "Allergie, occasioni speciali e preferenze importanti vanno indicate già nella prenotazione.",
      ],
    },
    atmosphere: {
      eyebrow: "Esperienza in sala",
      title: "Calore, vapore e servizio dal ritmo naturale",
      intro:
        "Un buon hotpot non è solo varietà: è un tavolo che resta vivo, ordinato e leggibile mentre la cena si sviluppa.",
      items: [
        "Il tavolo resta il centro della serata, con un servizio che accompagna senza interrompere.",
        "Il vapore e il profumo del brodo danno presenza scenica senza trasformare la cena in qualcosa di teatrale.",
        "La formula è adatta sia a cene lunghe sia a incontri più diretti, grazie a tempi di servizio chiari.",
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
  } as const satisfies HomeSectionContent;
