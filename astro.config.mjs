// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://magickidsnovaci.ro',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'ro',
        locales: {
          ro: 'ro-RO',
        },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  // Compresie HTML pentru performanță
  compressHTML: true,
});
