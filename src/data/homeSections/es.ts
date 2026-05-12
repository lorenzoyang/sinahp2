import type { HomeSectionContent } from "./types";

export const esHomeSections = {
    signatures: {
      intro:
        "Un hotpot premium se reconoce por ingredientes claros, buen equilibrio en el caldo, carnes finas, vegetales frescos y salsas que cada persona puede ajustar.",
      items: [
        [
          "Caldos con personalidad",
          "Suave, picante o doble: el caldo cambia el ritmo y el perfil de sabor de toda la mesa.",
        ],
        [
          "Ingredientes frescos y de cocción rápida",
          "Carne fina, setas, tofu y verduras deben sentirse limpios, frescos y fáciles de entender.",
        ],
        [
          "La salsa como capa final",
          "Cada persona puede llevar el mismo ingrediente hacia notas más saladas, picantes, frescas o aromáticas.",
        ],
      ],
    },
    occasions: {
      eyebrow: "Momentos para compartir",
      title: "Un formato flexible para distintas cenas",
      intro:
        "El hotpot es social por naturaleza, pero no solo sirve para cenas ruidosas. También puede sentirse elegante, calmado y bien medido.",
      items: [
        [
          "Parejas y noches tranquilas",
          "Cocinar en la mesa alarga la cena con naturalidad y deja espacio para conversar sin prisa.",
        ],
        [
          "Grupos y celebraciones",
          "La mesa se mantiene activa durante toda la comida y convierte compartir en parte de la experiencia.",
        ],
        [
          "Familias y mesas mixtas",
          "Diferentes caldos e ingredientes flexibles ayudan a que principiantes y habituales disfruten juntos.",
        ],
        [
          "Invitados y cenas informales de trabajo",
          "El formato resulta memorable y refinado, pero sigue siendo accesible para clientes italianos e internacionales.",
        ],
      ],
    },
    visit: {
      eyebrow: "Primera visita",
      title: "Unas pocas claves lo hacen más fácil",
      intro:
        "Para muchos clientes europeos el hotpot es nuevo. La página debe reducir dudas y preparar mejor la visita.",
      items: [
        "La olla doble suele ser la opción más fácil para empezar.",
        "Empezar con verduras, tofu y carnes finas ayuda a leer mejor la experiencia.",
        "Las salsas funcionan mejor si se ajustan poco a poco tras los primeros bocados.",
        "Alergias, necesidades alimentarias y ocasiones especiales deben indicarse en la reserva.",
      ],
    },
    atmosphere: {
      eyebrow: "Experiencia en sala",
      title: "Vapor, calidez y un servicio con ritmo claro",
      intro:
        "Una cena premium de hotpot no depende solo de la variedad. También depende de cómo se siente la mesa a medida que avanza.",
      items: [
        "La olla permanece en el centro y mantiene un foco compartido de principio a fin.",
        "El vapor y el aroma crean presencia sin volver la experiencia pesada.",
        "El formato de servicio funciona tanto para cenas largas como para encuentros con horario definido.",
      ],
      stats: [
        "Solicitud online rápida",
        "Prato abierto hasta tarde",
        "Florencia abre al mediodía y por la noche",
        "Adecuado para clientes locales e internacionales",
      ],
    },
    reservation: {
      eyebrow: "Cierra con un paso claro",
      title: "Reserva antes de llegar",
      intro:
        "Una solicitud breve basta para avisar a la sede correcta. Si el plan cambia rápido, el contacto directo sigue disponible.",
      items: [
        "Elige la sede según horario y zona.",
        "Anota alergias o peticiones especiales antes de la visita.",
        "Usa WhatsApp para cambios urgentes o dudas de última hora.",
      ],
    },
  } as const satisfies HomeSectionContent;
