import type { HomeSectionContent } from "./types";

export const zhHomeSections = {
    signatures: {
      intro:
        "品质感不只在食材里，也在一桌人的节奏里：锅底有香气，食材现涮，蘸料能调出自己的味道。",
      items: [
        [
          "锅底先打开食欲",
          "清淡、麻辣或鸳鸯锅，让不同口味的人都能舒服开始。",
        ],
        [
          "食材现涮才好吃",
          "薄切肉片、蔬菜、菌菇和豆腐少量多次下锅，每一口都保持热度。",
        ],
        [
          "蘸料调出个人口味",
          "咸、辣、鲜、香可以一点点调整，同一桌也能吃出不同层次。",
        ],
      ],
    },
    reservation: {
      eyebrow: "预约",
      title: "约好时间，一起围炉吃火锅",
      intro:
        "线上提交预约请求，或通过 WhatsApp 快速确认与临时修改。",
    },
  } as const satisfies HomeSectionContent;
