import type { LocaleCopy } from "./types";

export const zhCopy = {
    meta: {
      homeTitle: "鲜入围煮 Sina Hotpot | 普拉托与佛罗伦萨高端火锅",
      description:
        "鲜入围煮 Sina Hotpot 在托斯卡纳呈现高端中式火锅体验，服务 Prato 与 Firenze 两家门店。",
    },
    layout: {
      skipToContent: "跳到主要内容",
      contact: "联系",
      social: "社交",
    },
    nav: {
      home: "首页",
      culture: "火锅文化",
      locations: "门店",
      gallery: "图片",
      reservation: "预约",
      privacy: "隐私政策",
      menu: "菜单",
    },
    cta: {
      reserve: "预约座位",
      culture: "了解火锅",
      call: "电话",
      map: "打开地图",
      whatsapp: "WhatsApp",
      backHome: "返回首页",
      learnMore: "了解详细",
    },
    home: {
      eyebrow: "托斯卡纳高端中式火锅",
      title: "鲜入围煮 Sina Hotpot",
      intro:
        "香气锅底、新鲜食材、桌边现涮：在 Prato 或 Firenze 预约座位，轻松享受中式火锅。",
      proof: [
        "Prato 与 Firenze 两家门店",
        "第一次来也容易上手",
        "线上快速预约",
      ],
      sections: {
        ritualTitle: "火锅怎么吃",
        ritualIntro: "选锅底、涮食材、一起分享，几个步骤就能开始。",
        locationsTitle: "Prato 或 Firenze",
        locationsIntro: "选择更方便的门店，几步完成预约。",
        premiumTitle: "为什么选择 Sina",
      },
      steps: [
        ["选择锅底", "麻辣、清汤或鸳鸯锅，是整桌的味道基础。"],
        ["点选食材", "肉类、蔬菜、菌菇和豆制品上桌后即可现涮。"],
        ["桌边现涮", "放入锅中，等几秒钟，按自己的节奏享用。"],
        ["一起分享", "锅在桌中央，让聚餐自然有互动。"],
      ],
    },
    culture: {
      eyebrow: "第一次吃火锅指南",
      title: "火锅是什么？",
      intro:
        "火锅是一种来自中国的共享式餐饮体验：汤底在桌上持续加热，客人把新鲜食材放入锅中煮熟，再搭配蘸料享用。",
      blocks: [
        ["ritual", "共同参与的晚餐", "食物不是全部预先做好，而是在桌上一起完成。"],
        ["ingredients", "味道可以定制", "锅底、辣度、食材和蘸料都能根据个人偏好调整。"],
        [
          "basics",
          "认识中国文化",
          "火锅轻松、有互动感，很适合第一次尝试中餐文化的外国客人。",
        ],
      ],
      whyTitle: "为什么值得尝试",
      whyItems: [
        "它很适合社交，整顿饭都有交流。",
        "它很灵活，每个人都能找到适合自己的味道。",
        "它很有记忆点，热气、香气和食材色彩都很有感染力。",
      ],
      etiquetteTitle: "小建议",
      etiquette: [
        "先从清淡食材开始，再尝试更浓郁的味道。",
        "蘸料可以少量多次调整。",
        "如有过敏或特殊需求，请在预约备注中说明。",
      ],
    },
    locations: {
      eyebrow: "Prato 与 Firenze",
      title: "两家门店，选择你的下一次火锅",
      intro:
        "Prato 适合晚间与深夜聚餐；Firenze 位于历史中心附近，午餐和晚餐都可安排。",
      daily: "每天营业",
      phone: "电话",
      address: "地址",
      hours: "营业时间",
    },
    gallery: {
      eyebrow: "图片展示",
      title: "走近鲜入围煮",
      intro: "浏览门店的即食菜品、原材料、甜品与饮品照片。",
      categories: {
        dishes: "即食菜品",
        ingredients: "原材料",
        refreshments: "甜品与饮品",
      },
    },
    reservation: {
      eyebrow: "预约请求",
      title: "预约座位",
      intro: "填写以下信息后，门店负责人会通过邮件收到预约通知。",
      labels: {
        name: "姓名",
        phone: "电话号码",
        guests: "人数",
        date: "日期",
        time: "时间",
        location: "门店",
        message: "可选说明",
      },
      placeholders: {
        name: "你的姓名",
        phone: "+39 ...",
        message: "过敏、特殊情况或其他需求",
      },
      consentPrefix: "我已阅读",
      privacyLink: "隐私政策",
      consentSuffix:
        "，并同意使用我填写的信息处理预约，包括备注中可能填写的过敏或健康相关信息。",
      submit: "提交预约",
      sending: "正在提交...",
      success: "预约请求已提交。",
      error: "暂时无法提交，请重试或通过 WhatsApp 联系我们。",
      missingKey:
        "Web3forms 尚未配置。发布前请设置 PUBLIC_WEB3FORMS_ACCESS_KEY。",
      captchaRequired: "请先完成防垃圾验证，再提交预约请求。",
    },
    success: {
      title: "预约请求已收到",
      intro:
        "谢谢。你的预约请求已发送给 Sina Hotpot。如需紧急修改，请直接通过 WhatsApp 联系我们。",
      next: "你也可以继续查看门店地址、营业时间与路线。",
    },
    privacy: {
      title: "隐私政策",
      intro:
        "本说明解释 Sina Hotpot 网站如何处理通过网站和预约表单收集的个人数据。",
      updated: "最后更新：2026 年 5 月 13 日",
      sections: [
        {
          title: "数据控制者",
          paragraphs: [
            "数据控制者为 Sina Hotpot，可通过 sinahotpot@gmail.com 联系。本网站涉及 Prato 门店 Via Cava 109, 59100 Prato，以及 Firenze 门店 Via Ghibellina 80R, 50122 Firenze。",
          ],
        },
        {
          title: "收集的数据",
          paragraphs: [
            "预约表单会收集姓名、电话号码、人数、日期、时间、选择的门店和可选备注。托管和安全服务可能处理网站运行所需的技术数据，例如 IP 地址、浏览器信息、请求日期和时间。",
            "可选备注不是必填项。如果你选择填写过敏、饮食需求或其他健康相关信息，这些信息只会用于处理预约并安排你请求的服务。",
          ],
        },
        {
          title: "处理目的和法律依据",
          paragraphs: [
            "数据用于接收和管理预约请求、在必要时与你联系、安排门店服务、保持网站安全和正常运行，以及在适用时履行行政或法律义务。",
          ],
          items: [
            "预约请求：根据用户请求采取合同前或合同履行措施，GDPR 第 6(1)(b) 条。",
            "技术数据、安全和防垃圾提交：基于运行和保护网站的合法利益，GDPR 第 6(1)(f) 条。",
            "适用的行政或法律义务：履行法律义务，GDPR 第 6(1)(c) 条。",
            "自愿填写在备注中的过敏或健康相关信息：基于用户对处理预约和安排服务这一特定目的的明确同意，GDPR 第 9(2)(a) 条。",
          ],
        },
        {
          title: "提供数据",
          paragraphs: [
            "姓名、电话、人数、日期、时间和门店是发送预约请求所必需的信息。缺少这些信息时，Sina Hotpot 可能无法处理预约请求。可选备注可以留空。",
          ],
        },
        {
          title: "接收方和第三方服务",
          paragraphs: [
            "数据可能由 Sina Hotpot 授权人员以及用于发布网站、保护服务和转发预约请求的技术服务商处理。",
          ],
          items: [
            "Web3Forms：接收表单数据，并通过电子邮件转发给 Sina Hotpot。",
            "Cloudflare：提供托管、网站分发、安全和技术日志服务。",
            "电子邮件服务商：在 Sina Hotpot 邮箱中接收和保存预约邮件。",
            "hCaptcha 或同类防垃圾工具：可能在表单中启用，用于确认提交来自真人而不是机器人。",
            "Google Maps、Instagram、Facebook 和 WhatsApp 是外部链接。只有当你选择打开这些链接或使用这些平台时，相应服务才会处理数据。",
          ],
        },
        {
          title: "欧洲经济区以外的传输",
          paragraphs: [
            "部分技术服务商，包括托管、安全、表单、电子邮件或防垃圾服务，可能在欧洲经济区以外处理数据。在这些情况下，处理应依赖服务商提供的保障措施，例如充分性决定、Data Privacy Framework、标准合同条款或适用的等效措施。",
          ],
        },
        {
          title: "保存期限",
          paragraphs: [
            "预约请求会在处理预约所需期间保存，通常不超过请求日期后的 12 个月，除非因法律义务、安全、防止滥用或权利主张需要更长时间保存。",
            "技术日志和防垃圾日志根据相关服务商的设置和期限保存。Web3Forms 声明其不保存表单提交内容，并会定期删除可能存在的技术日志。",
          ],
        },
        {
          title: "Cookie 和跟踪工具",
          paragraphs: [
            "本网站自身代码不使用画像 cookie、广告 cookie 或分析 cookie。因此网站不显示 cookie 同意横幅。",
            "网站可能使用严格必要的技术工具，用于浏览、安全、表单转发和防垃圾提交。如果未来加入分析工具、广告像素、嵌入地图、社交组件或其他非技术工具，本说明和同意机制应在启用前更新。",
          ],
        },
        {
          title: "你的权利",
          paragraphs: [
            "你可以请求访问、更正、删除、限制处理、数据可携带、在适用情况下反对处理，以及撤回基于同意的数据处理。撤回同意不影响撤回前已经进行处理的合法性。",
            "你可以通过 sinahotpot@gmail.com 行使权利。你也有权向意大利数据保护主管机关投诉：www.garanteprivacy.it。",
          ],
        },
        {
          title: "自动化决策",
          paragraphs: [
            "本网站不进行会对用户产生法律影响或类似重大影响的画像分析或自动化决策。",
          ],
        },
      ],
    },
  } as const satisfies LocaleCopy;
