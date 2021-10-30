module.exports = {
  ...require("../../jest-preset.js"),
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true,
      },
      useESM: true,
    },
  },
};
