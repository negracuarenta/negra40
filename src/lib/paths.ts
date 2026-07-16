/** Joins the site's BASE_URL with a public/ asset path, guaranteeing exactly one slash between them. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
