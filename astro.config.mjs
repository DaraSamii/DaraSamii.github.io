import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://darasamii.com',
  // Hovering a link downloads that page ahead of time, so clicks don't wait on the network.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // Fonts are downloaded at build and served from this site with metric-matched fallbacks:
  // no render-blocking third-party CSS. display 'optional': a page never re-draws in a different font mid-view.
  fonts: [
    { provider: fontProviders.google(), name: 'Inter', cssVariable: '--font-inter', weights: [400, 500, 600, 700], subsets: ['latin'], styles: ['normal'], display: 'optional', fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'] },
    { provider: fontProviders.google(), name: 'Montserrat', cssVariable: '--font-montserrat', weights: [500, 600, 700], subsets: ['latin'], styles: ['normal'], display: 'optional', fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'] },
    { provider: fontProviders.google(), name: 'JetBrains Mono', cssVariable: '--font-jetbrains', weights: [400, 500, 600], subsets: ['latin'], styles: ['normal'], display: 'optional', fallbacks: ['ui-monospace', 'monospace'] },
  ],
  integrations: [sitemap({ filter: (page) => !page.includes('/friends'), i18n: { defaultLocale: 'en', locales: { en: 'en-CA', fr: 'fr-CA' } } })],
  markdown: {
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
