import type { LocaleCopy } from "./types";

export const esCopy = {
    meta: {
      homeTitle: "Sina Hotpot | Hotpot premium en Prato y Florencia",
      description:
        "Sina Hotpot ofrece hotpot chino premium en Toscana con ingredientes seleccionados, caldos aromáticos y restaurantes en Prato y Florencia.",
    },
    layout: {
      skipToContent: "Saltar al contenido",
      contact: "Contacto",
      social: "Social",
    },
    nav: {
      home: "Inicio",
      culture: "Qué es hotpot",
      locations: "Locales",
      gallery: "Galería",
      reservation: "Reservar",
      privacy: "Política de privacidad",
      menu: "Menú",
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
      eyebrow: "Hotpot chino en Toscana",
      title: "鲜入围煮 Sina Hotpot",
      intro:
        "Caldos aromáticos, ingredientes frescos y cocción en la mesa: reserva en Prato o Florencia y descubre el hotpot sin complicaciones.",
      proof: [
        "Prato y Florencia",
        "Fácil para la primera vez",
        "Reserva online rápida",
      ],
      sections: {
        ritualTitle: "Cómo funciona",
        ritualIntro:
          "Elige, cocina y comparte: bastan pocos pasos para empezar.",
        locationsTitle: "Prato o Florencia",
        locationsIntro:
          "Elige el local más cómodo y reserva en pocos clics.",
        premiumTitle: "Por qué elegir Sina",
      },
      steps: [
        ["Elige el caldo", "Picante, suave o doble: es la base de tu mesa."],
        [
          "Pide ingredientes",
          "Carne, verduras, setas y tofu llegan listos para cocinar.",
        ],
        ["Cocina en la mesa", "Sumerge, espera unos segundos y prueba a tu ritmo."],
        [
          "Comparte",
          "La olla al centro hace que la cena sea natural y social.",
        ],
      ],
    },
    culture: {
      eyebrow: "Guía para la primera vez",
      title: "¿Qué es el hotpot?",
      intro:
        "El hotpot es una tradición china en la que el caldo se mantiene caliente en el centro de la mesa. Los invitados cocinan ingredientes frescos, mezclan salsas y crean su propio recorrido de sabores.",
      blocks: [
        [
          "ritual",
          "Una cena participativa",
          "La comida se termina juntos en la mesa y la conversación fluye naturalmente.",
        ],
        [
          "ingredients",
          "Sabores personales",
          "Caldo, picante, ingredientes y salsa se adaptan a cada persona.",
        ],
        [
          "basics",
          "Cultura para compartir",
          "Es una manera accesible de descubrir la cocina china más allá de los platos conocidos.",
        ],
      ],
      whyTitle: "Por qué probarlo",
      whyItems: [
        "Es social: la mesa está activa durante toda la cena.",
        "Es flexible: cada persona elige ritmo y sabor.",
        "Es memorable: vapor, aromas, colores y compartir crean una ocasión especial.",
      ],
      etiquetteTitle: "Consejos simples",
      etiquette: [
        "Empieza por ingredientes delicados antes de sabores más intensos.",
        "Usa las salsas para equilibrar picante, frescor y sabor.",
        "Indica alergias o necesidades especiales en la nota de reserva.",
      ],
    },
    locations: {
      eyebrow: "Prato y Florencia",
      title: "Dos locales para tu próxima noche de hotpot",
      intro:
        "Elige Prato para cenar hasta tarde o Florencia para almuerzo y cena cerca del centro histórico.",
      daily: "Abierto todos los días",
      phone: "Teléfono",
      address: "Dirección",
      hours: "Horario",
    },
    gallery: {
      eyebrow: "Galería",
      title: "Sina Hotpot de cerca",
      intro:
        "Explora platos listos para comer, materias primas, postres y bebidas de los restaurantes.",
      categories: {
        dishes: "Platos listos",
        ingredients: "Materias primas",
        refreshments: "Postres y bebidas",
      },
    },
    reservation: {
      eyebrow: "Solicitud de reserva",
      title: "Reserva tu mesa",
      intro:
        "Envía los datos principales y el responsable del restaurante recibirá tu solicitud por email.",
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
        message: "Alergias, ocasiones especiales u otras peticiones",
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
        "Gracias. Tu solicitud ha sido enviada a Sina Hotpot. Para cambios urgentes, contacta directamente por WhatsApp.",
      next: "También puedes revisar dirección, horarios y ruta del local elegido.",
    },
    privacy: {
      title: "Política de privacidad",
      intro:
        "Este aviso explica cómo el sitio web de Sina Hotpot trata los datos personales recogidos a través del sitio y del formulario de reserva.",
      updated: "Última actualización: 13 de mayo de 2026",
      sections: [
        {
          title: "Responsable del tratamiento",
          paragraphs: [
            "El responsable del tratamiento es Sina Hotpot, contactable en sinahotpot@gmail.com. Este sitio se refiere a los locales operativos de Prato, Via Cava 109, 59100 Prato, y Florencia, Via Ghibellina 80R, 50122 Firenze.",
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
