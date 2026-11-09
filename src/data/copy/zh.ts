import type { LocaleCopy } from "./types";

export const zhCopy = {
    archive: {
      "label": "历史演示",
      "notice": "这是原网站的历史演示，不接受真实预约，营业信息可能已过时。",
      "currentWebsite": "前往现官网",
      "sourceCode": "项目源码",
      "historicalContact": "历史联系方式",
      "formNotice": "仅供演示：请使用虚构资料。此表单不会发送数据，也不会创建真实预约。",
      "javascriptRequired": "本地模拟需要 JavaScript。脚本准备完成前，表单会保持停用。",
      "dataNotice": "填写内容仅留在当前页面，离开时清空；不会发送或保存。"
    },
    meta: {
      homeTitle: "鲜入围煮 Sina Hotpot | Prato 与 Firenze 中式火锅",
      description:
        "在 Prato 与 Firenze，Sina Hotpot 用香气锅底、新鲜食材和桌边现涮，呈现精致而轻松的中式火锅体验。",
    },
    layout: {
      skipToContent: "跳到主要内容",
      contact: "联系",
      social: "社交",
    },
    a11y: {
      primaryNavigation: "主导航",
      languageMenu: "选择语言",
      mobileNavigation: "移动端导航",
      restaurantPhotos: "{city} 门店照片",
      photoSlides: "{city} 照片幻灯片",
      photoNavigation: "{city} 照片导航",
      photoLabel: "{city} 第 {number} 张照片",
      carousel: "轮播",
    },
    nav: {
      home: "首页",
      culture: "认识火锅",
      locations: "门店",
      gallery: "图片",
      reservation: "预约流程演示",
      privacy: "隐私政策",
      menu: "菜单",
    },
    cta: {
      reserve: "模拟预约",
      culture: "火锅怎么吃",
      map: "打开地图",
      viewDetails: "查看详情",
      backHome: "返回首页",
      learnMore: "继续了解",
      gallery: "浏览图片",
    },
    home: {
      eyebrow: "托斯卡纳的中式共享火锅",
      title: "鲜入围煮 Sina Hotpot",
      intro:
        "一口锅在桌中央慢慢升温，香气锅底、新鲜食材和现涮现吃的节奏，让朋友、家人或第一次尝试火锅的人都能自然投入。",
      sections: {
        ritualTitle: "简单、热闹、一起分享",
        ritualIntro: "先选锅底，再少量多次下食材，最后用蘸料调出属于自己的味道。",
        locationsTitle: "预约 Prato 或 Firenze",
        locationsIntro:
          "Prato 适合晚间和深夜聚餐；Firenze 靠近历史中心，午餐和晚餐都方便安排。",
        premiumTitle: "Sina 的一桌火锅",
      },
      steps: [
        ["选择锅底", "清淡、麻辣或鸳鸯锅，先为整桌确定舒服的味道方向。"],
        ["加入食材", "薄切肉片、蔬菜、菌菇和豆制品上桌后，就能按节奏现涮。"],
        ["现涮现吃", "少量放入锅中，等待合适时间，让香气和口感都刚刚好。"],
        ["一起分享", "锅在桌中央，聊天、选择和品尝会自然发生。"],
      ],
    },
    culture: {
      eyebrow: "中式火锅指南",
      title: "认识火锅：一顿一起完成的晚餐",
      intro:
        "火锅是一种来自中国的共享式餐饮体验：汤底在桌中央持续加热，客人把新鲜食材放入锅中现煮，再搭配蘸料，按自己的节奏享用。",
      blocks: [
        ["ritual", "餐桌会变得有互动", "火锅不是等一道成品菜上桌，而是同桌一起选择、下锅和品尝。"],
        ["ingredients", "每个人都能找到口味", "锅底、辣度、食材和蘸料都能调整，让同桌客人各自舒服。"],
        [
          "basics",
          "第一次尝试也不难",
          "可以从熟悉的食材开始，再慢慢探索更有中式风味的组合。",
        ],
      ],
      whyTitle: "为什么值得尝试",
      whyItems: [
        "它很适合社交：一顿饭会随着下锅、等待和分享自然展开。",
        "它很灵活：每个人都能选择自己的辣度、蘸料和涮煮节奏。",
        "它很有记忆点：热气、香气和食材色彩会把聚餐变成一次体验。",
      ],
      etiquetteTitle: "小建议",
      etiquette: [
        "先从清淡食材开始，再尝试更浓郁的味道。",
        "蘸料少量多次调整，找到自己喜欢的咸、辣、鲜、香比例。",
        "如有过敏或特殊需求，请在预约备注中说明，方便门店提前准备。",
      ],
    },
    locations: {
      eyebrow: "Prato 与 Firenze",
      title: "选择门店",
      intro:
        "选择下方门店进行预约、查看地址或直接与我们联系。",
      daily: "每天营业",
      phone: "电话",
      wechat: "微信",
      address: "地址",
      hours: "营业时间",
    },
    gallery: {
      eyebrow: "图片展示",
      title: "先看看即将上桌的味道",
      intro:
        "浏览菜品、原材料、厨师与新鲜食材、甜品与饮品照片，提前感受 Sina Hotpot 的餐桌氛围。",
      categories: {
        dishes: "即食菜品",
        ingredients: "原材料",
        refreshments: "甜品与饮品",
        chefs: "厨师与食材",
      },
      video: {
        eyebrow: "视频",
        title: "火锅上桌的那一刻",
        intro:
          "翻滚的锅底、现切雪花肥牛、新鲜时蔑，以及一道道上桌的菜品：用一段短片提前感受餐桌的热气。",
        play: "播放视频",
        pause: "暂停视频",
        mute: "关闭声音",
        unmute: "打开声音",
      },
    },
    reservation: {
      eyebrow: "预约流程演示",
      title: "体验模拟预约",
      intro:
        "使用虚构资料体验原网站的预约表单。整个流程只在浏览器中模拟，不会向餐厅发送任何请求。",
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
        name: "演示访客",
        phone: "+39 000 000 0000",
        location: "请选择门店地址",
        message: "示例备注：请勿填写真实个人资料或健康信息",
      },
      hints: {
        time: "请先选择门店地址。",
      },
      consentPrefix: "我已阅读",
      privacyLink: "隐私政策",
      consentSuffix:
        "，并了解这只是本地演示，不会生成真实预约。",
      submit: "模拟预约",
    },
    success: {
      "title": "演示已完成",
      "intro": "未发送任何预约。表单内容没有传输或保存。",
      "next": "如需真实预约，请前往餐厅现官网。"
    },
    privacy: {
      "title": "演示站隐私说明",
      "intro": "本说明适用于原网站的历史演示，不代表餐厅现官网的隐私政策。",
      "updated": "更新日期：2026 年 11 月 9 日",
      "sections": [
        {
          "title": "历史项目展示",
          "paragraphs": [
            "本网站保留原项目作为作品集案例，当前不代表餐厅运营，也不处理真实预约。门店地址、营业时间和联系方式均为历史资料，可能已过时。"
          ]
        },
        {
          "title": "本地模拟表单",
          "paragraphs": [
            "请只使用虚构资料。表单填写和验证仅在浏览器中进行，不会把内容发送给服务器、邮箱或预约服务，也不会将内容写入网址、日志或浏览器存储。离开页面时，表单会清空。"
          ]
        },
        {
          "title": "Cookie 与跟踪",
          "paragraphs": [
            "演示站不会加载 Google Ads、广告跟踪或外部验证码服务。项目代码不设置广告 Cookie，也不保存跟踪偏好。"
          ]
        },
        {
          "title": "托管与外部链接",
          "paragraphs": [
            "Cloudflare 提供托管、分发和安全服务，可能按其配置与政策处理 IP 地址、访问日志等技术请求信息。前往现官网、GitHub、地图或社交平台的链接会打开外部服务，适用各自的隐私政策；本演示站不控制它们的数据处理或保留期限。"
          ]
        }
      ]
    },
  } as const satisfies LocaleCopy;
