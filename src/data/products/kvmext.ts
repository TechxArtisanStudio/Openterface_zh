import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "uConsole KVM Extension",
  slogan: "为您的 uConsole 注入 KVM 能量",
  subtitle: "将便携式 uConsole 转化为功能齐全的 KVM 终端。",
  status: 'oshwa',
  description:
    "为 Clockwork uConsole 增加 KVM-over-USB 功能的硬件扩展。内置键盘 and 显示屏，是便携式 IT 工作的理想选择。",
  seoDescription:
    "uConsole KVM Extension 为 Clockwork uConsole 便携式计算机添加了 KVM-over-USB 功能。",
  keywords:
    "uConsole, KVM extension, portable KVM, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/cover/uconsole.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/uconsole.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "了解更多",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "便携式控制台缺乏用于控制无头受控端的集成 KVM 功能",
    "现场技术人员希望一机多用",
  ],
  solutions: [
    "适配 uConsole 外形的原生扩展板",
    "在便携设备上运行完整的 Openterface KVM 技术栈",
  ],
  hwFeatures: [
    { title: "uConsole 原生设计", description: "专为 Clockwork uConsole 量身打造。" },
    { title: "紧凑型 PCB", description: "可安装在 uConsole 机壳内部。" },
  ],
  swFeatures: [
    { title: "Openterface 应用", description: "使用与 Mini-KVM 和 KVM-GO 相同且值得信赖的软件。" },
    { title: "安装指南", description: "提供详尽的硬件和软件安装文档。" },
  ],
  specs: [
    { label: "兼容性", value: "Clockwork uConsole" },
    { label: "认证", value: "OSHWA certified" },
  ],
  useCases: [
    "便携式数据中心工具",
    "移动创客与个人实验室",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "硬件安装", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "软件设置", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "连接指南", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "常见问题", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
