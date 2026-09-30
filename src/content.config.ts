import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    benefits: z.array(z.string()),
  }),
});

const metalsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/metals' }),
  schema: z.object({
    title: z.string(),
    subTypes: z.array(z.string()),
    shortDesc: z.string(),
    density: z.string().optional(),
    featured: z.boolean().default(true),
    order: z.number(),
  }),
});

export const collections = {
  services: servicesCollection,
  metals: metalsCollection,
};
