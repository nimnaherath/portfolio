module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: "standalone",
  experimental: {
    images: { // This will cause an error
      allowFutureImage: true,
    },
  },
};
