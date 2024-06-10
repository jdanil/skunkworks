export default {
  ...import("./config/all.mjs"),
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
};
