import eslint from "@eslint/js";

export default [
  eslint.configs.recommended,
  {
    files: ["*.[jt]sx"],
    rules: {
      "max-lines-per-function": [
        "error",
        {
          max: 75, // bump limit for jsx due to formatting
        },
      ],
    },
  },
  {
    files: [
      "**/__tests__/**/*.{[cm]js,[jt]s?(x)}",
      "**/*.@(spec|test).{[cm]js,[jt]s?(x)}",
    ],
    rules: {
      "max-lines": "off", // avoid limits on the number of test cases
      "max-lines-per-function": "off", // jest tests and suites are functions
      "max-statements": "off", // avoid limits on the number of test cases
    },
  },
  {
    files: ["*.d.ts"],
    rules: {
      "init-declarations": "off", // ignore type definition files which do not initialise values
    },
  },
  {
    rules: {
      "accessor-pairs": "error", // recommended off
      "array-callback-return": [
        "error", // recommended off
        {
          allowImplicit: true, // avoid conflict w/ unicorn/no-useless-undefined
        },
      ],
      "arrow-body-style": "error", // recommended off
      "block-scoped-var": "error", // recommended off
      "class-methods-use-this": "error", // recommended off
      complexity: "error", // recommended off
      "consistent-return": "error", // recommended off
      curly: [
        "error", // recommended off
        "all",
      ],
      "default-case": "error", // recommended off
      "default-case-last": "error", // recommended off
      "dot-notation": "error", // recommended off
      eqeqeq: [
        "error", // recommended off
        "smart",
      ],
      "func-style": "error", // recommended off
      "guard-for-in": "error", // recommended off
      "init-declarations": "error", // recommended off
      "logical-assignment-operators": [
        "error", // recommended off
        "always",
        { enforceForIfStatements: true },
      ],
      "max-classes-per-file": "error", // recommended off
      "max-depth": "error", // recommended off
      "max-lines": "error", // recommended off
      "max-lines-per-function": "error", // recommended off
      "max-nested-callbacks": "error", // recommended off
      "max-params": "error", // recommended off
      "max-statements": "error", // recommended off
      "multiline-comment-style": [
        "error", // recommended off
        "separate-lines", // compatible with IDE line comment shortcuts
      ],
      "new-cap": "error", // recommended off
      "no-alert": "error", // recommended off
      "no-array-constructor": "error", // recommended off
      "no-await-in-loop": "error", // recommended off
      "no-caller": "error", // recommended off
      "no-console": "error", // recommended off
      "no-constant-binary-expression": "error", // recommended off
      "no-constructor-return": "error", // recommended off
      "no-empty-function": "error", // recommended off
      "no-empty-static-block": "error", // recommended off
      "no-eval": "error", // recommended off
      "no-extend-native": "error", // recommended off
      "no-extra-bind": "error", // recommended off
      "no-extra-label": "error", // recommended off
      "no-implicit-globals": "error", // recommended off
      "no-implied-eval": "error", // recommended off
      "no-invalid-this": "error", // recommended off
      "no-iterator": "error", // recommended off
      "no-label-var": "error", // recommended off
      "no-labels": "error", // recommended off
      "no-lone-blocks": "error", // recommended off
      "no-lonely-if": "error", // recommended off
      "no-loop-func": "error", // recommended off
      "no-multi-str": "error", // recommended off
      "no-negated-condition": "error", // recommended off
      "no-new": "error", // recommended off
      "no-new-func": "error", // recommended off
      "no-new-native-nonconstructor": "error", // recommended off
      "no-new-symbol": "off", // recommended error, replaced by no-new-native-nonconstructor
      "no-new-wrappers": "error", // recommended off
      "no-object-constructor": "error", // recommended off
      "no-octal-escape": "error", // recommended off
      "no-param-reassign": "error", // recommended off
      "no-promise-executor-return": "error", // recommended off
      "no-proto": "error", // recommended off
      "no-restricted-exports": [
        "error", // recommended off
        {
          restrictDefaultExports: {
            direct: true,
            defaultFrom: true,
            named: true,
            namedFrom: true,
            namespaceFrom: true,
          },
        },
      ],
      "no-restricted-syntax": [
        "error", // recommended off
        { selector: ForInStatement, message: "Prefer for...of statements." },
      ],
      "no-return-assign": "error", // recommended off
      "no-return-await": "error", // recommended off
      "no-script-url": "error", // recommended off
      "no-self-compare": "error", // recommended off
      "no-shadow": [
        "error", // recommended off
        { ignoreOnInitialization: true },
      ],
      "no-template-curly-in-string": "error", // recommended off
      "no-throw-literal": "error", // recommended off
      "no-undef-init": "error", // recommended off
      "no-undefined": "error", // recommended off
      "no-unmodified-loop-condition": "error", // recommended off
      "no-unneeded-ternary": "error", // recommended off
      "no-unreachable-loop": "error", // recommended off
      "no-unsafe-optional-chaining": [
        "error", // recommended error
        {
          disallowArithmeticOperators: true, // recommended false
        },
      ],
      "no-unused-expressions": [
        "error", // recommended off
        { enforceForJSX: true },
      ],
      "no-unused-vars": [
        "error", // recommended error
        {
          destructuredArrayIgnorePattern: "^_", // allow destructured elements prefixed w/ an underscore
        },
      ],
      "no-unused-private-class-members": "error", // recommended off
      "no-use-before-define": "error", // recommended off
      "no-useless-call": "error", // recommended off
      "no-useless-computed-key": "error", // recommended off
      "no-useless-concat": "error", // recommended off
      "no-useless-constructor": "error", // recommended off
      "no-useless-rename": "error", // recommended off
      "no-useless-return": "error", // recommended off
      "no-var": "error", // recommended off
      "no-void": [
        "error", // recommended off
        {
          allowAsStatement: true, // avoid conflict w/ @typescript-eslint/no-floating-promises
        },
      ],
      "object-shorthand": "error", // recommended off
      "one-var": [
        "error", // recommended off
        "never",
      ],
      "prefer-arrow-callback": "error", // recommended off
      "prefer-const": "error", // recommended off
      "prefer-destructuring": "error", // recommended off
      "prefer-exponentiation-operator": "error", // recommended off
      "prefer-named-capture-group": "error", // recommended off
      "prefer-numeric-literals": "error", // recommended off
      "prefer-object-has-own": "error", // recommended off
      "prefer-object-spread": "error", // recommended off
      "prefer-promise-reject-errors": "error", // recommended off
      "prefer-regex-literals": "error", // recommended off
      "prefer-rest-params": "error", // recommended off
      "prefer-spread": "error", // recommended off
      "prefer-template": "error", // recommended off
      radix: "error", // recommended off
      "require-atomic-updates": "error", // recommended off
      "require-await": "error", // recommended off
      "require-unicode-regexp": "error", // recommended off
      semi: [
        "error", // recommended off
        "always",
      ],
      "sort-keys": "error", // recommended off
      "sort-vars": "error", // recommended off
      strict: "error", // recommended off
      "symbol-description": "error", // recommended off
      "unicode-bom": "error", // recommended off
      "vars-on-top": "error", // recommended off
      yoda: "error", // recommended off
    },
  },
];
