/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr-FR", "en-FR"],
  //   localeDetection: false,
  // },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:lng-FR",
  //       destination: "/FR",
  //     },
  //   ];
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: "/en-GB",
  //       destination: "/",
  //       permanent: true,
  //     },
  //     {
  //       source: "/:lng-fr",
  //       destination: "/:lng-FR",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
