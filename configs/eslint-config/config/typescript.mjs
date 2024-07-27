import { configs, parser, plugin } from "typescript-eslint";

export default [
  {
    files: ["**/*.ts?(x)"],
    languageOptions: {
      parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      "@typescript-eslint": plugin,
    },
  },
  ...configs.strictTypeChecked,
  ...configs.stylisticTypeChecked,
  {
    files: [
      "**/__tests__/**/*.{[cm]js,[jt]s?(x)}",
      "**/*.@(spec|test).{[cm]js,[jt]s?(x)}",
    ],
    rules: {
      "@typescript-eslint/no-magic-numbers": "off", // not a concern for tests
    },
  },
  {
    rules: {
      "@typescript-eslint/array-type": [
        "error",
        {
          default: "array-simple", // default array
        },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": true, // default allow-with-description
        },
      ],
      "class-methods-use-this": "off", // eslint base rule, has extension rule
      "@typescript-eslint/class-methods-use-this": "error", // strict off
      "consistent-return": "off", // eslint base rule, has extension rule
      "@typescript-eslint/consistent-return": "error", // strict off
      "@typescript-eslint/consistent-type-definitions": [
        "error",
        "type", // default interface
      ],
      "@typescript-eslint/consistent-type-exports": [
        "error", // strict off
        {
          fixMixedExportsWithInlineTypeSpecifier: true, // default false
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error", // strict off
        {
          fixStyle: "inline-type-imports", // default separate-type-imports
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "error", // strict off
      "@typescript-eslint/explicit-member-accessibility": "error", // strict off
      "@typescript-eslint/explicit-module-boundary-types": "error", // strict off
      "init-declarations": "off", // eslint base rule, has extension rule
      "@typescript-eslint/init-declarations": "error", // strict off
      "@typescript-eslint/member-ordering": "error", // strict off
      "@typescript-eslint/method-signature-style": "error", // strict off
      "@typescript-eslint/naming-convention": [
        "error", // strict off
        [
          {
            // default
            selector: "default",
            format: ["camelCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            // default
            selector: "import",
            format: ["camelCase", "PascalCase"],
          },
          {
            // default
            selector: "variable",
            format: [
              "camelCase",
              "UPPER_CASE",
              "PascalCase", // https://airbnb.io/javascript/react/#naming
            ],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            // default
            selector: "typeLike",
            format: ["PascalCase"],
          },
          {
            // https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md#enum
            selector: "enumMember",
            format: ["PascalCase"],
          },
          {
            // previously @typescript-eslint/generic-type-naming
            selector: "typeParameter",
            format: ["PascalCase"],
            prefix: ["T"],
          },
        ],
      ],
      "@typescript-eslint/no-invalid-this": "error", // strict off
      "no-loop-func": "off", // eslint base rule, has extension rule
      "@typescript-eslint/no-loop-func": "error", // strict off
      "no-magic-numbers": "off", // eslint base rule, has extension rule
      "@typescript-eslint/no-magic-numbers": [
        "error", // strict off
        {
          ignore: [0, 1], // allow commonly used numbers
        },
      ],
      "no-redeclare": "off", // eslint base rule, has extension rule
      "@typescript-eslint/no-redeclare": "error", // strict off
      "@typescript-eslint/no-require-imports": "error", // strict off
      "no-shadow": "off", // eslint base rule, has extension rule
      "@typescript-eslint/no-shadow": [
        "error", // strict off
        {
          ignoreOnInitialization: true, // default false
        },
      ],
      "@typescript-eslint/no-unnecessary-parameter-property-assignment":
        "error", // strict off
      "@typescript-eslint/no-unnecessary-qualifier": "error", // strict off
      "@typescript-eslint/no-unsafe-function-type": "error", // strict off
      "@typescript-eslint/no-unsafe-unary-minus": "error", // strict off
      "no-unused-expressions": "off", // eslint base rule, has extension rule
      "@typescript-eslint/no-unused-expressions": "error", // strict off
      "no-use-before-define": "off", // eslint base rule, has extension rule
      "@typescript-eslint/no-use-before-define": "error", // strict off
      "@typescript-eslint/no-useless-empty-export": "error", // strict off
      "@typescript-eslint/no-wrapper-object-types": "error", // strict off
      "@typescript-eslint/parameter-properties": "error", // strict off
      "prefer-destructuring": "off", // eslint base rule, has extension rule
      "@typescript-eslint/prefer-destructuring": "error", // strict off
      "@typescript-eslint/prefer-enum-initializers": "error", // strict off
      "@typescript-eslint/prefer-find": "error", // strict off
      "@typescript-eslint/prefer-readonly": "error", // strict off
      "@typescript-eslint/prefer-readonly-parameter-types": [
        "error", // strict off
        {
          ignoreInferredTypes: true, // ignore types from external dependencies, see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md#ignoreinferredtypes
        },
      ],
      "@typescript-eslint/promise-function-async": "error", // strict off
      "@typescript-eslint/require-array-sort-compare": "error", // strict off
      "@typescript-eslint/return-await": "error", // strict off
      "@typescript-eslint/sort-type-constituents": "error", // strict off
      "@typescript-eslint/switch-exhaustiveness-check": "error", // strict off
    },
  },
];
