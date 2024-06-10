import * as deprecation from "eslint-plugin-deprecation";

export default [
  {
    plugins: {
      deprecation,
    },
    rules: {
      "deprecation/deprecation": "error",
    },
  },
];
