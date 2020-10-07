module.exports = {
  ...require("ts-jest/jest-preset.js"),
  coverageProvider: "v8",
  coverageReporters: ["lcov", "text"],
  injectGlobals: false,
  setupFilesAfterEnv: ["@testing-library/jest-dom", "jest-extended"],
};
