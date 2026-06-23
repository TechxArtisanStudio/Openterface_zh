export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  productSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterLink: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "产品指南、常见问题、教程和应用下载请访问 docs.openterface.com。",
    "homeMessage": "教程、常见问题、应用下载和产品指南请访问 docs.openterface.com。",
    "linkLabel": "打开文档 ↗",
    "productMessage": "详细规格、设置指南和常见问题请访问 docs.openterface.com。"
  },
  "homeSubscribe": {
    "kicker": "保持关注",
    "heading": "第一时间获取 KVM-GO、KeyMod 和 Mini-KVM 更新",
    "description": "产品发布、固件更新和实用 IT 技巧 — 每月最多一封，无垃圾邮件，只有 Openterface 团队的有用资讯。",
    "benefitCrowdfunding": "众筹和预购窗口的早期访问",
    "benefitGuides": "设置指南和应用发布说明",
    "benefitUnsubscribe": "随时一键取消订阅",
    "submitLabel": "订阅更新",
    "namePlaceholder": "姓名（可选）",
    "emailPlaceholder": "邮箱地址 *",
    "footnote": "每月最多一封邮件。随时可取消订阅。咨询：info@openterface.com"
  },
  "siteFooter": {
    "tagline": "专为 IT 专业人士打造的超紧凑 KVM-over-USB 解决方案。",
    "productsHeading": "产品",
    "keymodSeries": "KeyMod 系列",
    "kvmGoSeries": "KVM-GO 系列",
    "miniKvm": "Mini-KVM",
    "accessories": "配件",
    "resourcesHeading": "资源",
    "videos": "视频",
    "faqs": "常见问题",
    "apps": "应用",
    "support": "支持",
    "newsletterTitle": "邮件订阅",
    "newsletterDescription": "优先获取发布资讯、每月产品与固件更新及 KVM 技巧 — 每月最多一封邮件。",
    "newsletterSubmit": "订阅",
    "newsletterNamePlaceholder": "姓名",
    "newsletterEmailPlaceholder": "邮箱 *",
    "newsletterFootnote": "随时可取消订阅。",
    "copyright": "Openterface. 开源 KVM-over-USB。",
    "privacy": "隐私政策",
    "terms": "服务条款",
    "newsletterLink": "邮件订阅"
  },
  "productLanding": {
    "downloadApp": "下载应用",
    "backers": "支持者",
    "theProblem": "痛点",
    "theSolution": "解决方案",
    "hwSoftwareTitle": "硬件 + 软件",
    "hwSoftwareSubtitle": "Openterface 产品与我们的开源主机应用配合使用效果最佳。",
    "hardware": "硬件",
    "software": "软件",
    "swFallback": "配件兼容性详情请查看 TxA Shop。",
    "keySpecs": "核心规格",
    "useCases": "使用场景",
    "documentation": "文档",
    "ctaTitle": "准备好开始了吗？",
    "ctaSubtitle": "订购硬件并下载适用于您平台的 Openterface 应用。"
  },
  "productSubscribe": {
    "kicker": "保持关注",
    "heading": "获取 {product} 发布与固件更新",
    "description": "第一时间了解此产品的预购、固件发布和设置技巧 — 每月最多一封邮件。",
    "benefitCrowdfunding": "众筹和预购窗口的早期访问",
    "benefitGuides": "设置指南和应用发布说明",
    "benefitUnsubscribe": "随时一键取消订阅",
    "submitLabel": "订阅更新",
    "namePlaceholder": "姓名（可选）",
    "emailPlaceholder": "邮箱地址 *",
    "footnote": "每月最多一封邮件。随时可取消订阅。"
  }
};
