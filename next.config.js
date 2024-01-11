/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.icons8.com", "cdn.simpleicons.org"],
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
