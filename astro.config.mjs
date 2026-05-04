// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://seanliao.tw',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Noto Sans TC',
      cssVariable: '--font-noto-sans-tc',
      weights: [400, 500, 700],
      subsets: ['chinese-traditional', 'latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'Noto Serif TC',
      cssVariable: '--font-noto-serif-tc',
      weights: [400, 700],
      subsets: ['chinese-traditional', 'latin'],
    },
  ],
});
