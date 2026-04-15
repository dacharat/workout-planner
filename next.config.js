/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/workout-planner',
  assetPrefix: '/workout-planner/',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
