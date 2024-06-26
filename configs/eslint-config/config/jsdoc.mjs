import * as jsdoc from "eslint-plugin-jsdoc";

export default [
  jsdoc.configs["flat/recommended-error"],
  {
    rules: {
      "jsdoc/check-examples": [
        "off", // recommended-error off, watch https://github.com/eslint/eslint/issues/14745
        { checkDefaults: true, checkParams: true, checkProperties: true },
      ],
      "jsdoc/check-indentation": "error", // recommended-error off
      "jsdoc/check-syntax": "error", // recommended-error off
      "jsdoc/match-description": "error", // recommended-error off
      "jsdoc/no-bad-blocks": "error", // recommended-error off
      "jsdoc/no-types": "error", // recommended-error off
      "jsdoc/require-asterisk-prefix": "error", // recommended-error off
      "jsdoc/require-description-complete-sentence": "error", // recommended-error off
      "jsdoc/require-param-type": "off", // recommended-error error
      "jsdoc/require-property": "off", // recommended-error error
      "jsdoc/require-property-type": "off", // recommended-error error
      "jsdoc/require-returns": "off", // recommended-error error
      "jsdoc/require-returns-type": "off", // recommended-error error
      "jsdoc/require-yields": "off", // recommended-error error
      "jsdoc/sort-tags": "error", // recommended-error off
    },
  },
];
