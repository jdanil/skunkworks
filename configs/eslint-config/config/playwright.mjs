import playwright from "eslint-plugin-playwright";

export default [
  playwright.configs["flat/recommended"],
  {
    rules: {
      "playwright/expect-expect": "error", // recommended warn
      "playwright/max-nested-describe": "error", // recommended warn
      "playwright/no-commented-out-tests": "error", // recommended off
      "playwright/no-conditional-expect": "error", // recommended warn
      "playwright/no-conditional-in-test": "error", // recommended warn
      "playwright/no-duplicate-hooks": "error", // recommended off
      "playwright/no-element-handle": "error", // recommended warn
      "playwright/no-eval": "error", // recommended warn
      "playwright/no-force-option": "error", // recommended warn
      "playwright/no-nested-step": "error", // recommended warn
      "playwright/no-nth-methods": "error", // recommended off
      "playwright/no-page-pause": "error", // recommended warn
      "playwright/no-raw-locators": "error", // recommended off
      "playwright/no-skipped-test": "error", // recommended warn
      "playwright/no-slowed-test": "error", // recommended off
      "playwright/no-useless-await": "error", // recommended warn
      "playwright/no-useless-not": "error", // recommended warn
      "playwright/no-wait-for-timeout": "error", // recommended warn
      "playwright/prefer-comparison-matcher": "error", // recommended off
      "playwright/prefer-equality-matcher": "error", // recommended off
      "playwright/prefer-hooks-in-order": "error", // recommended off
      "playwright/prefer-hooks-on-top": "error", // recommended off
      "playwright/prefer-locator": "error", // recommended off
      "playwright/prefer-lowercase-title": [
        "error", // recommended off
        { ignoreTopLevelDescribe: true },
      ],
      "playwright/prefer-native-locators": "error", // recommended off
      "playwright/prefer-strict-equal": "error", // recommended off
      "playwright/prefer-to-be": "error", // recommended off
      "playwright/prefer-to-contain": "error", // recommended off
      "playwright/prefer-to-have-count": "error", // recommended off
      "playwright/prefer-to-have-length": "error", // recommended off
      "playwright/require-to-throw-message": "error", // recommended off
      "playwright/require-top-level-describe": "error", // recommended off
    },
  },
];
