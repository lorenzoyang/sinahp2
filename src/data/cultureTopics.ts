import {
  cultureTopicIds,
  images,
  type CultureTopicId,
  type Locale,
} from "./site";

type TopicContent = {
  kicker: string;
  title: string;
  summary: string;
  highlights: readonly string[];
  detailIntro: string;
  sections: readonly { title: string; body: string }[];
  tipsTitle: string;
  tips: readonly string[];
};

export const cultureTopics = {
  basics: {
    image: images.culture,
    content: {
      it: {
        kicker: "Le basi",
        title: "Hotpot: una tavola condivisa",
        summary:
          "Capire l’hotpot significa capire perche il pasto nasce al centro del tavolo: il brodo resta caldo, gli ingredienti arrivano freschi e ogni ospite costruisce il proprio percorso.",
        highlights: [
          "Brodo sempre caldo",
          "Ingredienti cotti al momento",
          "Esperienza lenta e conviviale",
        ],
        detailIntro:
          "L’hotpot e una forma di cucina sociale. Non si ordina un piatto finito: si sceglie una base, si condividono ingredienti e si cucina direttamente al tavolo.",
        sections: [
          {
            title: "Non e una zuppa servita gia pronta",
            body: "Il brodo e il cuore dell’esperienza, ma non e il piatto finale. Funziona come una base aromatica in cui carne, verdure, tofu, funghi e specialita vengono cotti in tempi diversi.",
          },
          {
            title: "Il tavolo diventa parte del servizio",
            body: "La pentola calda crea un ritmo naturale: si sceglie, si cuoce, si assaggia e si torna a parlare. Per questo l’hotpot e molto adatto a gruppi, coppie e prime esperienze culturali.",
          },
          {
            title: "Perche piace a chi lo prova per la prima volta",
            body: "Il cliente non deve conoscere tutti i piatti cinesi. Puo partire da ingredienti familiari, regolare il piccante e scoprire gradualmente sapori piu intensi.",
          },
        ],
        tipsTitle: "Da ricordare",
        tips: [
          "La cena procede a piccoli assaggi.",
          "Il brodo cambia sapore durante il pasto.",
          "Condividere e parte dell’esperienza.",
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
        kicker: "Lo basico",
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
            title: "Por que funciona para nuevos clientes",
            body: "Se puede empezar con ingredientes familiares, elegir un caldo suave y ajustar el picante poco a poco. Es facil entrar y dificil olvidar.",
          },
        ],
        tipsTitle: "Para recordar",
        tips: [
          "La comida avanza en pequenos bocados.",
          "El caldo gana sabor durante la cena.",
          "Compartir es parte del placer.",
        ],
      },
      fr: {
        kicker: "Les bases",
        title: "Le hotpot comme table partagee",
        summary:
          "Pour comprendre le hotpot, il faut partir de la marmite au centre: le bouillon reste chaud, les ingredients arrivent frais et chacun compose son repas.",
        highlights: [
          "Bouillon toujours chaud",
          "Ingredients cuits a table",
          "Rythme convivial et flexible",
        ],
        detailIntro:
          "Le hotpot est un repas participatif. Au lieu de recevoir un plat termine, les invites choisissent un bouillon, partagent les ingredients et cuisent a table.",
        sections: [
          {
            title: "Ce n’est pas une soupe deja servie",
            body: "Le bouillon est la base, pas tout le plat. Il apporte chaleur et parfum pendant que viande, legumes, tofu, champignons, fruits de mer et specialites cuisent au moment.",
          },
          {
            title: "La table fait partie du service",
            body: "Le hotpot cree un rythme naturel: choisir, cuire, gouter, discuter et recommencer. Il convient aux groupes, couples, familles et premieres decouvertes.",
          },
          {
            title: "Pourquoi les nouveaux clients l’aiment",
            body: "On peut commencer avec des ingredients familiers, choisir un bouillon doux et ajuster les epices peu a peu. L’experience est accessible et memorable.",
          },
        ],
        tipsTitle: "A retenir",
        tips: [
          "Le repas avance par petites bouchees.",
          "Le bouillon gagne en profondeur.",
          "Partager fait partie du plaisir.",
        ],
      },
    },
  },
  broths: {
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
  },
  ingredients: {
    image: images.ingredients,
    content: {
      it: {
        kicker: "Ingredienti e salse",
        title: "Freschezza, tagli sottili e salsa personale",
        summary:
          "La qualita dell’hotpot si vede negli ingredienti: tagli sottili, verdure fresche, funghi, tofu e salse che trasformano ogni boccone.",
        highlights: [
          "Carni tagliate sottili",
          "Verdure e funghi per equilibrio",
          "Salse personalizzabili",
        ],
        detailIntro:
          "Gli ingredienti non hanno tutti lo stesso ruolo. Alcuni cuociono in pochi secondi, altri arricchiscono il brodo e altri ancora servono a bilanciare consistenza e freschezza.",
        sections: [
          {
            title: "La carne sottile cuoce velocemente",
            body: "Fette sottili di manzo o altri tagli premium vanno immerse per poco tempo. Restano morbide e assorbono il profumo del brodo senza perdere succosita.",
          },
          {
            title: "Verdure, funghi e tofu creano equilibrio",
            body: "Dopo sapori intensi, ingredienti vegetali e tofu riportano freschezza. Funghi e verdure aggiungono dolcezza naturale e rendono il brodo piu rotondo.",
          },
          {
            title: "La salsa e la firma personale",
            body: "Ogni ospite puo combinare elementi sapidi, freschi, piccanti o aromatici. Questo rende lo stesso tavolo diverso per ogni persona.",
          },
        ],
        tipsTitle: "Ordine consigliato",
        tips: [
          "Inizia da verdure e tofu.",
          "Cuoci la carne solo per il tempo necessario.",
          "Regola la salsa a piccoli passaggi.",
        ],
      },
      zh: {
        kicker: "食材与蘸料",
        title: "新鲜食材、薄切肉片和专属蘸料",
        summary:
          "火锅品质往往体现在食材上：薄切肉类、新鲜蔬菜、菌菇、豆制品和自由搭配的蘸料，会让每一口都有变化。",
        highlights: ["肉片薄切易熟", "蔬菜菌菇平衡味道", "蘸料体现个人口味"],
        detailIntro:
          "火锅食材并不是简单放进锅里。不同食材有不同作用：有些快速成熟，有些增加汤底鲜味，有些提供清爽和平衡。",
        sections: [
          {
            title: "薄切肉片需要短时间涮煮",
            body: "优质牛肉或其他肉类切得越薄，越能在短时间内达到柔嫩口感。时间过长会影响质地，适度涮煮才能保留鲜嫩。",
          },
          {
            title: "蔬菜、菌菇和豆腐负责平衡",
            body: "在浓郁味道之后，蔬菜和豆腐能带来清爽感。菌菇和叶菜还会给汤底增加自然鲜甜。",
          },
          {
            title: "蘸料是个人风味签名",
            body: "同样的食材搭配不同蘸料，会变成完全不同的味道。客人可以通过咸、辣、鲜、香的比例找到自己的口味。",
          },
        ],
        tipsTitle: "推荐顺序",
        tips: [
          "先从蔬菜和豆腐开始。",
          "肉类只涮到刚好成熟。",
          "蘸料少量多次调整。",
        ],
      },
      en: {
        kicker: "Ingredients and sauces",
        title: "Fresh ingredients and a personal sauce",
        summary:
          "Hotpot quality shows in the ingredients: thin-sliced meats, fresh vegetables, mushrooms, tofu, and sauces that change each bite.",
        highlights: [
          "Thin cuts cook quickly",
          "Vegetables and mushrooms bring balance",
          "Sauces personalize the meal",
        ],
        detailIntro:
          "Ingredients have different roles. Some cook in seconds, some enrich the broth, and others bring freshness, texture, or contrast.",
        sections: [
          {
            title: "Thin-sliced meat cooks fast",
            body: "Premium beef or other thin cuts need only a short dip. They stay tender and absorb the broth aroma without losing juiciness.",
          },
          {
            title: "Vegetables, mushrooms, and tofu balance the table",
            body: "After rich flavors, vegetables and tofu bring freshness. Mushrooms and greens also add natural sweetness and make the broth rounder.",
          },
          {
            title: "Sauce is your personal signature",
            body: "The same ingredient can taste different with a new sauce. Guests can balance savory, spicy, fresh, and aromatic notes to fit their taste.",
          },
        ],
        tipsTitle: "Suggested order",
        tips: [
          "Start with vegetables and tofu.",
          "Cook meat only as long as needed.",
          "Adjust sauce in small steps.",
        ],
      },
      es: {
        kicker: "Ingredientes y salsas",
        title: "Frescura, cortes finos y salsa personal",
        summary:
          "La calidad del hotpot se nota en los ingredientes: carnes finas, verduras frescas, setas, tofu y salsas que cambian cada bocado.",
        highlights: [
          "Cortes finos que cocinan rapido",
          "Verduras y setas para equilibrio",
          "Salsas personalizadas",
        ],
        detailIntro:
          "Los ingredientes cumplen papeles distintos. Algunos cocinan en segundos, otros enriquecen el caldo y otros aportan frescura o textura.",
        sections: [
          {
            title: "La carne fina cocina rapido",
            body: "El buey premium u otros cortes finos necesitan poco tiempo. Quedan tiernos y absorben el aroma del caldo sin perder jugosidad.",
          },
          {
            title: "Verduras, setas y tofu equilibran",
            body: "Despues de sabores intensos, verduras y tofu aportan frescura. Setas y hojas verdes tambien dan dulzor natural al caldo.",
          },
          {
            title: "La salsa es tu firma personal",
            body: "El mismo ingrediente cambia con otra salsa. Cada persona puede equilibrar notas saladas, picantes, frescas y aromaticas.",
          },
        ],
        tipsTitle: "Orden sugerido",
        tips: [
          "Empieza con verduras y tofu.",
          "Cocina la carne solo lo necesario.",
          "Ajusta la salsa poco a poco.",
        ],
      },
      fr: {
        kicker: "Ingredients et sauces",
        title: "Fraicheur, fines tranches et sauce personnelle",
        summary:
          "La qualite du hotpot se voit dans les ingredients: viandes fines, legumes frais, champignons, tofu et sauces qui transforment chaque bouchee.",
        highlights: [
          "Fines tranches rapides a cuire",
          "Legumes et champignons pour l’equilibre",
          "Sauces personnalisables",
        ],
        detailIntro:
          "Les ingredients n’ont pas tous le meme role. Certains cuisent en secondes, d’autres enrichissent le bouillon et d’autres apportent fraicheur ou texture.",
        sections: [
          {
            title: "La viande fine cuit vite",
            body: "Le boeuf premium ou d’autres fines tranches demandent peu de temps. Elles restent tendres et absorbent le parfum du bouillon.",
          },
          {
            title: "Legumes, champignons et tofu equilibrent",
            body: "Apres des saveurs intenses, legumes et tofu apportent de la fraicheur. Champignons et verdures ajoutent aussi une douceur naturelle.",
          },
          {
            title: "La sauce est une signature personnelle",
            body: "Le meme ingredient change avec une sauce differente. Chaque invite peut equilibrer notes salees, epicees, fraiches et aromatiques.",
          },
        ],
        tipsTitle: "Ordre conseille",
        tips: [
          "Commencez par legumes et tofu.",
          "Cuisez la viande juste le temps necessaire.",
          "Ajustez la sauce progressivement.",
        ],
      },
    },
  },
  ritual: {
    image: images.table,
    content: {
      it: {
        kicker: "Come si mangia",
        title: "Un ritmo semplice per godersi l’hotpot",
        summary:
          "Per chi non lo conosce, l’hotpot diventa facile quando il percorso e chiaro: scegliere, cuocere, assaggiare e condividere.",
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
            title: "Assaggiare e correggere e parte del gioco",
            body: "Dopo i primi bocconi, il cliente puo regolare salsa, piccantezza e ordine degli ingredienti. L’esperienza diventa personale senza perdere eleganza.",
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
        kicker: "Como se come",
        title: "Un ritmo simple para la primera visita",
        summary:
          "El hotpot es facil cuando el recorrido esta claro: elegir, cocinar, probar y compartir.",
        highlights: [
          "Pasos faciles",
          "Ritmo de coccion claro",
          "Perfecto para grupos",
        ],
        detailIntro:
          "La primera visita debe sentirse guiada, no complicada. Unos pasos simples ayudan a entrar con confianza.",
        sections: [
          {
            title: "Elegir juntos crea expectativa",
            body: "La mesa empieza eligiendo caldo, ingredientes y salsas. Tambien muestra que no hay una unica forma correcta de disfrutar el hotpot.",
          },
          {
            title: "Cocinar poco a poco",
            body: "Poner demasiados ingredientes a la vez dificulta tiempos y sabores. Las porciones pequenas mantienen el caldo limpio y el ritmo agradable.",
          },
          {
            title: "Probar y ajustar",
            body: "Despues de los primeros bocados se puede ajustar salsa, picante y orden de ingredientes. La comida se vuelve personal.",
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
        title: "Un rythme simple pour une premiere visite",
        summary:
          "Le hotpot devient facile lorsque le parcours est clair: choisir, cuire, gouter et partager.",
        highlights: [
          "Etapes simples",
          "Rythme de cuisson clair",
          "Ideal pour les groupes",
        ],
        detailIntro:
          "Une premiere visite doit etre guidee, pas compliquee. Quelques etapes suffisent pour entrer dans l’experience.",
        sections: [
          {
            title: "Choisir ensemble cree l’attente",
            body: "La table commence par choisir bouillon, ingredients et sauces. Cela montre aussi qu’il n’existe pas une seule bonne facon de profiter du hotpot.",
          },
          {
            title: "Cuire par petites quantites",
            body: "Mettre trop d’ingredients a la fois complique les temps et les saveurs. Les petites quantites gardent le bouillon clair et le rythme agreable.",
          },
          {
            title: "Gouter et ajuster",
            body: "Apres les premieres bouchees, chacun peut ajuster sauce, epices et ordre des ingredients. Le repas devient personnel.",
          },
        ],
        tipsTitle: "Parcours conseille",
        tips: [
          "Choisissez bouillon et sauce.",
          "Cuisez quelques ingredients a la fois.",
          "Alternez saveurs riches et fraiches.",
        ],
      },
    },
  },
  etiquette: {
    image: images.platter,
    content: {
      it: {
        kicker: "Consigli pratici",
        title: "Etichetta, allergie e comfort al tavolo",
        summary:
          "L’hotpot e informale, ma qualche regola semplice rende la cena piu elegante, sicura e piacevole per tutti.",
        highlights: [
          "Condivisione rispettosa",
          "Attenzione ad allergie e preferenze",
          "Comfort per turisti e nuovi ospiti",
        ],
        detailIntro:
          "Un’esperienza premium non dipende solo dal cibo. Dipende anche da chiarezza, comfort e attenzione alle esigenze individuali.",
        sections: [
          {
            title: "Condividere senza confondere",
            body: "Usare utensili separati quando necessario e non lasciare ingredienti troppo a lungo nel brodo aiuta il tavolo a restare ordinato e piacevole.",
          },
          {
            title: "Allergie e preferenze vanno comunicate prima",
            body: "Il modulo di prenotazione include note opzionali proprio per allergie, esigenze alimentari o occasioni speciali. Segnalarle in anticipo rende il servizio piu attento.",
          },
          {
            title: "Il personale puo guidare la prima esperienza",
            body: "Per clienti italiani o turisti, una breve spiegazione su brodo, tempi e salsa trasforma la curiosita in fiducia.",
          },
        ],
        tipsTitle: "Prima di arrivare",
        tips: [
          "Indica allergie nella prenotazione.",
          "Scegli Prato o Firenze in base agli orari.",
          "Per dubbi urgenti usa WhatsApp.",
        ],
      },
      zh: {
        kicker: "实用建议",
        title: "礼仪、过敏说明与舒适体验",
        summary:
          "火锅氛围轻松，但一些简单规则能让整桌体验更高级、更安全，也更适合第一次尝试的外国客人。",
        highlights: [
          "尊重共享节奏",
          "提前说明过敏与偏好",
          "让游客和新客人更安心",
        ],
        detailIntro:
          "高端体验不只来自食物，也来自清晰说明、舒适服务和对个人需求的重视。",
        sections: [
          {
            title: "共享但不混乱",
            body: "必要时使用公筷或单独夹具，不把食材长时间留在锅里，能让桌面和汤底都保持更好的状态。",
          },
          {
            title: "过敏和特殊偏好应提前说明",
            body: "预约表单中的可选说明就是为过敏、饮食限制或特殊场合准备的。提前填写可以帮助门店更好安排服务。",
          },
          {
            title: "服务说明能降低陌生感",
            body: "对于意大利本地客人和游客，简单解释锅底、涮煮时间和蘸料搭配，会让他们从好奇变得更有信心。",
          },
        ],
        tipsTitle: "到店前建议",
        tips: [
          "预约时注明过敏情况。",
          "根据营业时间选择 Prato 或 Firenze。",
          "紧急问题可使用 WhatsApp。",
        ],
      },
      en: {
        kicker: "Practical guidance",
        title: "Etiquette, allergies, and comfort",
        summary:
          "Hotpot is relaxed, but a few simple habits make the table more elegant, safe, and comfortable for everyone.",
        highlights: [
          "Respectful sharing",
          "Allergy and preference notes",
          "Comfort for tourists and first-timers",
        ],
        detailIntro:
          "A premium experience depends on more than food. It also depends on clarity, comfort, and attention to individual needs.",
        sections: [
          {
            title: "Share without confusion",
            body: "Use separate utensils when needed and avoid leaving ingredients in the broth too long. This keeps the table orderly and the broth pleasant.",
          },
          {
            title: "Mention allergies and preferences early",
            body: "The reservation form includes an optional note for allergies, dietary needs, or special occasions. Sharing this early helps the restaurant prepare.",
          },
          {
            title: "Guidance builds confidence",
            body: "For Italian guests and tourists, a short explanation of broth, timing, and sauces turns curiosity into confidence.",
          },
        ],
        tipsTitle: "Before you arrive",
        tips: [
          "Mention allergies in the reservation.",
          "Choose Prato or Florence based on hours.",
          "Use WhatsApp for urgent questions.",
        ],
      },
      es: {
        kicker: "Consejos practicos",
        title: "Etiqueta, alergias y comodidad",
        summary:
          "El hotpot es relajado, pero unos habitos simples hacen que la mesa sea mas elegante, segura y comoda.",
        highlights: [
          "Compartir con respeto",
          "Notas de alergias y preferencias",
          "Comodidad para turistas y principiantes",
        ],
        detailIntro:
          "Una experiencia premium depende de algo mas que la comida: claridad, comodidad y atencion a necesidades individuales.",
        sections: [
          {
            title: "Compartir sin confusion",
            body: "Usar utensilios separados cuando sea necesario y no dejar ingredientes demasiado tiempo mantiene la mesa ordenada y el caldo agradable.",
          },
          {
            title: "Comunica alergias y preferencias antes",
            body: "El formulario de reserva incluye una nota opcional para alergias, necesidades alimentarias u ocasiones especiales. Avisar antes ayuda al restaurante.",
          },
          {
            title: "La guia del personal da confianza",
            body: "Para clientes italianos y turistas, una breve explicacion sobre caldo, tiempos y salsas convierte la curiosidad en confianza.",
          },
        ],
        tipsTitle: "Antes de llegar",
        tips: [
          "Indica alergias en la reserva.",
          "Elige Prato o Florencia segun horarios.",
          "Usa WhatsApp para dudas urgentes.",
        ],
      },
      fr: {
        kicker: "Conseils pratiques",
        title: "Etiquette, allergies et confort",
        summary:
          "Le hotpot est detendu, mais quelques habitudes simples rendent la table plus elegante, sure et confortable.",
        highlights: [
          "Partage respectueux",
          "Notes allergies et preferences",
          "Confort pour touristes et debutants",
        ],
        detailIntro:
          "Une experience premium depend de plus que la cuisine: clarte, confort et attention aux besoins individuels.",
        sections: [
          {
            title: "Partager sans confusion",
            body: "Utiliser des ustensiles separes si necessaire et eviter de laisser les ingredients trop longtemps garde la table ordonnee et le bouillon agreable.",
          },
          {
            title: "Signaler allergies et preferences tot",
            body: "Le formulaire de reservation inclut une note optionnelle pour allergies, besoins alimentaires ou occasions speciales. L’indiquer aide le restaurant.",
          },
          {
            title: "L’explication du personnel rassure",
            body: "Pour les clients italiens et touristes, une breve explication du bouillon, des temps et des sauces transforme la curiosite en confiance.",
          },
        ],
        tipsTitle: "Avant votre arrivee",
        tips: [
          "Indiquez les allergies dans la reservation.",
          "Choisissez Prato ou Florence selon les horaires.",
          "Utilisez WhatsApp pour les questions urgentes.",
        ],
      },
    },
  },
} as const satisfies Record<
  CultureTopicId,
  { image: string; content: Record<Locale, TopicContent> }
>;

export function getCultureTopicCards(locale: Locale) {
  return cultureTopicIds.map((topicId) => ({
    id: topicId,
    image: getCultureTopic(topicId).image,
    ...getCultureTopicContent(locale, topicId),
  }));
}

export function getCultureTopic(topicId: CultureTopicId) {
  return cultureTopics[topicId];
}

export function getCultureTopicContent(
  locale: Locale,
  topicId: CultureTopicId,
) {
  return getCultureTopic(topicId).content[locale];
}

export function getRelatedCultureTopics(
  locale: Locale,
  currentTopicId: CultureTopicId,
  limit = 3,
) {
  return cultureTopicIds
    .filter((topicId) => topicId !== currentTopicId)
    .slice(0, limit)
    .map((topicId) => ({
      id: topicId,
      ...getCultureTopicContent(locale, topicId),
    }));
}
