import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date(),
    pubDate: z.coerce.date().optional(),
    tags: z.string().array().min(1),
    showContents: z.boolean().optional(),
  }),
});

const recipes = defineCollection({
  loader: glob({ base: "./src/content/recipes", pattern: "**/*.{yaml,yml}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ingredients: z.string().array().min(1),
    method: z.string().array().min(1),
  }),
});

export const collections = { blog, recipes };
