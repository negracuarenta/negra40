export const ui = {
  es: {
    nav_home: 'negra 40',
    nav_proyectos: 'Proyectos',
    nav_textos: 'Textos',
    nav_links: 'Links',
    nav_contacto: 'Contacto',
    footer_rights: 'Todos los derechos reservados',
    lang_switch: 'English',
    read_more: 'Ver más',
    back_to_proyectos: '← Volver a Proyectos',
    search_placeholder: 'Buscar por título o año…',
    filter_all_years: 'Todos los años',
    gallery: 'Galería',
    listen_on: 'Escuchar en',
    watch_on: 'Ver en',
    open_folder: 'Abrir carpeta en',
    download_pdf: 'Descargar PDF',
    by: 'Por',
    email_us: 'Escribinos',
    find_us: 'Encontranos en',
  },
  en: {
    nav_home: 'negra 40',
    nav_proyectos: 'Projects',
    nav_textos: 'Texts',
    nav_links: 'Links',
    nav_contacto: 'Contact',
    footer_rights: 'All rights reserved',
    lang_switch: 'Español',
    read_more: 'Read more',
    back_to_proyectos: '← Back to Projects',
    search_placeholder: 'Search by title or year…',
    filter_all_years: 'All years',
    gallery: 'Gallery',
    listen_on: 'Listen on',
    watch_on: 'Watch on',
    open_folder: 'Open folder on',
    download_pdf: 'Download PDF',
    by: 'By',
    email_us: 'Email us',
    find_us: 'Find us on',
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof (typeof ui)['es'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}
