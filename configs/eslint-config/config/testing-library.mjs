import * as jestDom from "eslint-plugin-jest-dom";
import * as testingLibrary from "eslint-plugin-testing-library";

export default [
  jestDom.configs["flat/recommended"],
  testingLibrary.configs["flat/react"],
  {
    rules: {
      "testing-library/no-debugging-utils": "error", // react warn
      "testing-library/prefer-explicit-assert": "error", // react off
      "testing-library/prefer-user-event": "error", // react off
    },
  },
];
