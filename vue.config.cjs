//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
//var ProgressBarPlugin = require("progress-bar-webpack-plugin");
//import { SitemapPlugin } from "@jahed/webpack-sitemap";

const routes = require("./src/router/routes.cjs");

module.exports = {
  //publicPath: process.env.PUBLIC_URL || "/",
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
    publicPath: "/",
    assetsDir: "assets",
    prerenderSpa: {
      //staticDir: path.join(__dirname, "dist"),
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
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
      //postProcess: (route) => {
      //// Defer scripts and tell Vue it's been server rendered to trigger hydration
      //route.html = route.html
      //.replace(/<script (.*?)>/g, "<script $1 defer>")
      //.replace('id="app"', 'id="app" data-server-rendered="true"');
      //return route;
      //}
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
      //new PrerenderSPAPlugin({
      //staticDir: path.
      //})
    ]
  }
};
