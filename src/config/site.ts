import { surfaceDocsBase, surfaceNewsBase } from './surface-urls';

export const siteConfig = {
  name: 'Openterface',
  locale: 'zh',
  url: 'https://cn.openterface.com',
  legacyUrl: 'https://openterface.com',
  description:
    '专为 IT 专业人士打造的超紧凑 KVM-over-USB 解决方案 —— KVM-GO、Mini-KVM、KeyMod 和 uConsole KVM Extension。',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  accent: '#ff6e42',
  links: {
    minikvmPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-mini-kvm',
    kvmgoPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-kvm-go',
    kvmextPurchase:
      'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole',
    keymodCrowdsupply: 'https://www.crowdsupply.com/techxartisan/openterface-keymod',
    shop: 'https://shop.techxartisan.com/',
    docs: 'https://docs.openterface.com',
    keycmdAndroidApk: 'https://assets2.openterface.com/data/KeyCmd-release-0.19.apk',
    appOverview: 'https://docs.openterface.com/zh/app/kvm/',
    subscribe: 'https://subscribe.openterface.com/api/subscribe/',
    news: 'https://news.openterface.com',
  },
  analytics: {
    enabled: import.meta.env.PROD,
    google: {
      provider: 'google' as const,
      measurementId: 'G-EKZEH6QYWT',
                  linkerDomains: ['openterface.com', 'forum.openterface.com']
    },
    ahrefs: {
      dataKey: 'b3G5nUND8OglcZwfjfwixQ',
    },
    consent: {
      storageKey: 'openterface-cookie-consent',
      title: 'Cookie 同意',
      description:
        '我们使用 Cookie 来改进网站并分析使用情况。您的同意将帮助我们优化您的体验。感谢！',
      acceptLabel: '同意',
      rejectLabel: '拒绝',
      cookieLabel: 'Cookie',
    },
  },
} as const;

/** Build a legacy openterface.com URL (marketing-only paths during cutover). */
export function legacyPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.legacyUrl}${normalized}`;
}

/** Build a docs.openterface.com URL for this site's locale (English unprefixed at /). */
export function docsPath(subpath = ''): string {
  const normalized = subpath.startsWith('/') ? subpath : subpath ? `/${subpath}` : '';
  const suffix = normalized && !normalized.endsWith('/') ? `${normalized}/` : normalized || '/';
  const { locale } = siteConfig;
  const base = surfaceDocsBase();
  if (locale === 'en') {
    return suffix === '/' ? `${base}/` : `${base}${suffix}`;
  }
  return `${base}/${locale}${suffix === '/' ? '/' : suffix}`;
}

/** News hub URL — English is unprefixed at news.openterface.com/ */
export function newsPath(subpath = ''): string {
  const normalized = subpath.replace(/^\/+|\/+$/g, '');
  const { locale } = siteConfig;
  const base = surfaceNewsBase();
  if (locale === 'en') {
    return normalized ? `${base}/${normalized}/` : `${base}/`;
  }
  return normalized ? `${base}/${locale}/${normalized}/` : `${base}/${locale}/`;
}
