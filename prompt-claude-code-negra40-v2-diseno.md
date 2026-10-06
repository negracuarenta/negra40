# Prompt v2 para Claude Code — Rediseño visual (referencia field-notes.berlin)

Pegá esto como mensaje a Claude Code, en la misma carpeta del proyecto (`web 2026`, repo `negracuarenta/negra40`, ya tiene el sitio Astro construido y desplegado).

---

## Contexto — esto es un ajuste de diseño, no una reconstrucción

Ya existe un sitio Astro bilingüe (ES/EN) funcionando en este repo (`negracuarenta/negra40`), con todo el contenido migrado, la arquitectura de información definida (negra 40 / Proyectos / Textos / Links / Contacto, con los 81 proyectos fusionados) y el deploy a GitHub Pages funcionando vía `.github/workflows/deploy.yml`. **No reconstruyas nada de cero.** No toques content collections (`src/content/`), rutas (`src/pages/`), ni la lógica de i18n (`src/i18n/ui.ts`, `src/lib/paths.ts`) — todo eso queda igual.

Lo que quiero ahora es un **refresh visual**: actualizar los estilos y algunos componentes de presentación para que el sitio se sienta más parecido, en tratamiento editorial, a esta referencia: https://field-notes.berlin/en/conferences/conference-programme

## Qué tomar de esa referencia

1. **Jerarquía tipográfica editorial marcada**: títulos y fechas/horarios en un peso muy bold y tamaño grande, en fuerte contraste con un cuerpo de texto más chico, angosto y muy legible. La tipografía sigue siendo sans-serif (no cambia esa decisión del brief original), pero jugá con el contraste de peso y tamaño entre título/metadata y cuerpo, no solo con tamaño uniforme.
2. **Retrato cuadrado + bio en fila**: cuando una ficha de proyecto tenga nombres de personas/equipo (créditos, diseño, elenco, etc. — la mayoría de las 81 fichas los tiene), si hay foto disponible de esa persona, mostrala en un cuadrado a la izquierda con el texto/bio a la derecha, en fila. Si no hay foto de la persona (la mayoría de los casos, porque el contenido original no tenía fotos individuales por persona), no inventes imágenes — dejá el layout de créditos como lista de texto simple, pero aplicá igual el estilo tipográfico bold para los roles ("Diseño", "Dirección", etc.), imitando cómo field-notes.berlin resalta el rol/cargo antes del nombre.
3. **Imágenes grandes en 16:9**: en la galería de cada ficha de proyecto (componente `Gallery.astro`), priorizá mostrar al menos la primera imagen destacada en formato panorámico grande (recortada a 16:9 si hace falta), en vez de una grilla uniforme de miniaturas chicas. El resto de la galería puede seguir en grilla más chica debajo.
4. **Estructura tipo agenda/programa**: en la ficha de cada proyecto (`ProyectoFicha.astro`), cuando el texto original tenga fecha, lugar, duración, horario (muchos proyectos y casi todos los eventos del archivo lo tienen), destacá esos datos como si fueran entradas de una agenda — etiqueta corta en bold ("Fecha", "Lugar", "Duración") seguida del valor, en una franja visualmente separada del cuerpo de texto narrativo, en vez de mezclado en el párrafo. En el índice de Proyectos (`ProyectosIndex.astro`), si no lo hace ya, mostrá la fecha de cada ficha de forma prominente (como si fuera un programa cronológico), no solo el título.

## Qué NO cambiar

- La paleta base (negro sobre blanco) y la decisión de usar una sans-serif geométrica — seguí con lo que ya elegiste en `src/styles/global.css`, solo ajustá pesos/tamaños/espaciados, no la familia tipográfica ni el esquema de color, salvo que notes que hace falta un peso adicional (bold/black) de la misma familia para lograr el contraste editorial — en ese caso agregalo.
- La arquitectura de información, las rutas, el contenido, la fusión de Proyectos+Archivo+Ensamble, y el soporte bilingüe: todo eso ya está bien y no se toca.
- El formulario/página de Contacto: dejalo como está resuelto.

## Al terminar

- Corré el sitio en local y verificá visualmente al menos: home, índice de Proyectos, una ficha de proyecto con galería y créditos, y la versión en inglés de alguna de esas páginas.
- Commiteá los cambios con un mensaje descriptivo (por ejemplo `Refresh visual: tipografía editorial, hero 16:9 y estructura tipo agenda, inspirado en field-notes.berlin`) y **pusheá a `origin main`** del mismo repo (`negracuarenta/negra40`) — no crees un repo nuevo ni una rama aparte, el workflow de deploy ya existente se encarga de publicar los cambios en GitHub Pages automáticamente al hacer push a `main`.
- Si para algo de esto necesitás una decisión mía (por ejemplo, qué proyectos priorizar para la imagen 16:9 si el original no tiene una claramente "destacada", o si algún dato de fecha/lugar viene ambiguo en el texto), preguntame en vez de asumir.

---

*Generado el 17 de julio de 2026, como iteración de diseño sobre el sitio ya construido y desplegado.*
