import { defineCollection, z } from "astro:content";
// Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    github_url: z.string().url().optional(),
    challenge_url: z.string().url().optional(),
    challenge_name: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
