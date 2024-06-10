import * as noSecrets from "eslint-plugin-no-secrets";

export default [
  {
    plugins: {
      "no-secrets": noSecrets,
    },
    rules: {
      "no-secrets/no-secrets": "error",
    },
  },
];
