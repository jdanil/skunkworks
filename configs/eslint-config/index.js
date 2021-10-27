require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: {
    es6: true,
  },
  extends: [require.resolve("./config/all.yaml")],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
};
