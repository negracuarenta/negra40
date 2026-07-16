import { defineCollection, z } from 'astro:content';

const proyectos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    // Orden descendente (más reciente primero) para fichas sin fecha explícita clara.
    order: z.number(),
    category: z.enum(['proyecto', 'archivo', 'ensamble']),
    location: z.string().optional(),
    images: z.array(z.string()).default([]),
    audio: z
      .object({
        type: z.enum(['native', 'soundcloud', 'bandcamp', 'drive', 'vimeo']),
        url: z.string(),
        label: z.string().optional(),
      })
      .optional(),
    // Solo usado en la ficha de Acción Neckar (texto bilingüe alemán/español original).
    germanNote: z.string().optional(),
  }),
});

const paginas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const textos = defineCollection({
  type: 'content',
  schema: z.object({
    items: z.array(
      z.object({
        title: z.string(),
        author: z.string().optional(),
        note: z.string().optional(),
        pdfUrl: z.string(),
      })
    ),
  }),
});

const links = defineCollection({
  type: 'content',
  schema: z.object({
    items: z.array(
      z.object({
        title: z.string(),
        url: z.string(),
      })
    ),
  }),
});

export const collections = { proyectos, paginas, textos, links };
