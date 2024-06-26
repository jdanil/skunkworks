import unicorn from "eslint-plugin-unicorn";

export default [
  unicorn.configs["flat/recommended"],
  {
    rules: {
      "unicorn/custom-error-definition": "error", // recommended off
      "unicorn/filename-case": [
        "error", // recommended error
        {
          // recommended kebabCase, allow pascalCase for jsx
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
      "unicorn/import-style": [
        "error", // recommended error
        {
          extendDefaultStyles: false,
          styles: {
            path: {
              named: true, // default import requires typescript compiler option esModuleInterop
            },
            util: {
              named: true, // default import requires typescript compiler option esModuleInterop
            },
          },
        },
      ],
      "unicorn/no-array-for-each": "off", // recommended error, prefer clarity and functional style of foreach
      "unicorn/no-array-reduce": "off", // recommended error, prefer brevity and functional style of reduce
      "unicorn/no-nested-ternary": "off", // recommended error, stylistic rule conflicts with prettier
      "unicorn/no-null": "off", // recommended error, null is sometimes useful
      "unicorn/prefer-array-find": [
        "error", // recommended error
        { checkFromLast: true },
      ],
      "unicorn/prefer-export-from": [
        "error", // recommended error
        {
          ignoreUsedVariables: true, // ignore used variables to avoid duplication
        },
      ],
      "unicorn/relative-url-style": [
        "error", // recommended error
        "always", // prefer explicitly indicating relative urls
      ],
      "unicorn/switch-case-braces": [
        "error", // recommended error
        "avoid", // prefer avoiding unnecessary braces
      ],
    },
  },
];
