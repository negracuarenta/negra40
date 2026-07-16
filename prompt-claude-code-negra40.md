# Prompt para Claude Code — Rediseño de negra40.com

Copiá y pegá todo este documento como primer mensaje a Claude Code dentro de la carpeta del proyecto (o dile "lee el archivo prompt-claude-code-negra40.md y seguí sus instrucciones").

---

## Contexto

Estoy migrando el sitio de **negra40** (colectivo de arte sonoro y acción territorial, Mar del Plata, Argentina) desde WordPress a un sitio estático moderno, minimalista, para publicar en GitHub Pages.

Ya extraje **todo el contenido** del sitio viejo (textos completos + imágenes + 1 audio) y está organizado en la carpeta `negra40-contenido/` en la raíz de este repo:

```
negra40-contenido/
├── 01-paginas-principales/       # 8 páginas del menú viejo, en .md
│   ├── 00-inicio.md
│   ├── 01-negra-40.md
│   ├── 02-proyectos-index.md
│   ├── 03-archivo-index.md
│   ├── 04-ensamble-negra-40.md
│   ├── 05-textos.md
│   ├── 06-links.md
│   └── 07-contacto.md
├── 02-proyectos/                 # 18 proyectos "actuales", uno por archivo .md
│   └── 01-accion-duero.md ... 18-b250-beethoven-250-anos.md
├── 03-archivo-eventos/            # 62 eventos del archivo histórico (2013–2025), uno por archivo .md
│   └── 01-daniel-leguizamon-en-concierto.md ... 62-concierto-duo-stephane-pecas.md
├── imagenes/                      # 1076 imágenes originales, organizadas por año/mes tal cual WordPress
│   └── 2020/04/..., 2021/11/..., 2025/07/..., etc.
├── unique-images.csv              # mapa url original -> archivo local, por si hace falta
└── CENA_Extracto.mp3              # único audio alojado en el dominio propio (evento "C.E.N.A")
```

Cada archivo `.md` de página/proyecto/evento tiene este formato:

```
# <Título>
URL: <url original en negra40.com>

## Texto
<texto completo tal cual estaba en la web vieja>

## Imágenes
- <url original de cada imagen de esa página, en orden>
```

Las URLs de imágenes dentro de cada `## Imágenes` son las URLs *originales* de negra40.com — para encontrar el archivo local correspondiente, sacale el prefijo `https://www.negra40.com/n40/wp-content/uploads/` y buscá esa ruta relativa dentro de `negra40-contenido/imagenes/` (por ejemplo `2025/07/Accion_Duero_01.webp`).

Hay también un archivo `logos/` (o decime dónde los dejé) con el isotipo del proyecto en 4 variantes: el logotipo horizontal "negra40" en negro sobre blanco, y el monograma circular "n4o" en variantes gris/blanco y negro/blanco — usalos para el header, favicon y compartidos en redes.

## Objetivo

Construir un sitio estático nuevo, minimalista, bilingüe (español/inglés), a partir de este contenido, listo para publicar en GitHub Pages.

## Stack técnico

- **Astro** como generador de sitio estático.
- Sin backend — todo estático, desplegado vía **GitHub Actions** a **GitHub Pages**.
- Primera publicación en la URL gratuita de GitHub Pages (`usuario.github.io/negra40` o similar). La migración a dominio propio `negra40.com` la hacemos en una segunda etapa — dejá el sitio preparado para poder agregar un `CNAME` después, pero no lo configures todavía.

## Arquitectura de información (mapa del sitio)

Menú principal (idéntico en ambos idiomas, solo cambia el idioma del contenido):

- **negra 40** — página "quién somos" / misión (contenido de `01-negra-40.md`)
- **Proyectos** — listado + fichas individuales (ver detalle abajo)
- **Textos** — listado de textos/PDFs descargables (contenido de `05-textos.md`)
- **Links** — listado de links externos (contenido de `06-links.md`)
- **Contacto** — página de contacto (contenido de `07-contacto.md`)

La página de **Inicio** (home, `00-inicio.md`) puede destacar los proyectos más recientes (como hacía la web vieja) y linkear al resto — no es un ítem de menú aparte, es la portada.

### Proyectos (fusión completa)

Todo lo que antes eran secciones separadas ("Proyectos", "Archivo" y "Ensamble Negra 40") ahora vive **junto, dentro de "Proyectos"**:

- Los 18 proyectos de `02-proyectos/`
- Los 62 eventos históricos de `03-archivo-eventos/`
- La página "Ensamble Negra 40" (`04-ensamble-negra-40.md`), tratada como un proyecto más

Total: **81 fichas individuales**, cada una con su propia página (texto + galería de imágenes + audio si tiene). La página índice de "Proyectos" lista las 81, ordenadas de más reciente a más antigua (podés inferir la fecha del texto de cada ficha — están casi todas fechadas explícitamente; si alguna no tiene fecha clara, dejala al final o pedime el dato puntual). Si el listado se siente muy largo, agregá un buscador/filtro simple (por año o por texto) en la página de índice — usá tu criterio de diseño ahí.

### Textos

Listado simple con: título, autor, y link de descarga al PDF (todos los links de descarga ya están en `05-textos.md`, algunos alojados en negra40.com y otros en un dominio personal del director — mantené el link tal cual, no hace falta descargarlos de nuevo).

### Audio

- El proyecto "C.E.N.A" tiene un audio propio (`CENA_Extracto.mp3`) — insertalo con un reproductor `<audio>` nativo en su ficha.
- Otros proyectos referencian audio en SoundCloud, Bandcamp o Google Drive (no descargable, son de terceros) — en esas fichas, simplemente linkeá o embebé un iframe de SoundCloud si el link lo permite. Los proyectos con esto son: "Puerta de la Patagonia" (SoundCloud), "Mapas para escuchar" (Bandcamp), "Rugido - sentido" (carpetas de Drive), y el evento "Historias de silencios - A 70 años de 4:33" (SoundCloud).

### Contacto

La web vieja tenía un formulario (Nombre, Apellido, Localidad, Email, Mensaje) sin backend visible — como este es un sitio estático en GitHub Pages, no hay forma nativa de recibir el formulario. Elegí una de estas dos opciones (o preguntame si no estás seguro): (a) un servicio externo tipo Formspree/Getform para procesar el form sin backend propio, o (b) reemplazar el formulario por un simple link `mailto:` + los íconos de redes (Facebook, Instagram, Vimeo).

## Idiomas (ES/EN)

- Rutas separadas: `/es/...` y `/en/...`, con selector de idioma visible en el header.
- Todo el contenido scrapeado está en **español**. Necesitás generar las traducciones al inglés de las 81 fichas de proyectos + las 5 páginas principales. Hacé una primera pasada de traducción vos mismo (buena calidad, no traducción literal palabra por palabra, cuidando el tono) y dejalo listo — no hace falta que me preguntes ficha por ficha, pero avisame al final si hay pasajes ambiguos o juegos de palabras que conviene que revise a mano (por ejemplo, los proyectos tienen nombres poéticos que quizás no conviene traducir literal).
- La versión alemana que aparece parcialmente en "Acción Neckar" (el proyecto tenía texto bilingüe alemán/español porque se presentó en Heidelberg) — dejala como nota o pie de página en esa ficha puntual, no hace falta un tercer idioma en todo el sitio.

## Diseño

- **Minimalista**, mucho blanco, tipografía protagonista.
- **Tipografía sans-serif** en todo el sitio — elegí una sans geométrica/neutra que combine con el isotipo (que usa una sans bold redondeada tipo Circular/Poppins/Futura para el "negra40"/"n4o"). Buenas opciones: Inter, Söhne, Neue Haas Grotesk, o similar — elegí una que puedas licenciar/usar libremente (Google Fonts: Inter, Sora, o Space Grotesk son buenas alternativas gratuitas).
- **Relación imagen/texto elegante**: imágenes grandes, con aire alrededor, texto en columnas angostas y legibles (no todo el ancho de pantalla). Las fichas de proyecto son básicamente foto + texto + galería — priorizá que las fotos respiren.
- Paleta: negro sobre blanco (como el isotipo), sin necesidad de colores extra. Opcional: modo oscuro usando la variante del isotipo en negro/blanco invertido.
- Responsive / mobile-first.

## Tareas para vos (Claude Code)

1. Inicializar un proyecto Astro con soporte i18n (`/es/` y `/en/`).
2. Definir content collections para "proyectos" (81 entradas), "textos" y "links", leyendo el contenido de `negra40-contenido/` como fuente (podés migrarlo a `src/content/` en el formato que prefieras, respetando el texto original).
3. Construir las páginas: home, negra 40, proyectos (índice + 81 fichas), textos, links, contacto — en ambos idiomas.
4. Traducir todo el contenido al inglés (ver sección Idiomas).
5. Optimizar y referenciar las imágenes desde `negra40-contenido/imagenes/` (podés moverlas/copiarlas a `src/assets` o `public/` según cómo prefieras manejar la optimización de Astro).
6. Implementar el reproductor de audio para C.E.N.A. y los embeds/links de audio externo donde corresponda.
7. Resolver el formulario de contacto (ver sección Contacto).
8. Configurar GitHub Actions para build + deploy automático a GitHub Pages en cada push a `main`.
9. Dejar un `README.md` explicando cómo correr el sitio en local y cómo se agrega un proyecto nuevo a futuro.

## Preguntas que podés hacerme si hace falta

- Si una ficha del archivo no tiene fecha clara y el orden cronológico importa.
- Si preferís Formspree u otro servicio puntual para el contacto (yo no tengo cuenta creada en ninguno todavía).
- Cualquier duda de traducción de nombres de proyectos con juegos de palabras.

---

*Este documento fue generado automáticamente a partir del contenido migrado de negra40.com el 16 de julio de 2026.*
