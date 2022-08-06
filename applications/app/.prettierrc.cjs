module.exports = {
  ...require("@package/prettier-config"),
  overrides: [
    {
      files: "*.ejs",
      options: { parser: "html" },
    },
    {
      files: "*.svg",
      options: { parser: "html" },
    },
  ],
};
