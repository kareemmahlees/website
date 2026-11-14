import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    summary: z.string(),
    year: z.string(),
    category: z.string(),
    role: z.string(),
    outcome: z.string(),
    technologies: z.array(z.string()),
  }),
});

const experience = defineCollection({
  loader: glob({ base: "./src/content/experience", pattern: "**/*.md" }),
  schema: z.object({
    order: z.number(),
    years: z.string(),
    role: z.string(),
    company: z.string(),
    location: z.string(),
  }),
});

export const collections = { projects, experience };
