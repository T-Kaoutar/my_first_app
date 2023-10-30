/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = nextConfig;

module.exports = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "" : undefined,
  experimental: {
    appDir: true,
    serverActions: true,
  },
};
