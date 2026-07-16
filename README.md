# negra40.com — sitio nuevo

Sitio estático bilingüe (español/inglés) construido con [Astro](https://astro.build), listo para publicarse en GitHub Pages.

## Correr en local

Este proyecto necesita [Node.js](https://nodejs.org) 20 o superior. Si no lo tenés instalado, descargalo desde nodejs.org (versión LTS) e instalalo antes de seguir.

```bash
npm install
npm run dev
```

Abrí `http://localhost:4321` en el navegador. La home redirige a `/es/`.

Otros comandos:

```bash
npm run build    # genera el sitio estático en dist/
npm run preview  # sirve dist/ localmente para revisar el build de producción
```

## Estructura del contenido

- `src/content/proyectos/{es,en}/<slug>.md` — las 81 fichas (proyectos + eventos de archivo + Ensamble Negra 40), un archivo por idioma, mismo `slug` en ambos para que el selector de idioma funcione.
- `src/content/paginas/{es,en}/{inicio,negra-40,contacto}.md` — páginas de texto libre.
- `src/content/textos/{es,en}.md` y `src/content/links/{es,en}.md` — listados estructurados (frontmatter con un array `items`, sin cuerpo).
- `public/images/AAAA/MM/...` — todas las imágenes originales, misma estructura de carpetas que tenía WordPress.
- `public/audio/CENA_Extracto.mp3` — el único audio propio del sitio (proyecto C.E.N.A).
- `public/logos/` — las 4 variantes del isotipo.

## Cómo agregar un proyecto nuevo

1. Creá `src/content/proyectos/es/mi-proyecto.md` y `src/content/proyectos/en/mi-proyecto.md` (mismo nombre de archivo en ambos).
2. Frontmatter mínimo:

   ```yaml
   ---
   title: "Mi proyecto"
   date: 2026-03-15       # opcional — si no hay fecha exacta, usá `order` para la posición relativa
   order: 0                # número más bajo = aparece antes entre los que no tienen fecha
   category: proyecto       # proyecto | archivo | ensamble
   location: "Mar del Plata, Argentina"  # opcional
   images:
     - /images/2026/03/foto-01.jpg
   audio:                   # opcional, solo si el proyecto tiene audio
     type: soundcloud        # native | soundcloud | bandcamp | drive | vimeo
     url: "https://soundcloud.com/..."
     label: "Escuchar el registro"
   ---
   ```

3. Escribí el texto en Markdown debajo del frontmatter (el primer elemento de `images` se usa como foto de portada; el resto arma la galería de la ficha).
4. Copiá las imágenes a `public/images/AAAA/MM/` (o la carpeta que prefieras dentro de `public/images/`) y referencialas con esa misma ruta en `images:`.
5. `npm run dev` para ver el resultado — la ficha aparece automáticamente en el índice de Proyectos, ordenada por fecha.

## Pendientes conocidos

- **Node.js**: este proyecto se armó sin poder correr `npm install`/`npm run dev` en la máquina donde se generó — probá el build localmente antes de la primera publicación.
- **Redes sociales**: los links de Facebook / Instagram / Vimeo en el footer y en Contacto son placeholders (`href="#"`, marcados con `TODO` en el código) porque el contenido scrapeado del sitio viejo no incluía las URLs reales. Buscá `TODO: reemplazar` en `src/components/Footer.astro` y en `src/pages/{es,en}/contacto.astro`.
- **Dominio propio**: `astro.config.mjs` está configurado para `usuario.github.io/negra40`. Para migrar a `negra40.com`, cambiá `site` y `base` en `astro.config.mjs`, agregá un archivo `public/CNAME` con el dominio, y configurá el DNS.

## Despliegue

El workflow `.github/workflows/deploy.yml` builda y publica a GitHub Pages en cada push a `main`. En GitHub, andá a **Settings → Pages** y elegí **GitHub Actions** como fuente antes del primer push.
