import { defineCollection, getCollection } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: [
      "**/*.{md,mdx}",
      ...(!import.meta.env.DEV ? ["!**/*.draft.*"] : []),
    ],
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updatedDate: z.coerce.date().optional(),
    tags: z.string().array().min(1),
    showContents: z.boolean().optional(),
  }),
});

for (const post of await getCollection("blog")) {
  if (!/^\d{4}-\d{2}-\d{2}-.*/.test(post.id)) {
    throw new Error(
      `Blog post file name invalid. Must start with yyyy-MM-dd: ${post.id}`,
    );
  }
}

const recipes = defineCollection({
  loader: glob({ base: "./src/content/recipes", pattern: "**/*.{yaml,yml}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ingredients: z.string().array().min(1),
    method: z.string().array().min(1),
    notes: z.string().array().optional(),
  }),
});

export const collections = { blog, recipes };
