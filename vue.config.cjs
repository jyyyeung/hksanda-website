//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
//var ProgressBarPlugin = require("progress-bar-webpack-plugin");
//import { SitemapPlugin } from "@jahed/webpack-sitemap";
const path = require("path");
//const PrerenderSPAPlugin = require("prerender-spa-plugin");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

//const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

// eslint-disable-next-line

//const a_require = require("esm")(module);
//const routes = require("./src/router/routes.js");
//const routes = import("./src/router/routes.js");

module.exports = {
  transpileDependencies: ["vue-meta"],
  pluginOptions: {
    publicPath: "/",
    assetsDir: "assets",
    apollo: {
      lintGQL: true,
    },
  },
  configureWebpack: {
    plugins: [
      //new SitemapPlugin(sitemap)
      //new BundleAnalyzerPlugin(),
      //new ProgressBarPlugin()
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        outputDir: path.join(__dirname, "prerendered"),
        routes: [
          "/",
          "/about",
          "/about/",
          "/about/our-team",
          "/about/bylaws",
          "/about/media-interviews",
          "/assessments",
          "/assessments/syllabus",
          "/assessments/hk-badge",
          "/course",
          "/course/features",
          "/course/content",
          "/course/class",
          "/course/session",
          "/course/cooperation",
          "/gallery",
          "/gallery/training",
          "/gallery/videos",
          "/contact",
          "/admin",
        ],
      }),
    ],
    resolve: {
      extensions: [".vue"],
    },
  },
};
