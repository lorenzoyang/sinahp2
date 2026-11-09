import type { HomeSectionContent } from "./types";

export const esHomeSections = {
    signatures: {
      intro:
        "La calidad se siente en el ritmo de la mesa: caldo perfumado, ingredientes cocinados al momento y salsas que hacen tuyo cada bocado.",
      items: [
        [
          "Caldos que abren la cena",
          "Suave, picante o doble: el caldo da carácter a la mesa sin complicarla.",
        ],
        [
          "Ingredientes cocinados al momento",
          "Carnes finas, verduras, setas y tofu están pensados para pequeños bocados calientes.",
        ],
        [
          "Salsas para tu equilibrio",
          "Cada persona puede encontrar su punto entre salado, fresco, picante y aromático.",
        ],
      ],
    },
    reservation: {
      "eyebrow": "Demo de reserva",
      "title": "Prueba una reserva simulada",
      "intro": "Explora el formulario original con datos ficticios. La simulación funciona solo en el navegador y no envía solicitudes al restaurante."
    },
  } as const satisfies HomeSectionContent;
