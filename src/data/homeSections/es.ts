import type { HomeSectionContent } from "./types";

export const esHomeSections = {
    signatures: {
      intro:
        "Calidad clara: caldos aromáticos, ingredientes frescos y salsas personales.",
      items: [
        [
          "Caldos aromáticos",
          "Elige una base suave, picante o doble para la mesa.",
        ],
        [
          "Ingredientes frescos",
          "Cortes finos y verduras llegan listos para una cocción rápida.",
        ],
        [
          "Salsas personales",
          "Completa cada bocado con tu propio equilibrio de sabores.",
        ],
      ],
    },
    reservation: {
      eyebrow: "Reserva",
      title: "Reserva tu mesa",
      intro:
        "Envía la solicitud online o escríbenos por WhatsApp para una confirmación rápida.",
    },
  } as const satisfies HomeSectionContent;
