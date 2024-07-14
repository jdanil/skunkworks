import tanstackQuery from "@tanstack/eslint-plugin-query";

export default [
  ...tanstackQuery.configs["flat/recommended"],
  {
    rules: {
      "@tanstack/query/no-rest-destructuring": "error", // recommended warn
    },
  },
];
