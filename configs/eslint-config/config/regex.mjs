import * as regexp from "eslint-plugin-regexp";

export default [
  regexp.configs["flat/recommended"],
  {
    rules: {
      "regexp/confusing-quantifier": "error", // recommended warn
      "regexp/hexadecimal-escape": "error", // recommended off
      "regexp/letter-case": "error", // recommended off
      "regexp/no-control-character": "error", // recommended off
      "regexp/no-empty-alternative": "error", // recommended warn
      "regexp/no-lazy-ends": "error", // recommended warn
      "regexp/no-octal": "error", // recommended off
      "regexp/no-potentially-useless-backreference": "error", // recommended warn
      "regexp/no-standalone-backslash": "error", // recommended off
      "regexp/no-super-linear-move": "error", // recommended off
      "regexp/no-useless-flag": "error", // recommended warn
      "regexp/optimal-lookaround-quantifier": "error", // recommended warn
      "regexp/prefer-escape-replacement-dollar-char": "error", // recommended off
      "regexp/prefer-named-backreference": "error", // recommended off
      "regexp/prefer-named-capture-group": "error", // recommended off
      "regexp/prefer-named-replacement": "error", // recommended off
      "regexp/prefer-quantifier": "error", // recommended off
      "regexp/prefer-regexp-exec": "error", // recommended off
      "regexp/prefer-regexp-test": "error", // recommended off
      "regexp/prefer-result-array-groups": "error", // recommended off
      "regexp/require-unicode-regexp": "error", // recommended off
      "regexp/require-unicode-sets-regexp": "error", // recommended off
      "regexp/sort-alternatives": "error", // recommended off
      "regexp/sort-character-class-elements": "error", // recommended off
      "regexp/unicode-property": "error", // recommended off
    },
  },
];
