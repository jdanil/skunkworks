# TypeScript Import Helpers

## Design

Enable `importHelpers` option.

`tsconfig.json`

```json
{
  "compilerOptions": {
    "importHelpers": true
  }
}
```

## Rationale

Helpers are pre-build functions which the TypeScript compiler uses to polyfill missing JavaScript functionality.
`importHelpers` instructs the TypeScript compiler to import these helpers from [tslib](https://github.com/Microsoft/tslib) to emit less code.

Reduces bundle size.
