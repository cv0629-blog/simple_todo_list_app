/** @type {import('next').NextConfig} */
const { withSuperjson } = require("next-superjson");

const nextConfig = withSuperjson()({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
