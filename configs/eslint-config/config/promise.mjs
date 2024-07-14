import promise from "eslint-plugin-promise";

export default [
  promise.configs["flat/recommended"],
  {
    rules: {
      "promise/no-nesting": "error", // recommended warn
      "promise/no-promise-in-callback": "error", // recommended warn
      "promise/no-callback-in-promise": "error", // recommended warn
      "promise/no-multiple-resolved": "error", // recommended off
      "promise/no-return-in-finally": "error", // recommended warn
      "promise/valid-params": "error", // recommended warn
    },
  },
];
