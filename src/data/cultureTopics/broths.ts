import { images } from "../restaurant";
import type { CultureTopic } from "./types";

export const brothsTopic = {
    image: images.hero,
    content: {
      it: {
        kicker: "Brodi e profumi",
        title: "Il brodo decide il carattere della cena",
        summary:
          "Il brodo e la prima scelta importante: puo essere piccante, delicato, aromatico o doppio. Aiuta ogni tavolo a trovare il proprio equilibrio.",
        highlights: [
          "Piccante o delicato",
          "Doppia scelta nella stessa pentola",
          "Sapori che si sviluppano durante la cena",
        ],
        detailIntro:
          "Il brodo non serve solo a cuocere. Trasferisce aroma agli ingredienti e assorbe parte del loro sapore, diventando piu profondo con il passare del tempo.",
        sections: [
          {
            title: "Piccante non significa solo forte",
            body: "Un buon brodo piccante porta calore, profumo e persistenza. Il livello di intensita puo essere spiegato al cliente per evitare sorprese e rendere l’esperienza piacevole.",
          },
          {
            title: "Il brodo delicato e ideale per iniziare",
            body: "Una base piu leggera permette di apprezzare verdure, tofu, funghi e carni sottili. E una buona scelta per famiglie, turisti e ospiti al primo hotpot.",
          },
          {
            title: "La pentola doppia aiuta a condividere",
            body: "Con due brodi nello stesso tavolo, chi ama il piccante e chi preferisce sapori morbidi possono mangiare insieme senza compromessi.",
          },
        ],
        tipsTitle: "Consiglio Sina",
        tips: [
          "Per la prima visita scegli una pentola doppia.",
          "Cuoci sapori delicati nel brodo leggero.",
          "Lascia gli ingredienti intensi al brodo piu deciso.",
        ],
      },
      zh: {
        kicker: "锅底与香气",
        title: "锅底决定一顿火锅的性格",
        summary:
          "锅底是火锅最重要的第一步：可以麻辣、清淡、鲜香，也可以选择鸳鸯锅，让同桌客人都找到合适口味。",
        highlights: ["麻辣或清淡", "鸳鸯锅兼顾不同口味", "汤底会越煮越有层次"],
        detailIntro:
          "锅底不只是用来煮熟食材。它会把香气传递给食材，也会吸收食材的鲜味，随着用餐时间变得更丰富。",
        sections: [
          {
            title: "辣不只是刺激",
            body: "好的麻辣锅底有热度、香气和回味。对于外国客人，清楚说明辣度很重要，可以帮助他们安心尝试而不会被味道吓到。",
          },
          {
            title: "清淡锅底适合入门",
            body: "较温和的汤底能凸显蔬菜、豆腐、菌菇和薄切肉类的本味。它很适合家庭、游客和第一次吃火锅的客人。",
          },
          {
            title: "鸳鸯锅让同桌更容易共享",
            body: "一边麻辣、一边清淡，可以让喜欢重口味和偏好温和味道的客人在同一桌舒适用餐。",
          },
        ],
        tipsTitle: "Sina 建议",
        tips: [
          "第一次来可以选择鸳鸯锅。",
          "清淡食材适合先放入清汤。",
          "味道浓郁的食材适合搭配更有力量的锅底。",
        ],
      },
      en: {
        kicker: "Broths and aroma",
        title: "The broth sets the mood",
        summary:
          "Broth is the first major choice: spicy, gentle, aromatic, or split. It helps every table find its balance.",
        highlights: [
          "Spicy or mild",
          "Split pot for mixed preferences",
          "Flavor builds during the meal",
        ],
        detailIntro:
          "Broth does more than cook ingredients. It gives aroma to each bite and gains depth as ingredients release their flavor.",
        sections: [
          {
            title: "Spicy does not only mean hot",
            body: "A good spicy broth has warmth, fragrance, and length. Explaining spice levels helps new guests feel comfortable and makes the experience more refined.",
          },
          {
            title: "Mild broth is a strong first choice",
            body: "A lighter base lets vegetables, tofu, mushrooms, and thin-sliced meats shine. It works well for families, tourists, and first-time hotpot guests.",
          },
          {
            title: "A split pot keeps the table together",
            body: "Two broths in one pot allow spice lovers and mild-flavor guests to share the same meal without compromise.",
          },
        ],
        tipsTitle: "Sina tip",
        tips: [
          "Choose a split pot on your first visit.",
          "Cook delicate items in the mild broth.",
          "Use stronger items with the deeper broth.",
        ],
      },
      es: {
        kicker: "Caldos y aromas",
        title: "El caldo define la cena",
        summary:
          "El caldo es la primera gran decision: picante, suave, aromatico o doble. Ayuda a que cada mesa encuentre su equilibrio.",
        highlights: [
          "Picante o suave",
          "Olla doble para gustos distintos",
          "Sabor que crece durante la comida",
        ],
        detailIntro:
          "El caldo no solo cocina. Da aroma a cada bocado y gana profundidad a medida que los ingredientes sueltan sabor.",
        sections: [
          {
            title: "Picante no significa solo fuerte",
            body: "Un buen caldo picante tiene calor, perfume y persistencia. Explicar niveles de picante ayuda a los nuevos clientes a sentirse comodos.",
          },
          {
            title: "El caldo suave es ideal para empezar",
            body: "Una base ligera permite apreciar verduras, tofu, setas y carnes finas. Funciona para familias, turistas y primeras visitas.",
          },
          {
            title: "La olla doble une la mesa",
            body: "Dos caldos en una misma olla permiten que amantes del picante y personas que prefieren sabores suaves coman juntas.",
          },
        ],
        tipsTitle: "Consejo Sina",
        tips: [
          "En la primera visita elige olla doble.",
          "Cocina ingredientes delicados en caldo suave.",
          "Usa ingredientes intensos con caldos mas profundos.",
        ],
      },
      fr: {
        kicker: "Bouillons et aromes",
        title: "Le bouillon donne le ton",
        summary:
          "Le bouillon est le premier grand choix: epice, doux, aromatique ou double. Il aide chaque table a trouver son equilibre.",
        highlights: [
          "Epice ou doux",
          "Marmite double pour preferences mixtes",
          "Saveur qui evolue pendant le repas",
        ],
        detailIntro:
          "Le bouillon ne sert pas seulement a cuire. Il parfume chaque bouchee et gagne en profondeur lorsque les ingredients liberent leurs saveurs.",
        sections: [
          {
            title: "Epice ne veut pas seulement dire fort",
            body: "Un bon bouillon epice apporte chaleur, parfum et longueur. Expliquer l’intensite aide les nouveaux clients a se sentir a l’aise.",
          },
          {
            title: "Le bouillon doux est ideal pour commencer",
            body: "Une base legere met en valeur legumes, tofu, champignons et viandes fines. Elle convient aux familles, touristes et premieres visites.",
          },
          {
            title: "La marmite double rassemble la table",
            body: "Deux bouillons dans une meme marmite permettent aux amateurs d’epices et aux clients preferant la douceur de partager le repas.",
          },
        ],
        tipsTitle: "Conseil Sina",
        tips: [
          "Pour une premiere visite, choisissez une marmite double.",
          "Cuisez les ingredients delicats dans le bouillon doux.",
          "Gardez les saveurs fortes pour le bouillon plus intense.",
        ],
      },
    },
  } as const satisfies CultureTopic;
