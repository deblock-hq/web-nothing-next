/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: false,

  compiler: {
    styledComponents: true,
  },
  experimental: {
    forceSwcTransforms: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "deblock-blog.s3.eu-west-3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com",
      },
    ],
  },

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
      {
        source: "/fr",
        destination: "/fr-FR",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
