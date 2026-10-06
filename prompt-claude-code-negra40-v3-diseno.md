# Prompt v3 para Claude Code — Hero grande, botones refinados, fichas estilo field-notes.berlin

Pegá esto en la ventana de Claude Code, en la carpeta `web 2026` (repo `negracuarenta/negra40`, sitio ya en vivo en https://negracuarenta.github.io/negra40/es/).

---

## Contexto

Este es otro ajuste visual sobre el sitio ya construido y desplegado — **no reconstruyas nada de cero**, no toques `src/content/`, las rutas de `src/pages/`, ni la lógica de i18n. Ya reviamos el sitio en vivo y la ficha de proyecto (`ProyectoFicha.astro`) ya tiene el bloque tipo agenda con FECHA/LUGAR — eso se mantiene y sirve de base para lo que sigue.

Referencia de estética a seguir: https://field-notes.berlin/en/conferences/conference-programme (foto grande a pantalla completa debajo del título, tipografía editorial bold, mucho aire).

## 1. Imagen grande en el landing (home)

El home (`HomePage.astro` o donde esté el hero actual) hoy no tiene imagen destacada, solo texto y después la grilla de proyectos. Agregá una **imagen grande a todo el ancho** (estilo el hero de field-notes.berlin: ocupa gran parte del viewport, debajo del título/intro) usando **la imagen principal del proyecto más reciente** (el primero que aparece ordenado por fecha en el índice de proyectos — hoy sería "Acción Duero"). Esto tiene que resolverse dinámicamente (tomando el primer proyecto del listado ya ordenado), no hardcodeado, para que se actualice solo cuando carguen un proyecto nuevo.

## 2. Botones y elementos interactivos — refinamiento general

Pasá por todo el sitio refinando el estilo de botones/links interactivos: el selector de idioma (hoy es un rectángulo con borde simple, arriba a la derecha), los links "← Volver a Proyectos", los CTA de las tarjetas de proyecto en el índice, y el botón de envío del formulario de Contacto. Buscá un tratamiento consistente y más pulido en todo el sitio — pensá en: mejor padding/proporción, transición suave en hover (por ejemplo, un subrayado que crece, o un fondo que se invierte negro/blanco), tipografía en mayúsculas pequeñas con tracking si pega con el resto del sitio. Definilo una vez como estilo base (por ejemplo una clase `.btn` o similar en `global.css`) y aplicalo a todos esos elementos para que se sientan parte del mismo sistema, no soluciones sueltas por componente.

## 3. Fichas de proyecto — foto grande panorámica arriba

En **las 81 fichas de proyecto** (`ProyectoFicha.astro`), agregá una imagen grande en formato panorámico (16:9 aprox.), a todo el ancho del contenedor, usando automáticamente **la primera imagen de la galería de cada proyecto**. Ubicación: justo después del bloque de título + FECHA/LUGAR (agenda), y antes del cuerpo de texto — replicando el orden de field-notes.berlin (título/metadata → foto grande → texto). El resto de la galería de cada ficha sigue como está debajo del texto.

Esto aplica a las 81 fichas por igual, de forma automática — no hace falta curar imagen por imagen.

## Qué NO cambiar

- Contenido, textos, rutas, i18n, arquitectura de información: igual que antes.
- Paleta (negro sobre blanco) y familia tipográfica sans-serif ya elegida — solo ajustá pesos, tamaños y el sistema de botones, no cambies de fuente.

## Al terminar

- Verificá visualmente en local: home (con el hero grande), el índice de Proyectos, al menos dos fichas de proyecto distintas (una con muchas imágenes y otra con pocas, para confirmar que el hero panorámico funciona igual en ambos casos), y la versión en inglés de una de esas páginas.
- Commiteá y **pusheá a `origin main`** del mismo repo (`negracuarenta/negra40`) — el workflow de deploy existente publica solo.
- Si el proyecto más reciente no tiene imágenes (raro, pero por las dudas), o alguna ficha no tiene galería, avisame en vez de romper el layout — dejá un fallback razonable (por ejemplo ocultar el hero si no hay imagen).

---

*Generado el 17 de julio de 2026, tercera iteración de diseño sobre el sitio ya construido y desplegado.*
