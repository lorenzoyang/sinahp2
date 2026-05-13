import { cultureImages } from "../pageImages";
import type { CultureTopic } from "./types";

export const basicsTopic = {
    image: cultureImages.basics,
    content: {
      it: {
        kicker: "Le basi",
        title: "Hotpot: una tavola condivisa",
        summary:
          "Capire l’hotpot significa capire perché il pasto nasce al centro del tavolo: il brodo resta caldo, gli ingredienti arrivano freschi e ogni ospite costruisce il proprio percorso.",
        highlights: [
          "Brodo sempre caldo",
          "Ingredienti cotti al momento",
          "Esperienza lenta e conviviale",
        ],
        detailIntro:
          "L’hotpot è una forma di cucina sociale. Non si ordina un piatto finito: si sceglie una base, si condividono ingredienti e si cucina direttamente al tavolo.",
        sections: [
          {
            title: "Non è una zuppa servita già pronta",
            body: "Il brodo è il cuore dell’esperienza, ma non è il piatto finale. Funziona come una base aromatica in cui carne, verdure, tofu, funghi e specialità vengono cotti in tempi diversi.",
          },
          {
            title: "Il tavolo diventa parte del servizio",
            body: "La pentola calda crea un ritmo naturale: si sceglie, si cuoce, si assaggia e si torna a parlare. Per questo l’hotpot è molto adatto a gruppi, coppie e prime esperienze culturali.",
          },
          {
            title: "Perché piace a chi lo prova per la prima volta",
            body: "Il cliente non deve conoscere tutti i piatti cinesi. Può partire da ingredienti familiari, regolare il piccante e scoprire gradualmente sapori più intensi.",
          },
        ],
        tipsTitle: "Da ricordare",
        tips: [
          "La cena procede a piccoli assaggi.",
          "Il brodo cambia sapore durante il pasto.",
          "Condividere è parte dell’esperienza.",
        ],
      },
      zh: {
        kicker: "基础认识",
        title: "火锅：围坐共享的餐桌体验",
        summary:
          "理解火锅，首先要理解“锅在桌中央”的意义：汤底持续加热，食材现点现涮，每个人都能参与到这顿饭里。",
        highlights: ["汤底持续加热", "食材现涮现吃", "适合交流与分享"],
        detailIntro:
          "火锅是一种参与式餐饮。客人不是等待一道完成的菜，而是选择锅底、共享食材，并在桌边完成烹煮。",
        sections: [
          {
            title: "火锅不是一碗已经煮好的汤",
            body: "汤底是火锅的风味基础，但真正的体验来自不断加入的食材。肉类、蔬菜、菌菇、豆制品和特色菜品会在不同时间入锅，形成层次变化。",
          },
          {
            title: "餐桌本身就是体验的一部分",
            body: "锅在桌中央会自然创造节奏：选择、下锅、等待、品尝、交流。正因为如此，火锅很适合朋友聚餐、情侣约会和第一次接触中国餐饮文化的外国客人。",
          },
          {
            title: "为什么第一次吃也容易接受",
            body: "客人不需要提前熟悉所有中餐菜名。可以从牛肉、蔬菜、豆腐等熟悉食材开始，再根据喜好逐步尝试更有特色的味道。",
          },
        ],
        tipsTitle: "记住这几点",
        tips: [
          "火锅是一口一口慢慢吃的。",
          "汤底会随着食材加入而变得更丰富。",
          "分享是火锅体验的核心。",
        ],
      },
      en: {
        kicker: "The basics",
        title: "Hotpot as a shared table",
        summary:
          "To understand hotpot, start with the pot in the middle: broth stays hot, ingredients arrive fresh, and each guest shapes the meal.",
        highlights: [
          "Simmering broth",
          "Fresh ingredients cooked at the table",
          "Social, flexible pacing",
        ],
        detailIntro:
          "Hotpot is participatory dining. Instead of receiving a finished dish, guests choose a broth, share ingredients, and cook at the table.",
        sections: [
          {
            title: "It is not a ready-made soup",
            body: "The broth is the foundation, not the whole dish. It carries aroma and heat while beef, vegetables, tofu, mushrooms, seafood, and house items are cooked in the moment.",
          },
          {
            title: "The table becomes part of the service",
            body: "Hotpot creates a natural rhythm: choose, cook, taste, talk, and repeat. This makes it ideal for groups, dates, families, and curious first-time guests.",
          },
          {
            title: "Why it works for newcomers",
            body: "Guests can begin with familiar ingredients, choose a mild broth, and adjust the spice level gradually. The experience is easy to enter and rich enough to remember.",
          },
        ],
        tipsTitle: "Keep in mind",
        tips: [
          "The meal unfolds in small bites.",
          "The broth deepens as ingredients cook.",
          "Sharing is part of the pleasure.",
        ],
      },
      es: {
        kicker: "Lo básico",
        title: "Hotpot como mesa compartida",
        summary:
          "Para entender el hotpot, empieza por la olla en el centro: el caldo sigue caliente, los ingredientes llegan frescos y cada persona crea su comida.",
        highlights: [
          "Caldo siempre caliente",
          "Ingredientes cocinados en la mesa",
          "Ritmo social y flexible",
        ],
        detailIntro:
          "El hotpot es una comida participativa. En vez de recibir un plato terminado, los comensales eligen caldo, comparten ingredientes y cocinan en la mesa.",
        sections: [
          {
            title: "No es una sopa ya preparada",
            body: "El caldo es la base, no todo el plato. Aporta aroma y calor mientras carne, verduras, tofu, setas, mariscos y especialidades se cocinan al momento.",
          },
          {
            title: "La mesa forma parte del servicio",
            body: "El hotpot crea un ritmo natural: elegir, cocinar, probar, conversar y repetir. Por eso funciona bien para grupos, parejas, familias y primeras experiencias.",
          },
          {
            title: "Por qué funciona para nuevos clientes",
            body: "Se puede empezar con ingredientes familiares, elegir un caldo suave y ajustar el picante poco a poco. Es fácil entrar y difícil olvidar.",
          },
        ],
        tipsTitle: "Para recordar",
        tips: [
          "La comida avanza en pequeños bocados.",
          "El caldo gana sabor durante la cena.",
          "Compartir es parte del placer.",
        ],
      },
      fr: {
        kicker: "Les bases",
        title: "Le hotpot comme table partagée",
        summary:
          "Pour comprendre le hotpot, il faut partir de la marmite au centre: le bouillon reste chaud, les ingrédients arrivent frais et chacun compose son repas.",
        highlights: [
          "Bouillon toujours chaud",
          "Ingrédients cuits à table",
          "Rythme convivial et flexible",
        ],
        detailIntro:
          "Le hotpot est un repas participatif. Au lieu de recevoir un plat terminé, les invités choisissent un bouillon, partagent les ingrédients et cuisent à table.",
        sections: [
          {
            title: "Ce n’est pas une soupe déjà servie",
            body: "Le bouillon est la base, pas tout le plat. Il apporte chaleur et parfum pendant que viande, légumes, tofu, champignons, fruits de mer et spécialités cuisent au moment.",
          },
          {
            title: "La table fait partie du service",
            body: "Le hotpot crée un rythme naturel: choisir, cuire, goûter, discuter et recommencer. Il convient aux groupes, couples, familles et premières découvertes.",
          },
          {
            title: "Pourquoi les nouveaux clients l’aiment",
            body: "On peut commencer avec des ingrédients familiers, choisir un bouillon doux et ajuster les épices peu à peu. L’expérience est accessible et mémorable.",
          },
        ],
        tipsTitle: "À retenir",
        tips: [
          "Le repas avance par petites bouchées.",
          "Le bouillon gagne en profondeur.",
          "Partager fait partie du plaisir.",
        ],
      },
    },
  } as const satisfies CultureTopic;
