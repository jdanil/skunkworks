import jestConfigPreset from "../../jest-preset.mjs";

export default {
  ...jestConfigPreset,
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true,
      },
      useESM: true,
    },
  },
};
