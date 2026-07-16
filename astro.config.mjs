import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Primera publicación en la URL gratuita de GitHub Pages.
// Cuando migren a negra40.com, cambiar `site` y agregar un CNAME en public/.
export default defineConfig({
  site: 'https://negracuarenta.github.io',
  base: '/negra40',
  integrations: [sitemap()],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
