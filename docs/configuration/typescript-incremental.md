# TypeScript Incremental

## Design

Enable `incremental` option.

`tsconfig.json`

```json
{
  "compilerOptions": {
    "incremental": true
  }
}
```

## Rationale

Enables faster subsequent builds by saving and reading information about the project graph from the last compilation.
