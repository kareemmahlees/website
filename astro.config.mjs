import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";

import mdx from "@astrojs/mdx";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "material-theme-darker",
};

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      experimentalReactChildren: true,
    }),
    mdx({
      rehypePlugins: [[rehypePrettyCode, options]],
      syntaxHighlight: false,
    }),
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
