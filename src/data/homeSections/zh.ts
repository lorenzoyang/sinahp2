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
      "eyebrow": "预约流程演示",
      "title": "体验模拟预约",
      "intro": "使用虚构资料体验原网站的预约表单。整个流程只在浏览器中模拟，不会向餐厅发送任何请求。"
    },
  } as const satisfies HomeSectionContent;
