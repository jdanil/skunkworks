module.exports = {
  ...require("ts-jest/presets/default-esm/jest-preset.js"),
  coverageProvider: "v8",
  coverageReporters: ["lcov", "text"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  // injectGlobals: false, // uncomment once @jest/globals is supported by extensions
};
