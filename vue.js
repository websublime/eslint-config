const baseRules = require("./rules/base");
const vueRules = require("./rules/vue");

const parser = "vue-eslint-parser";

const configs = [
  "plugin:vue/recommended",
  "@vue/typescript/recommended",
  // Disable rules which might conflict with Prettier
  "prettier",
  "prettier/@typescript-eslint",
];

const plugins = [
  "import",
  "jest",
  "new-with-error",
  "simple-import-sort",
  "sort-class-members",
  "sort-destructure-keys",
  "switch-case",
];

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser,
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: configs,
  plugins,
  rules: {
    ...baseRules,
    ...vueRules,
  },
};
