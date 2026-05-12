import { images } from "../restaurant";
import type { CultureTopic } from "./types";

export const ritualTopic = {
    image: images.table,
    content: {
      it: {
        kicker: "Come si mangia",
        title: "Un ritmo semplice per godersi l’hotpot",
        summary:
          "Per chi non lo conosce, l’hotpot diventa facile quando il percorso è chiaro: scegliere, cuocere, assaggiare e condividere.",
        highlights: [
          "Ordine facile da seguire",
          "Tempi di cottura intuitivi",
          "Esperienza adatta a gruppi",
        ],
        detailIntro:
          "La prima visita deve sentirsi guidata, non complicata. Pochi passaggi aiutano il cliente a entrare nell’esperienza con sicurezza.",
        sections: [
          {
            title: "Scegliere insieme crea aspettativa",
            body: "Il tavolo inizia decidendo brodo, ingredienti e salse. Questa fase aiuta anche i nuovi ospiti a capire che non esiste una sola maniera corretta.",
          },
          {
            title: "Cuocere poco alla volta evita confusione",
            body: "Mettere troppi ingredienti insieme rende difficile controllare tempi e sapori. Piccole porzioni mantengono il brodo pulito e il ritmo piacevole.",
          },
          {
            title: "Assaggiare e correggere è parte del gioco",
            body: "Dopo i primi bocconi, il cliente può regolare salsa, piccantezza e ordine degli ingredienti. L’esperienza diventa personale senza perdere eleganza.",
          },
        ],
        tipsTitle: "Percorso consigliato",
        tips: [
          "Scegli brodo e salsa.",
          "Cuoci pochi ingredienti alla volta.",
          "Alterna sapori intensi e freschi.",
        ],
      },
      zh: {
        kicker: "怎么吃",
        title: "让第一次吃火锅变得简单",
        summary:
          "对于不熟悉火锅的外国客人，只要路径清楚，体验就会很自然：选择、下锅、品尝、分享。",
        highlights: ["步骤容易理解", "涮煮节奏可掌控", "适合多人一起体验"],
        detailIntro:
          "第一次吃火锅不应该让人紧张。清晰的步骤能让客人快速进入状态，同时保留火锅的自由感。",
        sections: [
          {
            title: "一起选择会建立期待感",
            body: "同桌客人先决定锅底、食材和蘸料。这个过程本身就是体验的一部分，也能让新客人明白火锅没有唯一标准答案。",
          },
          {
            title: "少量多次下锅更好控制",
            body: "一次放入太多食材会让熟度和味道变得难以判断。少量多次能让汤底更清爽，也让每一口更有节奏。",
          },
          {
            title: "边吃边调整才是火锅乐趣",
            body: "吃过几口之后，客人可以调整蘸料、辣度和食材顺序。这样每个人都能找到适合自己的组合。",
          },
        ],
        tipsTitle: "推荐流程",
        tips: [
          "先选锅底和蘸料。",
          "一次只放少量食材。",
          "浓郁和清爽食材交替吃。",
        ],
      },
      en: {
        kicker: "How to eat",
        title: "A simple rhythm for first-time guests",
        summary:
          "Hotpot becomes easy when the path is clear: choose, cook, taste, and share.",
        highlights: ["Easy steps", "Clear cooking rhythm", "Great for groups"],
        detailIntro:
          "A first visit should feel guided, not complicated. A few steps help guests join the experience with confidence.",
        sections: [
          {
            title: "Choosing together builds anticipation",
            body: "The table starts by choosing broth, ingredients, and sauces. This also shows newcomers that there is no single correct way to enjoy hotpot.",
          },
          {
            title: "Cook in small batches",
            body: "Adding too much at once makes timing and flavor harder to manage. Small batches keep the broth clean and the pace comfortable.",
          },
          {
            title: "Taste and adjust",
            body: "After the first bites, guests can adjust sauce, spice, and ingredient order. The meal becomes personal while staying elegant.",
          },
        ],
        tipsTitle: "Suggested flow",
        tips: [
          "Choose broth and sauce.",
          "Cook a few items at a time.",
          "Alternate rich and fresh flavors.",
        ],
      },
      es: {
        kicker: "Cómo se come",
        title: "Un ritmo simple para la primera visita",
        summary:
          "El hotpot es fácil cuando el recorrido está claro: elegir, cocinar, probar y compartir.",
        highlights: [
          "Pasos fáciles",
          "Ritmo de cocción claro",
          "Perfecto para grupos",
        ],
        detailIntro:
          "La primera visita debe sentirse guiada, no complicada. Unos pasos simples ayudan a entrar con confianza.",
        sections: [
          {
            title: "Elegir juntos crea expectativa",
            body: "La mesa empieza eligiendo caldo, ingredientes y salsas. También muestra que no hay una única forma correcta de disfrutar el hotpot.",
          },
          {
            title: "Cocinar poco a poco",
            body: "Poner demasiados ingredientes a la vez dificulta tiempos y sabores. Las porciones pequeñas mantienen el caldo limpio y el ritmo agradable.",
          },
          {
            title: "Probar y ajustar",
            body: "Después de los primeros bocados se puede ajustar salsa, picante y orden de ingredientes. La comida se vuelve personal.",
          },
        ],
        tipsTitle: "Flujo sugerido",
        tips: [
          "Elige caldo y salsa.",
          "Cocina pocos ingredientes cada vez.",
          "Alterna sabores intensos y frescos.",
        ],
      },
      fr: {
        kicker: "Comment manger",
        title: "Un rythme simple pour une première visite",
        summary:
          "Le hotpot devient facile lorsque le parcours est clair: choisir, cuire, goûter et partager.",
        highlights: [
          "Étapes simples",
          "Rythme de cuisson clair",
          "Idéal pour les groupes",
        ],
        detailIntro:
          "Une première visite doit être guidée, pas compliquée. Quelques étapes suffisent pour entrer dans l’expérience.",
        sections: [
          {
            title: "Choisir ensemble crée l’attente",
            body: "La table commence par choisir bouillon, ingrédients et sauces. Cela montre aussi qu’il n’existe pas une seule bonne façon de profiter du hotpot.",
          },
          {
            title: "Cuire par petites quantités",
            body: "Mettre trop d’ingrédients à la fois complique les temps et les saveurs. Les petites quantités gardent le bouillon clair et le rythme agréable.",
          },
          {
            title: "Goûter et ajuster",
            body: "Après les premières bouchées, chacun peut ajuster sauce, épices et ordre des ingrédients. Le repas devient personnel.",
          },
        ],
        tipsTitle: "Parcours conseillé",
        tips: [
          "Choisissez bouillon et sauce.",
          "Cuisez quelques ingrédients à la fois.",
          "Alternez saveurs riches et fraîches.",
        ],
      },
    },
  } as const satisfies CultureTopic;
