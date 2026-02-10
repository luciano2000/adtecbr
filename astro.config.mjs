import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ad.tec.br',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },
});
