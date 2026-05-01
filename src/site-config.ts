export type SocialId = 'email' | 'github' | 'x' | 'bluesky' | 'bilibili' | 'telegram';

export interface SiteSocial {
  id: SocialId;
  name: string;
  url: string;
  external: boolean;
  color: string;
  size: number;
}

export interface SiteConfig {
  brand: {
    name: string;
    owner: string;
    shellHandle: string;
  };
  domain: string;
  lang: string;
  roleLine: string;
  theme: {
    color: string;
    backgroundColor: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
    author: string;
    twitterCard: 'summary' | 'summary_large_image';
  };
  contact: {
    email: string;
    primaryCta: string;
  };
  socials: SiteSocial[];
  statusPage: string;
  assets: {
    avatar: string;
    shareImage: string;
    shareImageWidth: number;
    shareImageHeight: number;
    shareImageAlt: string;
    icon192: string;
    icon512: string;
    favicon: string;
  };
  analytics: {
    umamiScript: string;
    websiteId: string;
  };
}

export const siteConfig = {
  brand: {
    name: 'Underflo',
    owner: 'xtawa',
    shellHandle: 'underflo',
  },
  domain: 'https://underflo.ink',
  lang: 'en',
  roleLine: 'Builder of apps and systems',
  theme: {
    color: '#ffffff',
    backgroundColor: '#ffffff',
  },
  seo: {
    title: 'Underflo',
    description:
      'Underflo is the personal portfolio of a builder of apps and systems. Explore projects, profile links, and ways to get in touch.',
    keywords: 'Underflo, portfolio, builder, apps, systems, developer, designer, projects',
    author: 'Underflo',
    twitterCard: 'summary_large_image',
  },
  contact: {
    email: 'mailto:zeromostia@gmail.com',
    primaryCta: 'mailto:zeromostia@gmail.com',
  },
  socials: [
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:zeromostia@gmail.com',
      external: false,
      color: '#f47060',
      size: 20,
    },
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/xtawa/',
      external: true,
      color: '#ffffff',
      size: 24,
    },
    {
      id: 'x',
      name: 'Twitter',
      url: 'https://x.com/Re_UnderFlo',
      external: true,
      color: '#ffffff',
      size: 22,
    },
    {
      id: 'bluesky',
      name: 'Bluesky',
      url: 'https://bsky.app/profile/underflo.ink',
      external: true,
      color: '#4ea5ff',
      size: 24,
    },
    {
      id: 'bilibili',
      name: 'Bilibili',
      url: 'https://space.bilibili.com/415497730',
      external: true,
      color: '#00aeec',
      size: 24,
    },
    {
      id: 'telegram',
      name: 'Telegram',
      url: 'https://t.me/Yanluokeke',
      external: true,
      color: '#2aabee',
      size: 22,
    },
  ],
  statusPage: 'https://status.xtawa.top',
  assets: {
    avatar: '/brand/avatar-underflo.jpg',
    shareImage: '/brand/share-card.jpg',
    shareImageWidth: 1200,
    shareImageHeight: 630,
    shareImageAlt: 'Underflo share card',
    icon192: '/icon-192.png',
    icon512: '/icon-512.png',
    favicon: '/favicon.ico',
  },
  analytics: {
    umamiScript: 'https://umami.tiouo.xyz/script.js',
    websiteId: '9f5af7fa-74a3-4c9e-8b61-6139c196d63b',
  },
} satisfies SiteConfig;

export const siteMetadata = {
  pageTitle: `${siteConfig.seo.title} - ${siteConfig.roleLine}`,
  canonicalUrl: siteConfig.domain,
  shareImageUrl: new URL(siteConfig.assets.shareImage, siteConfig.domain).toString(),
};

export const socialLinks = Object.fromEntries(
  siteConfig.socials.map((social) => [social.id, social])
) as Record<SocialId, SiteSocial>;
