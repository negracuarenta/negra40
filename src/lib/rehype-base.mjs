/**
 * Antepone el `base` del sitio a los enlaces internos escritos en Markdown.
 *
 * El sitio se publica bajo /negra40/, pero en los .md los enlaces a otras
 * fichas están escritos como rutas absolutas del sitio —/es/proyectos/…—, que
 * es lo natural al escribir contenido y lo que resuelve bien en el servidor de
 * desarrollo. En producción ese enlace apunta a la raíz del dominio y no
 * existe: los dos que había en el sitio (San Antonino 2024 y Rugido sentido)
 * daban 404.
 *
 * Los componentes .astro ya resuelven esto con withBase(); esto es lo mismo
 * para el contenido, aplicado en el momento de compilar el Markdown. Así quien
 * escribe un .md sigue poniendo /es/… y no tiene que acordarse del prefijo.
 *
 * Quedan fuera: las URL absolutas con esquema, las protocol-relative (//…),
 * los anclajes y las rutas que ya traen el prefijo.
 */
export function rehypeBase({ base }) {
  const prefijo = (base ?? '/').replace(/\/$/, '');
  if (!prefijo) return () => {};

  const prefijar = (valor) => {
    if (typeof valor !== 'string') return valor;
    if (!valor.startsWith('/')) return valor;
    if (valor.startsWith('//')) return valor;
    if (valor === prefijo || valor.startsWith(`${prefijo}/`)) return valor;
    return prefijo + valor;
  };

  return () => (arbol) => {
    const recorrer = (nodo) => {
      if (nodo.type === 'element') {
        if (nodo.tagName === 'a') nodo.properties.href = prefijar(nodo.properties.href);
        if (nodo.tagName === 'img') nodo.properties.src = prefijar(nodo.properties.src);
      }
      for (const hijo of nodo.children ?? []) recorrer(hijo);
    };
    recorrer(arbol);
  };
}
