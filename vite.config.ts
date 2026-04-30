import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { VitePWA } from 'vite-plugin-pwa';
import pwaConfig from './pwa.config.js';
import { siteConfig, siteMetadata } from './src/site-config.js';

const indexHtmlReplacements = {
  __SITE_LANG__: siteConfig.lang,
  __SITE_TITLE__: siteMetadata.pageTitle,
  __SITE_DESCRIPTION__: siteConfig.seo.description,
  __SITE_KEYWORDS__: siteConfig.seo.keywords,
  __SITE_AUTHOR__: siteConfig.seo.author,
  __SITE_THEME_COLOR__: siteConfig.theme.color,
  __SITE_BRAND__: siteConfig.brand.name,
  __SITE_CANONICAL_URL__: siteMetadata.canonicalUrl,
  __SITE_OG_IMAGE__: siteMetadata.shareImageUrl,
  __SITE_OG_IMAGE_WIDTH__: siteConfig.assets.shareImageWidth.toString(),
  __SITE_OG_IMAGE_HEIGHT__: siteConfig.assets.shareImageHeight.toString(),
  __SITE_OG_IMAGE_ALT__: siteConfig.assets.shareImageAlt,
  __SITE_TWITTER_CARD__: siteConfig.seo.twitterCard,
  __SITE_FAVICON__: siteConfig.assets.favicon,
};

const injectSiteMetadata = () => ({
  name: 'inject-site-metadata',
  order: 'pre' as const,
  transformIndexHtml(html: string) {
    const transformedHtml = Object.entries(indexHtmlReplacements).reduce(
      (content, [token, value]) => content.replaceAll(token, value),
      html
    );

    return {
      html: transformedHtml,
      tags: [
        {
          tag: 'script' as const,
          injectTo: 'head' as const,
          attrs: {
            defer: true,
            src: siteConfig.analytics.umamiScript,
            'data-website-id': siteConfig.analytics.websiteId,
          },
        },
      ],
    };
  },
});

export default defineConfig({
  plugins: [injectSiteMetadata(), vue(), vueJsx(), VitePWA(pwaConfig)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
        },
      },
    },
    chunkSizeWarningLimit: 2000,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});
