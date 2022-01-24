//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
//var ProgressBarPlugin = require("progress-bar-webpack-plugin");
//import { SitemapPlugin } from "@jahed/webpack-sitemap";

//const { routes } = require("./src/router/index.js");
const routes = require("./src/router/routes.cjs");

module.exports = {
  transpileDependencies: ["vue-meta"],
  pluginOptions: {
    sitemap: {
      baseURL: "https://hk-sanda.herokuapp.com",
      outputDir: ".",
      pretty: true,
      routes,
      defaults: {
        lastmod: new Date().toISOString().slice(0, 10),
        changefreq: "always",
        priority: 1.0,
      },
    },
    prerenderSpa: {
      //   registry: undefined,
      //   renderRoutes: [
      //     "/",
      //     "/about",
      //     "/contact",
      //     "/gallery/training",
      //     "/gallery/videos",
      //     "/course/content",
      //     "/course/session",
      //     "/course/class",
      //     "/about/our-team",
      //     "/about/media-interviews",
      //   ],
      //   useRenderEvent: false,
      //   headless: true,
      //   onlyProduction: true,
    },
    apollo: {
      lintGQL: true,
    },
  },
  configureWebpack: {
    plugins: [
      //new SitemapPlugin(sitemap)
      //new BundleAnalyzerPlugin(),
      //new ProgressBarPlugin()
    ],
  },
};
