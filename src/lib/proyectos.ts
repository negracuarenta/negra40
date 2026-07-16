import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export async function getProyectos(lang: Lang) {
  const all = await getCollection('proyectos');
  const filtered = all.filter((entry) => entry.slug.startsWith(`${lang}/`));
  return filtered.sort(sortByDateThenOrder);
}

function sortByDateThenOrder(a: CollectionEntry<'proyectos'>, b: CollectionEntry<'proyectos'>) {
  const aDate = a.data.date ? new Date(a.data.date).getTime() : null;
  const bDate = b.data.date ? new Date(b.data.date).getTime() : null;

  if (aDate !== null && bDate !== null) return bDate - aDate;
  if (aDate !== null) return -1;
  if (bDate !== null) return 1;
  return a.data.order - b.data.order;
}

export function slugOf(entry: CollectionEntry<'proyectos'>) {
  return entry.slug.replace(/^(es|en)\//, '');
}
