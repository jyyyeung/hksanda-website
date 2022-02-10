//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
//var ProgressBarPlugin = require("progress-bar-webpack-plugin");
//import { SitemapPlugin } from "@jahed/webpack-sitemap";

const routes = require("./src/router/routes.cjs");

module.exports = {
  publicPath: process.env.PUBLIC_URL || "/",
  transpileDependencies: ["vue-meta"],
  pluginOptions: {
    sitemap: {
      baseURL: "https://hksanda.com",
      outputDir: ".",
      pretty: true,
      routes,
      defaults: {
        lastmod: new Date().toISOString().slice(0, 10),
        changefreq: "always",
        priority: 1.0
      }
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        "/",
        "/about-us",
        "/contact-us",
        "/gallery/training",
        "/gallery/videos",
        "/course/content",
        "/course/session",
        "/course/class",
        "/about/our-team",
        "/about/media-interviews"
      ],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true
    },
    apollo: {
      lintGQL: true
    }
  },
  configureWebpack: {
    plugins: [
      //new SitemapPlugin(sitemap)
      //new BundleAnalyzerPlugin(),
      //new ProgressBarPlugin()
    ]
  }
};
