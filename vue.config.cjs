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
        "/about",
        "/about/our-team",
        "/about/bylaws",
        "/about/media-interviews",
        "/assessments/syllabus",
        "/assessments/hk-badge",
        "/course/features",
        "/course/content",
        "/course/class",
        "/course/session",
        "/course/cooperation",
        "/gallery/training",
        "/gallery/videos",
        "/contact"
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
