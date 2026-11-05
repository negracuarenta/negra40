import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeBase } from './src/lib/rehype-base.mjs';

// El sitio se publica hoy en la URL gratuita de GitHub Pages, colgando de
// /negra40/. Para el dominio propio cuelga de la raíz, y eso cambia todas las
// rutas de imágenes, hojas de estilo y enlaces: no alcanza con copiar la misma
// carpeta. Por eso las dos salen de acá, según el entorno:
//
//   npm run build                                  → GitHub Pages
//   SITE_BASE=/ SITE_URL=https://negra40.com.ar \
//     npm run build -- --outDir dist-dominio       → dominio propio
//
// El día de la mudanza basta con cambiar estos dos valores por defecto y
// agregar un CNAME en public/.
const base = process.env.SITE_BASE ?? '/negra40';
const site = process.env.SITE_URL ?? 'https://negracuarenta.github.io';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  // Los enlaces internos escritos en los .md van como /es/…; en producción el
  // sitio cuelga de /negra40/ y sin esto apuntan a la raíz del dominio.
  markdown: {
    rehypePlugins: [rehypeBase({ base })],
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
