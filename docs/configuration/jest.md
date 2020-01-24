# Jest

## Design

### `jest` `coverageProvider`

`.jestrc.json`
```json
{
  "coverageProvider": "v8"
}
```

### `jest` `coverageReporters`

`.jestrc.json`
```json
{
  "coverageReporters": ["lcov", "text"]
}
```

### `jest` `testEnvironment`

`.jestrc.json`
```json
{
  "testEnvironment": "jest-environment-jsdom-sixteen"
}
```

## Rationale

### `jest` `coverageProvider`

V8's built-in code coverage is faster and less memory-intensive than the default `babel-plugin-istanbul`.

Jest introduced the ability to configure [`coverageProvider`](https://jestjs.io/docs/en/configuration#coverageprovider-string) in version [25](https://jestjs.io/blog/2020/01/21/jest-25#v8-code-coverage).

### `jest` `coverageReporters`

The [default coverage reporters](https://jestjs.io/docs/en/configuration#coveragereporters-arraystring) include a lot of outputs which may not be needed.

Restricting reporters to `lcov` (which also includes `html`) and `text` (to output to the console) based on [istanbul's reporters](https://istanbul.js.org/docs/advanced/alternative-reporters/).

### `jest` `testEnvironment`

[`jest-environment-jsdom-sixteen`](https://www.npmjs.com/package/jest-environment-jsdom-sixteen) comes with JSDOM 16, which enables support for V8 code coverage.

Jest uses JSDOM 15 by default in order to support [Node 8](https://jestjs.io/blog/2020/01/21/jest-25#bye-node-6) (which is EOL).
