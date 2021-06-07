module.exports = {
  ...require("ts-jest/jest-preset.js"),
  coverageProvider: "v8",
  coverageReporters: ["lcov", "text"],
  // injectGlobals: false, // uncomment once @jest/globals is supported by extensions
  setupFilesAfterEnv: ["@testing-library/jest-dom", "jest-extended"],
};
