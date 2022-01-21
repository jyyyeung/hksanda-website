module.exports = {
  transpileDependencies: ["vue-meta"],
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        "/",
        "/about",
        "/contact",
        "/gallery/training",
        "/gallery/videos",
        "/course/content",
        "/course/session",
        "/course/class",
        "/about/our-team",
        "/about/media-interviews",
      ],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true,
    },
    apollo: {
      lintGQL: true,
    },
  },
};
