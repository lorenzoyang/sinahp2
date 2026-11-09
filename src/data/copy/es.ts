import type { LocaleCopy } from "./types";

export const esCopy = {
    archive: {
      "label": "Demo histórica",
      "notice": "Esta es una demo del sitio anterior. No acepta reservas reales y la información del restaurante puede estar desactualizada.",
      "currentWebsite": "Sitio oficial actual",
      "sourceCode": "Código fuente",
      "historicalContact": "Contactos históricos",
      "formNotice": "Solo demostración: usa datos ficticios. Este formulario no envía datos ni crea reservas reales.",
      "javascriptRequired": "La simulación necesita JavaScript. El formulario permanece desactivado hasta que el script esté listo.",
      "dataNotice": "Los datos permanecen en esta página y se borran al salir. No se envían ni se guardan."
    },
    meta: {
      homeTitle: "鲜入围煮 Sina Hotpot | Hotpot chino en Prato y Firenze",
      description:
        "En Prato y Firenze, Sina Hotpot lleva a la mesa caldos aromáticos, ingredientes frescos y el placer compartido del hotpot chino.",
    },
    layout: {
      skipToContent: "Saltar al contenido",
      contact: "Contacto",
      social: "Social",
    },
    a11y: {
      primaryNavigation: "Navegación principal",
      languageMenu: "Elegir idioma",
      mobileNavigation: "Navegación móvil",
      restaurantPhotos: "Fotos del restaurante de {city}",
      photoSlides: "Fotos de {city}",
      photoNavigation: "Navegación de fotos de {city}",
      photoLabel: "{city}, foto {number}",
      carousel: "carrusel",
    },
    nav: {
      home: "Inicio",
      culture: "Descubrir hotpot",
      locations: "Locales",
      gallery: "Galería",
      reservation: "Demo de reserva",
      privacy: "Política de privacidad",
      menu: "Menú",
    },
    cta: {
      reserve: "Simular una reserva",
      culture: "Cómo funciona el hotpot",
      map: "Abrir mapa",
      viewDetails: "Ver detalles",
      backHome: "Volver al inicio",
      learnMore: "Leer más",
      gallery: "Ver galería",
    },
    home: {
      eyebrow: "Hotpot chino para compartir en Toscana",
      title: "鲜入围煮 Sina Hotpot",
      intro:
        "Una olla humeante en el centro de la mesa, ingredientes frescos que se cocinan al momento y un ritmo relajado para amigos, familia y primeras visitas.",
      sections: {
        ritualTitle: "Un ritual simple para compartir",
        ritualIntro:
          "Elige el caldo, cocina pocos ingredientes cada vez y termina cada bocado con tu salsa.",
        locationsTitle: "Reserva en Prato o Firenze",
        locationsIntro:
          "Prato es ideal para cenar hasta tarde; Firenze para almorzar o cenar cerca del centro histórico.",
        premiumTitle: "La mesa Sina",
      },
      steps: [
        [
          "Elige el caldo",
          "Suave, picante o doble: una buena base hace que todos se sientan cómodos.",
        ],
        [
          "Añade ingredientes",
          "Carnes finas, verduras, setas y tofu llegan listos para cocinar en la mesa.",
        ],
        [
          "Cocina al momento",
          "Añade poco a poco, espera la textura justa y prueba cuando sube el aroma.",
        ],
        [
          "Comparte el ritmo",
          "La olla al centro mantiene viva la conversación, las elecciones y el sabor.",
        ],
      ],
    },
    culture: {
      eyebrow: "Guía del hotpot chino",
      title: "Descubre el hotpot, una cena que se cocina juntos",
      intro:
        "El hotpot es una tradición china pensada para compartir: el caldo se mantiene caliente en el centro, los ingredientes se cocinan en la mesa y cada persona crea su propio recorrido de sabores.",
      blocks: [
        [
          "ritual",
          "La mesa cobra vida",
          "En lugar de recibir un plato terminado, la mesa elige, cocina, prueba y conversa.",
        ],
        [
          "ingredients",
          "Cada bocado puede ser personal",
          "Caldo, picante, ingredientes y salsa ayudan a cada invitado a encontrar su equilibrio.",
        ],
        [
          "basics",
          "Fácil de empezar",
          "Puedes comenzar con ingredientes familiares y descubrir sabores chinos a tu ritmo.",
        ],
      ],
      whyTitle: "Por qué probarlo",
      whyItems: [
        "Es social: la cena avanza con pequeños bocados, decisiones y conversación.",
        "Es flexible: cada persona ajusta picante, salsa, ingredientes y tiempos.",
        "Es memorable: vapor, aroma, color y compartir convierten la cena en una ocasión.",
      ],
      etiquetteTitle: "Consejos simples",
      etiquette: [
        "Empieza con ingredientes delicados antes de pasar a sabores más intensos.",
        "Ajusta la salsa poco a poco para equilibrar picante, frescor, salado y aroma.",
        "Indica alergias o necesidades especiales en la nota de reserva para que podamos prepararnos.",
      ],
    },
    locations: {
      eyebrow: "Prato y Firenze",
      title: "Elige un restaurante",
      intro:
        "Selecciona uno de nuestros restaurantes para reservar, encontrar la dirección o contactarnos directamente.",
      daily: "Abierto todos los días",
      phone: "Teléfono",
      wechat: "WeChat",
      address: "Dirección",
      hours: "Horario",
    },
    gallery: {
      eyebrow: "Galería",
      title: "Mira lo que llega a la mesa",
      intro:
        "Explora platos, ingredientes, chefs con ingredientes frescos, postres y bebidas: una muestra visual de la mesa Sina Hotpot antes de reservar.",
      categories: {
        dishes: "Platos preparados",
        ingredients: "Ingredientes",
        refreshments: "Postres y bebidas",
        chefs: "Chefs e ingredientes",
      },
      video: {
        eyebrow: "Vídeo",
        title: "La mesa de hotpot en movimiento",
        intro:
          "Un recorrido rápido por la mesa: caldos hirviendo, ternera marmoleada en lonchas finas, verduras frescas y platos que llegan uno tras otro.",
        play: "Reproducir el vídeo",
        pause: "Pausar el vídeo",
        mute: "Silenciar el vídeo",
        unmute: "Activar el sonido",
      },
    },
    reservation: {
      eyebrow: "Demo de reserva",
      title: "Prueba una reserva simulada",
      intro:
        "Explora el formulario original con datos ficticios. La simulación funciona solo en el navegador y no envía solicitudes al restaurante.",
      labels: {
        name: "Nombre",
        phone: "Teléfono",
        guests: "Personas",
        date: "Fecha",
        time: "Hora",
        location: "Local",
        message: "Nota opcional",
      },
      placeholders: {
        name: "Visitante de ejemplo",
        phone: "+39 000 000 0000",
        location: "Selecciona una dirección",
        message: "Nota de ejemplo: no introduzcas datos personales ni de salud",
      },
      hints: {
        time: "Selecciona primero una dirección.",
      },
      consentPrefix: "He leído la ",
      privacyLink: "política de privacidad",
      consentSuffix:
        " y entiendo que es solo una simulación, sin reserva real.",
      submit: "Simular una reserva",
    },
    success: {
      "title": "Demo completada",
      "intro": "No se ha enviado ninguna reserva. Los datos del formulario no se han transmitido ni guardado.",
      "next": "Para una reserva real, visita el sitio oficial actual del restaurante."
    },
    privacy: {
      "title": "Privacidad de la demo",
      "intro": "Este aviso corresponde a la demo histórica, no al sitio actual del restaurante.",
      "updated": "Actualización: 9 de noviembre de 2026",
      "sections": [
        {
          "title": "Proyecto histórico",
          "paragraphs": [
            "Este sitio conserva el proyecto anterior como ejemplo de portfolio. No es el sitio actual del restaurante ni gestiona reservas. Direcciones, horarios y contactos son información histórica que puede estar desactualizada."
          ]
        },
        {
          "title": "Formulario simulado",
          "paragraphs": [
            "Usa solo datos ficticios. Los campos y la validación funcionan en el navegador. No enviamos los valores a servidores, correo ni servicios de reservas, ni los incluimos en URL, registros o almacenamiento del navegador. El formulario se vacía al salir de la página."
          ]
        },
        {
          "title": "Cookies y seguimiento",
          "paragraphs": [
            "La demo no carga Google Ads, rastreadores publicitarios ni servicios CAPTCHA externos. El código del proyecto no establece cookies publicitarias ni guarda preferencias de seguimiento."
          ]
        },
        {
          "title": "Alojamiento y enlaces externos",
          "paragraphs": [
            "Cloudflare proporciona alojamiento, distribución y seguridad y puede tratar información técnica de las solicitudes, como direcciones IP y registros de acceso, según sus ajustes y políticas. Los enlaces al sitio actual, GitHub, mapas y redes sociales abren servicios externos sujetos a sus propias políticas de privacidad. Esta demo no controla sus tratamientos ni plazos de conservación."
          ]
        }
      ]
    },
  } as const satisfies LocaleCopy;
