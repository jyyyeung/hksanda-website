module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es6: true,
  },

  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "prettier"],

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ["prettier"],
  rules: {},
  ignorePatterns: ["/node_modules/**/*", "**/vendor/*.js"],

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
};
