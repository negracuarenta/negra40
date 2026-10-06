import { defineCollection, z } from 'astro:content';

const proyectos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    // Con qué precisión se conoce la fecha. Sirve para no inventar un día en
    // fichas que sólo tienen año —un estreno todavía sin fecha cerrada, por
    // ejemplo—, que hasta ahora se cargaban como 1 de enero y se mostraban así.
    datePrecision: z.enum(['dia', 'mes', 'anio']).default('dia'),
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
    // Instituciones que acompañan el proyecto. Se muestran como logos al pie de
    // la ficha, enlazados a su sitio. Los archivos viven en public/logos/colaboran/.
    colaboran: z
      .array(z.object({ nombre: z.string(), logo: z.string(), url: z.string() }))
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
