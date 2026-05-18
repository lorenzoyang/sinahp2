import type { HomeSectionContent } from "./types";

export const zhHomeSections = {
    signatures: {
      intro:
        "清晰的品质感，来自好锅底、新鲜食材和可自由搭配的蘸料。",
      items: [
        [
          "锅底有香气",
          "清汤、麻辣或鸳鸯锅，先确定整桌的味道方向。",
        ],
        [
          "食材够新鲜",
          "薄切肉片和蔬菜上桌后，可以快速现涮现吃。",
        ],
        [
          "蘸料可自选",
          "每一口都能按自己的喜好调出不同层次。",
        ],
      ],
    },
    reservation: {
      eyebrow: "预约",
      title: "先预约你的座位",
      intro:
        "线上提交预约请求，或通过 WhatsApp 快速确认。",
    },
  } as const satisfies HomeSectionContent;
