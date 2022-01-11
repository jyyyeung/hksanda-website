module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es6: true,
  },

  extends: [
    // "plugin:vue/vue3-essential", "eslint:recommended", "prettier"
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "prettier",
    "@vue/typescript",
  ],

  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ["prettier"],
  rules: {},
  ignorePatterns: ["/node_modules/**/*", "**/vendor/*.js"],
};
