import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Lang } from '../i18n/ui';

/** Los cinco actos de NIDO, en orden. El slug es lo que va en la URL. */
export const ACTOS = [
  { n: 1, slug: 'acto-i', romano: 'I' },
  { n: 2, slug: 'acto-ii', romano: 'II' },
  { n: 3, slug: 'acto-iii', romano: 'III' },
  { n: 4, slug: 'acto-iv', romano: 'IV' },
  { n: 5, slug: 'acto-v', romano: 'V' },
] as const;

export type Acto = (typeof ACTOS)[number];

/**
 * Los tres idiomas en que se publica el guion, cada uno nombrado en el suyo.
 * El orden es el de lectura en la página: el original primero.
 */
export const IDIOMAS = [
  { codigo: 'es', nombre: 'Castellano', htmlLang: 'es' },
  { codigo: 'en', nombre: 'English', htmlLang: 'en' },
  { codigo: 'de', nombre: 'Deutsch', htmlLang: 'de' },
] as const;

export type IdiomaActo = (typeof IDIOMAS)[number]['codigo'];

/**
 * Una pieza del acto, ya clasificada. El texto fuente no lleva etiquetas: la
 * estructura se deduce de la forma de cada bloque, que es como está escrito el
 * guion y como lo va a seguir escribiendo quien lo edite.
 */
export type Bloque =
  | { tipo: 'titulo'; texto: string }
  | { tipo: 'pausa' }
  | { tipo: 'parlamento'; quien: string | null; lineas: string[] }
  | { tipo: 'parrafo'; lineas: string[] };

// Relativo a este módulo, no al directorio de trabajo: así no depende de desde
// dónde se corra el build.
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../data/actos');

// Quién habla, en los tres idiomas. El guion lo marca entre paréntesis al
// empezar el parlamento: «(árbol) —Quedate.»
const QUIEN = /^\((árbol|pájaro|tree|bird|Baum|Vogel)\)\s*(.*)$/;

/**
 * Separa un acto en bloques.
 *
 * Un párrafo puede tener varias líneas: en el guion los cortes de línea dentro
 * de un párrafo son versos —«El árbol aceptó. / Pero con una condición.»— y hay
 * que respetarlos, así que no se unen.
 */
export function leerActo(n: number, idioma: IdiomaActo): Bloque[] {
  const crudo = fs.readFileSync(path.join(RAIZ, idioma, `acto-${n}.txt`), 'utf-8');
  return crudo
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean)
    .map((b): Bloque => {
      if (/^Texto? \d+$/.test(b)) return { tipo: 'titulo', texto: b };
      if (b === '(…)') return { tipo: 'pausa' };
      const lineas = b.split('\n');
      // La marca de personaje se separa del parlamento para componerla aparte,
      // igual en los cinco actos y en los tres idiomas.
      const conQuien = lineas[0].match(QUIEN);
      if (conQuien) {
        return {
          tipo: 'parlamento',
          quien: conQuien[1],
          lineas: [conQuien[2], ...lineas.slice(1)],
        };
      }
      if (lineas[0].startsWith('—')) return { tipo: 'parlamento', quien: null, lineas };
      return { tipo: 'parrafo', lineas };
    });
}

/** El título del acto, en romanos, igual en los cinco. */
export function tituloActo(acto: Acto, lang: Lang): string {
  return `${lang === 'en' ? 'Act' : 'Acto'} ${acto.romano}`;
}
