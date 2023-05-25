/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["redux-saga.js.org"],
    minimumCacheTTL: 1200,
  },
};

module.exports = nextConfig;
