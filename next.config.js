/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:lng-FR",
        destination: "/fr",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/en-GB",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en-gb",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:lng-fr",
        destination: "/:lng-FR",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
