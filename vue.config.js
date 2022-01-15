const { routes } = require("./src/router/index.js");

// BUG: Sitemap doesn't generate
module.exports = {
  pluginOptions: {
    sitemap: {
      baseURL: "https://hk-sanda.herokuapp.com/",
      routes,
    },
  },
};
