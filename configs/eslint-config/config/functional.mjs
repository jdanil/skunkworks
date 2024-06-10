import * as functional from "eslint-plugin-functional";

export default [
  {
    plugins: {
      functional,
    },
  },
  {
    rules: {
      "functional/immutable-data": [
        "error",
        {
          ignoreAccessorPattern: "this.*", // whitelist classes to avoid false positives
          //   ignoreNonConstDeclarations: {
          //     treatParametersAsConst: true // see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/immutable-data.md#treatparametersasconst
          //   },
        },
      ],
      "functional/no-let": [
        "error",
        {
          allowInFunctions: true, // see https://github.com/eslint-functional/eslint-plugin-functional/blob/main/docs/rules/options/allow-local-mutation.md
        },
      ],
      "functional/no-loop-statements": "error",
      "functional/prefer-property-signatures": "error",
      "functional/readonly-type": ["error", "keyword"],
    },
  },
];
