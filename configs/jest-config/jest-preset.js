module.exports = {
  ...require("ts-jest/presets/js-with-ts-esm/jest-preset.js"),
  cacheDirectory: "<rootDir>/cache/jest",
  coverageProvider: "v8",
  coverageReporters: ["lcov", "text"],
  // injectGlobals: false, // uncomment once @jest/globals is supported by extensions
  testEnvironmentOptions: {
    globalsCleanup: "on",
  },
  transform: {
    "^.+\\.m?[jt]sx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  workerThreads: true,
};
