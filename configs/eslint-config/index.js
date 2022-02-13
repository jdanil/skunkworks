require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  env: {
    es2022: true,
  },
  extends: [require.resolve("./config/all.yaml")],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
};
