module.exports = {
  ...require("ts-jest/jest-preset.js"),
  coverageProvider: "v8",
  coverageReporters: ["lcov", "text"],
  setupFilesAfterEnv: ["@testing-library/jest-dom", "jest-extended"],
};
