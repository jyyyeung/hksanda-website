const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

const plugins = []

if (process.env.NODE_ENV === 'prerender') {
    plugins.push(new PrerenderSPAPlugin({
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
    }),)
}

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
        plugins: plugins,
        resolve: {
            extensions: [".vue"],
        },
    },
};
