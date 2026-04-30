import { VitePWAOptions } from 'vite-plugin-pwa';
import { siteConfig } from './src/site-config.js';

const pwaConfig = {
  registerType: 'autoUpdate',
  devOptions: {
    enabled: true,
    type: 'module',
  },
  includeAssets: ['favicon.ico', 'icon-192.png', 'icon-512.png', 'brand/avatar-underflo.jpg'],
  manifest: {
    name: siteConfig.brand.name,
    short_name: siteConfig.brand.name,
    description: siteConfig.seo.description,
    theme_color: siteConfig.theme.color,
    background_color: siteConfig.theme.backgroundColor,
    display: 'standalone',
    start_url: '/',
    scope: '/',
    icons: [
      { src: siteConfig.assets.icon192, sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: siteConfig.assets.icon512, sizes: '512x512', type: 'image/png', purpose: 'any' },
      {
        src: siteConfig.assets.icon512,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
  workbox: {
    navigateFallbackAllowlist: [/^\/$/],
    globPatterns: ['**/*.{js,css,html,ico,svg,txt,xml,png,jpg,jpeg,webp}'],
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
      {
        urlPattern: /^https:\/\/(cdn|sdk|cloud|umami)\..*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'cdn-cache',
          expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
        },
      },
      {
        urlPattern: /\.woff2$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'font-cache',
          expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
        },
      },
    ],
  },
};

export default pwaConfig as VitePWAOptions;
