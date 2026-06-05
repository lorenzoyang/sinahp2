import type { LocaleCopy } from "./types";

export const esCopy = {
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
      reservation: "Reservar",
      privacy: "Política de privacidad",
      menu: "Menú",
    },
    cta: {
      reserve: "Reservar mesa",
      culture: "Cómo funciona el hotpot",
      call: "Llamar",
      map: "Abrir mapa",
      whatsapp: "WhatsApp",
      backHome: "Volver al inicio",
      learnMore: "Leer más",
      gallery: "Ver galería",
    },
    home: {
      eyebrow: "Hotpot chino para compartir en Toscana",
      title: "鲜入围煮 Sina Hotpot",
      intro:
        "Una olla humeante en el centro de la mesa, ingredientes frescos que se cocinan al momento y un ritmo relajado para amigos, familia y primeras visitas.",
      proof: [
        "Restaurantes en Prato y Firenze",
        "Fácil para la primera experiencia",
        "Reserva online o por WhatsApp",
      ],
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
      title: "Dos locales para una mesa cálida y compartida",
      intro:
        "Elige Prato para cenar hasta tarde, o Firenze para almorzar y cenar cerca del centro histórico. Escoge el local que encaje con tus planes y reúne a todos alrededor de la olla.",
      daily: "Abierto todos los días",
      phone: "Teléfono",
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
    },
    reservation: {
      eyebrow: "Reserva",
      title: "Reserva tu mesa de hotpot",
      intro:
        "Envíanos fecha, hora, número de personas y local preferido. Recibiremos la solicitud por email y podremos contactarte para confirmar los detalles.",
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
        name: "Tu nombre",
        phone: "+39 ...",
        location: "Selecciona una dirección",
        message: "Alergias, ocasión especial o preferencias de mesa",
      },
      hints: {
        time: "Selecciona primero una dirección.",
      },
      consentPrefix: "He leído la ",
      privacyLink: "política de privacidad",
      consentSuffix:
        " y consiento el uso de los datos introducidos para gestionar mi reserva, incluidas posibles notas sobre alergias o salud.",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      success: "Solicitud enviada.",
      error:
        "No hemos podido enviar la solicitud. Inténtalo de nuevo o contacta por WhatsApp.",
      missingKey:
        "Web3forms aún no está configurado. Define PUBLIC_WEB3FORMS_ACCESS_KEY antes del lanzamiento.",
      captchaRequired:
        "Completa la verificación anti-spam antes de enviar la solicitud.",
    },
    success: {
      title: "Solicitud recibida",
      intro:
        "Gracias. Tu solicitud ha sido enviada a Sina Hotpot. Para cambios urgentes o confirmación rápida, contacta directamente por WhatsApp.",
      next: "También puedes revisar dirección, horarios y ruta del local elegido.",
    },
    privacy: {
      title: "Política de privacidad",
      intro:
        "Este aviso explica cómo el sitio web de Sina Hotpot trata los datos personales recogidos a través del sitio y del formulario de reserva.",
      updated: "Última actualización: 5 de junio de 2026",
      sections: [
        {
          title: "Responsable del tratamiento",
          paragraphs: [
            "El responsable del tratamiento es RISTORANTE SINA HOTPOT S.R.L., con domicilio social en Via Cava 109, 59100 Prato (PO), P.IVA / C.F. / Registro Imprese Pistoia-Prato: 02455830972, a quien se puede contactar en sinahotpot@gmail.com. Este sitio se refiere a los locales operativos de Prato, Via Cava 109, 59100 Prato, y Florencia, Via Ghibellina 80R, 50122 Firenze.",
          ],
        },
        {
          title: "Datos recogidos",
          paragraphs: [
            "El formulario de reserva recoge nombre, teléfono, número de personas, fecha, hora, local elegido y notas opcionales. Los datos técnicos necesarios para la navegación, como dirección IP, información del navegador, fecha y hora de las solicitudes, pueden ser tratados por los servicios de alojamiento y seguridad.",
            "Las notas opcionales no son obligatorias. Si decides incluir alergias, necesidades alimentarias u otra información relacionada con la salud, esos datos se usarán solo para gestionar la reserva y organizar el servicio solicitado.",
          ],
        },
        {
          title: "Finalidades y bases jurídicas",
          paragraphs: [
            "Los datos se tratan para recibir y gestionar solicitudes de reserva, contactarte si es necesario, organizar el servicio en sala, mantener el sitio seguro y funcional y cumplir obligaciones administrativas o legales cuando corresponda.",
          ],
          items: [
            "Solicitudes de reserva: ejecución de medidas precontractuales o contractuales solicitadas por el usuario, art. 6(1)(b) RGPD.",
            "Datos técnicos, seguridad y prevención de spam: interés legítimo en operar y proteger el sitio, art. 6(1)(f) RGPD.",
            "Obligaciones administrativas o legales cuando correspondan: obligación legal, art. 6(1)(c) RGPD.",
            "Alergias o información relacionada con la salud introducida voluntariamente en las notas: consentimiento explícito para la finalidad específica de gestionar la reserva y el servicio, art. 9(2)(a) RGPD.",
          ],
        },
        {
          title: "Entrega de datos",
          paragraphs: [
            "Nombre, teléfono, número de personas, fecha, hora y local son necesarios para enviar una solicitud de reserva. Sin estos datos, Sina Hotpot puede no poder gestionar la solicitud. Las notas opcionales pueden dejarse vacías.",
          ],
        },
        {
          title: "Destinatarios y servicios de terceros",
          paragraphs: [
            "Los datos pueden ser tratados por personal autorizado de Sina Hotpot y por proveedores técnicos utilizados para publicar el sitio, proteger el servicio y reenviar las solicitudes de reserva.",
          ],
          items: [
            "Web3Forms: recibe los datos del formulario y los reenvía por email a Sina Hotpot.",
            "Cloudflare: proporciona alojamiento, distribución del sitio, seguridad y registros técnicos.",
            "Proveedor de email: recibe y conserva los emails de reserva en el buzón de Sina Hotpot.",
            "hCaptcha o herramientas anti-spam equivalentes: pueden activarse en el formulario para verificar que el envío procede de una persona y no de un bot.",
            "Google Maps, Instagram, Facebook y WhatsApp son enlaces externos. Sus servicios tratan datos solo si decides abrir esos enlaces o usar esas plataformas.",
          ],
        },
        {
          title: "Transferencias fuera del Espacio Económico Europeo",
          paragraphs: [
            "Algunos proveedores técnicos, incluidos servicios de alojamiento, seguridad, formularios, email o anti-spam, pueden tratar datos fuera del Espacio Económico Europeo. En esos casos, el tratamiento debe basarse en las garantías disponibles de los proveedores, como decisiones de adecuación, Data Privacy Framework, cláusulas contractuales tipo o medidas equivalentes cuando sean aplicables.",
          ],
        },
        {
          title: "Conservación",
          paragraphs: [
            "Las solicitudes de reserva se conservan durante el tiempo necesario para gestionar la reserva y normalmente no más de 12 meses desde la fecha de la solicitud, salvo que sea necesaria una conservación más larga por obligaciones legales, seguridad, prevención de abusos o reclamaciones.",
            "Los registros técnicos y anti-spam se conservan según la configuración y los plazos de los proveedores correspondientes. Web3Forms declara que no almacena las solicitudes del formulario y que elimina periódicamente los posibles registros técnicos.",
          ],
        },
        {
          title: "Cookies y herramientas de seguimiento",
          paragraphs: [
            "El sitio no usa cookies de perfilado, cookies publicitarias ni cookies de analítica mediante su propio código. Por este motivo no se muestra un banner de consentimiento de cookies.",
            "Pueden utilizarse herramientas técnicas estrictamente necesarias para la navegación, seguridad, reenvío del formulario y prevención de spam. Si en el futuro se introducen analítica, píxeles publicitarios, mapas incrustados, widgets sociales u otras herramientas no técnicas, este aviso y el mecanismo de consentimiento deberán actualizarse antes de la activación.",
          ],
        },
        {
          title: "Tus derechos",
          paragraphs: [
            "Puedes solicitar acceso, rectificación, supresión, limitación, portabilidad de los datos, oposición al tratamiento cuando corresponda y retirada del consentimiento para los datos tratados sobre la base del consentimiento. La retirada no afecta a la licitud del tratamiento realizado antes de la retirada.",
            "Puedes ejercer tus derechos escribiendo a sinahotpot@gmail.com. También tienes derecho a presentar una reclamación ante la Autoridad italiana de protección de datos, www.garanteprivacy.it.",
          ],
        },
        {
          title: "Decisiones automatizadas",
          paragraphs: [
            "El sitio no realiza perfilado ni decisiones automatizadas que produzcan efectos jurídicos o efectos igualmente significativos para los usuarios.",
          ],
        },
      ],
    },
  } as const satisfies LocaleCopy;
