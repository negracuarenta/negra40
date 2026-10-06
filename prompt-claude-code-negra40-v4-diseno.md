# Prompt v4 para Claude Code — Slideshow landing, miniaturas, tipografía serif, logo ícono

Pegá esto en Claude Code, en la carpeta `web 2026` (repo `negracuarenta/negra40`, sitio en https://negracuarenta.github.io/negra40/es/).

---

## Antes de arrancar — dos cosas que tengo que dejar en la carpeta

1. Voy a crear la carpeta `public/landing/` y subir ahí las fotos para el slideshow del home. Fijate cuántas hay y usalas todas.
2. Voy a dejar el archivo del ícono/logo (círculo negro con "n4o" en blanco, sin la palabra "negra40" al lado) en `public/logo/negra40-icono.png` (o `.svg` si lo consigo en vectorial). Si al arrancar no lo encontrás ahí, avisame en vez de inventar o reusar el logo con texto.

## Contexto

Este es otro ajuste visual sobre el sitio ya construido y desplegado (Astro, bilingüe ES/EN, contenido en `src/content/`, deploy automático vía `.github/workflows/deploy.yml` a GitHub Pages). **No reconstruyas nada de cero** y no toques contenido, rutas ni i18n — solo lo que se pide abajo.

**Importante sobre versiones**: antes de tocar nada, creá un tag de git con el estado actual (por ejemplo `git tag pre-v4-diseno` y pusheá el tag con `git push origin pre-v4-diseno`) para tener un punto de restauración claro. Nunca uses `git reset --hard`, `git push --force` ni reescribas historia — todos los commits de las versiones anteriores tienen que seguir existiendo en el historial de `main`. Cuando termines este ajuste, además del commit normal, creá otro tag (`v4-diseno`) y pusheálo también. La idea es que en cualquier momento se pueda volver a una versión anterior mirando los tags (`pre-v2-diseno`, `pre-v3-diseno`, `pre-v4-diseno`, etc. — si no existen tags de las versiones anteriores, creá los que falten retroactivamente sobre los commits correspondientes, identificalos por los mensajes de commit "Rediseño de negra40.com...", "Refresh visual...", etc.).

## 1. Slideshow de fotos en el landing

Reemplazá el hero actual del home por un **slideshow automático a todo el ancho** con las imágenes que voy a dejar en `public/landing/`. Que rote sola cada 4-5 segundos con una transición simple (fade), en loop infinito, sin que el usuario tenga que interactuar. No hace falta agregar flechas ni puntos de navegación — que sea automático y ya. Si `public/landing/` está vacía o no existe todavía, usá como fallback la imagen principal del proyecto más reciente (esto ya lo habías resuelto en un ajuste anterior) para que el sitio no se rompa.

## 2. Miniaturas de proyectos — recorte cuadrado centrado

En el índice de Proyectos y en las tarjetas del home (`ProjectCard.astro` o donde estén), todas las miniaturas tienen que quedar **cuadradas, del mismo tamaño, recortadas al centro de la imagen** (`object-fit: cover` con `object-position: center` como mínimo; si el recorte centrado corta mal alguna imagen puntual, no hace falta que lo resuelvas caso por caso, dejá el criterio uniforme).

## 3. Tipografía — títulos serif editorial + cuerpo sans-serif

Cambiá la tipografía de títulos grandes (h1/h2, nombres de proyecto, títulos de sección) a una **fuente serif editorial elegante**, tipo catálogo de museo (referencia: moma.org). Sugerencias de Google Fonts gratuitas con ese carácter: **"Fraunces"**, **"Noto Serif Display"** o **"Newsreader"** — elegí la que mejor combine con el resto (probá con "Fraunces" primero, tiene buen contraste y carácter editorial). El **cuerpo de texto sigue en sans-serif** simple y legible como está ahora (no cambies la fuente de párrafos, metadata FECHA/LUGAR, ni navegación — el contraste serif/sans es parte del efecto). Actualizá la variable de fuente en `src/styles/global.css` y asegurate de importar la nueva tipografía (Google Fonts o self-hosted, lo que uses en el resto del proyecto).

## 4. Logo — solo el ícono, sin la palabra "negra40"

En el header (`Nav.astro` o donde esté el logo) y en cualquier otro lugar donde aparezca el logo con la palabra "negra40" al lado (footer, etc.), reemplazalo por **solo el ícono** que voy a dejar en `public/logo/negra40-icono.png` — el círculo negro con "n4o" en blanco. Sacá el wordmark de texto completamente, que quede solo el símbolo circular, en un tamaño chico apropiado para header/footer.

## Qué NO cambiar

- Contenido, rutas, i18n, arquitectura de información.
- El hero grande y el bloque FECHA/LUGAR de las fichas de proyecto (eso ya quedó bien en el ajuste anterior) — la única fuente que cambia ahí es la del título.
- El sistema de botones que ya refinamos.

## Al terminar

Quiero ver un cambio visual significativo respecto a la versión actual. Antes de dar por terminado, revisá vos mismo en local que se note claramente: el slideshow funcionando, las miniaturas cuadradas y parejas, los títulos en la nueva serif, y el logo sin texto. Commiteá, tagueá como se explicó arriba, y pusheá a `origin main`.

Si algo de esto genera dudas (por ejemplo, cuántas fotos hay en `public/landing/`, o si el ícono que dejé no tiene suficiente contraste en algún fondo), preguntame antes de asumir.

---

*Generado el 17 de julio de 2026, cuarta iteración de diseño sobre el sitio ya construido y desplegado.*
