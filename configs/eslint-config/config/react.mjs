import * as react from "eslint-plugin-react";
import * as reactHooks from "eslint-plugin-react-hooks";
import * as reactPerf from "eslint-plugin-react-perf";

export default [
  react.configs.flat.recommended,
  reactHooks.configs["recommended-latest"],
  reactPerf.configs.flat.recommended,
  {
    files: [
      "**/__tests__/**/*.{[cm]js,[jt]s?(x)}",
      "**/*.@(spec|test).{[cm]js,[jt]s?(x)}",
    ],
    rules: {
      "react/display-name": "off", // display names are not a concern for tests
      "react/jsx-no-literals": "off", // translated strings are not a concern for tests
      "react/no-danger": "off", // not a security risk for tests
      "react/no-multi-comp": "off", // multiple components may be necessary when using mocks
    },
    settings: {
      "disable/plugins": [
        "react-perf", // rendering performance is not a concern for tests
      ],
    },
  },
  {
    rules: {
      "react/button-has-type": "error", // recommended off
      "react/checked-requires-onchange-or-readonly": "error", // recommended off
      "react/destructuring-assignment": [
        "error", // recommended off
        "always",
        {
          destructureInSignature: "always", // recommended ignore
        },
      ],
      "react/forbid-component-props": "error", // recommended off
      "react/forward-ref-uses-ref": "error", // recommended off
      "react/function-component-definition": [
        "error", // recommended off
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/hook-use-state": [
        "error", // recommended off
        {
          allowDestructuredState: true,
        },
      ],
      "react/iframe-missing-sandbox": "error", // recommended off
      "react/jsx-boolean-value": "error", // recommended off
      "react/jsx-curly-brace-presence": [
        "error", // recommended off
        {
          propElementValues: always, // recommended null, avoid undocumented behaviour, see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
        },
      ],
      "react/jsx-filename-extension": [
        "error", // recommended off
        {
          allow: "as-needed",
          extensions: [".tsx"],
        },
      ],
      "react/jsx-fragments": "error", // recommended off
      "react/jsx-handler-names": "error", // recommended off
      "react/jsx-key": [
        "error", // recommended error
        {
          checkFragmentShorthand: true, // recommended false, see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md#checkfragmentshorthand-default-false
          checkKeyMustBeforeSpread: true, // recommended false, see https://github.com/facebook/react/issues/20031#issuecomment-710346866
          warnOnDuplicates: true, // recommended false, see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md#warnonduplicates-default-false
        },
      ],
      "react/jsx-no-bind": "error", // recommended off
      "react/jsx-no-constructed-context-values": "error", // recommended off
      "react/jsx-no-leaked-render": "error", // recommended off
      "react/jsx-no-literals": "error", // recommended off
      "react/jsx-no-script-url": "error", // recommended off
      "react/jsx-no-target-blank": [
        "error", // recommended error
        {
          forms: true, // recommended off
        },
      ],
      "react/jsx-no-useless-fragment": "error", // recommended off
      "react/jsx-pascal-case": "error", // recommended off
      "react/jsx-props-no-spread-multi": "error", // recommended off
      "react/jsx-sort-props": "error", // recommended off
      "react/jsx-uses-react": "off", // recommended error, unnecessary w/ typescript compiler option jsx react-jsx/react-jsxdev
      "react/no-access-state-in-setstate": "error", // recommended off
      "react/no-array-index-key": "error", // recommended off
      "react/no-arrow-function-lifecycle": "error", // recommended off
      "react/no-danger": "error", // recommended off
      "react/no-invalid-html-attribute": "error", // recommended off
      "react/no-multi-comp": "error", // recommended off
      "react/no-namespace": "error", // recommended off
      "react/no-object-type-as-default-prop": "error", // recommended off
      "react/no-redundant-should-component-update": "error", // recommended off
      "react/no-this-in-sfc": "error", // recommended off
      "react/no-typos": "error", // recommended off
      "react/no-unsafe": "error", // recommended off
      "react/no-unstable-nested-components": "error", // recommended off
      "react/no-unused-state": "error", // recommended off
      "react/no-will-update-set-state": "error", // recommended off
      "react/prefer-es6-class": "error", // recommended off
      "react/prefer-stateless-function": "error", // recommended off
      "react/prop-types": "off", // recommended error, unnecessary w/ typescript
      "react/react-in-jsx-scope": "off", // recommended error, unnecessary w/ typescript compiler option jsx react-jsx/react-jsxdev
      "react/require-optimization": "error", // recommended off
      "react/self-closing-comp": "error", // recommended off
      "react/sort-comp": [
        "error", // recommended off
        {
          order: [
            "static-variables",
            "static-methods",
            "defaultProps", // included in lifecycle, but conflicts with @typescript-eslint/member-ordering
            "instance-variables",
            "lifecycle",
            "render",
            "everything-else",
          ],
        },
      ],
      "react/sort-default-props": "error", // recommended off
      "react/state-in-constructor": "error", // recommended off
      "react/static-property-placement": "error", // recommended off
      "react/style-prop-object": "error", // recommended off
      "react/void-dom-elements-no-children": "error", // recommended off
      "react-hooks/exhaustive-deps": "error", // recommended warn
    },
  },
];
