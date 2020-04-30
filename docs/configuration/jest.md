# Jest

## Design

`package.json`

```json
{
  "scripts": {
    "test": "jest --config .jestrc.json"
  },
  "devDependencies": {
    "@jest/globals": "x.x.x",
    "@types/jest": "x.x.x",
    "jest": "x.x.x",
    "jest-environment-jsdom-sixteen": "x.x.x",
    "jest-extended": "x.x.x",
    "jest-when": "x.x.x",
    "ts-jest": "x.x.x"
  }
}
```

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

### `ts-jest` `diagnostics`

`.jestrc.json`

```json
{
  "globals": {
    "ts-jest": {
      "diagnostics": {
        "warnOnly": true
      }
    }
  }
}
```

## Rationale

### `package.json`

Jest supports configuration defined either in `package.json` or in a `jest.config.js` file by default.
To keep dependency specific configuration out of the way, it should be kept in its own file.
The default `jest.config.js` means the configuration is stored as code, but this is unnecessary.
To minimise complexity, store it as a data object following standard naming conventions, `.jestrc.json`.
Pass this file when executing `jest`.

Explicitly import Jest methods from `@jest/globals`.
Follow ES Module syntax for consistency and allow smoother migration in the future.
Avoid relying on "magic" globals.
IDE-agnostic solution.

### `jest` `coverageProvider`

V8's built-in code coverage is faster and less memory-intensive than the default `babel-plugin-istanbul`.

Jest introduced the ability to configure [`coverageProvider`](https://jestjs.io/docs/en/configuration#coverageprovider-string) in version [25](https://jestjs.io/blog/2020/01/21/jest-25#v8-code-coverage).

### `jest` `coverageReporters`

The [default coverage reporters](https://jestjs.io/docs/en/configuration#coveragereporters-arraystring) include a lot of outputs which may not be needed.

Restricting reporters to `lcov` (which also includes `html`) and `text` (to output to the console) based on [istanbul's reporters](https://istanbul.js.org/docs/advanced/alternative-reporters/).

### `jest` `testEnvironment`

[`jest-environment-jsdom-sixteen`](https://www.npmjs.com/package/jest-environment-jsdom-sixteen) comes with JSDOM 16, which enables support for V8 code coverage.

Jest uses JSDOM 15 by default in order to support [Node 8](https://jestjs.io/blog/2020/01/21/jest-25#bye-node-6) (which is EOL).

### `ts-jest` `diagnostics`

Report diagnostics, but don't block compilation during development.

[`ts-jest` Diagnostics](https://kulshekhar.github.io/ts-jest/user/config/diagnostics)
