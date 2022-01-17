/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-15 17:44:59
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 12:59:40
 * @FilePath: /hksanda-website/vue.config.js
 * @Description:
 */
module.exports = {
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
  },
};
