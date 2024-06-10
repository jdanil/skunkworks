import arrayFunc from "eslint-plugin-array-func";

export default [
  arrayFunc.configs.all,
  {
    rules: {
      "array-func/prefer-array-from": "off", // all error, prefer spread
    },
  },
];
