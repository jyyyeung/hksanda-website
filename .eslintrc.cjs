//const schema = "./lambda/schema.js";

module.exports = {
    root: true,

    env: {
        node: true,
        browser: true,
        es6: true,
    },

    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:vuejs-accessibility/recommended",
        "plugin:vue/vue3-recommended",
    ],

    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },

    plugins: [
        "vue",
        //"graphql",
        "vuejs-accessibility",
        "prettier",
    ],
    rules: {
        "no-unused-vars": "warn",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prettier/prettier": 0,
        indent: ["error", 4],
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
    },
    ignorePatterns: ["/node_modules/**/*", "**/vendor/*.js"],

    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                mocha: true,
            },
        },
    ],
};
