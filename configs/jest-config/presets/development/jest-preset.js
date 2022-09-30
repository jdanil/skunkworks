module.exports = {
  ...require("../../jest-preset.js"),
  transform: {
    "^.+\\.m?[jt]sx?$": [
      "ts-jest",
      {
        diagnostics: {
          warnOnly: true,
        },
        useESM: true,
      },
    ],
  },
};
