module.exports = {
  ...require("ts-jest/jest-preset.js"),
  coverageProvider: "v8",
  coverageReporters: ["lcov", "text"],
  setupFilesAfterEnv: ["jest-extended"],
  testEnvironment: "jest-environment-jsdom-sixteen",
};
