# CSS-in-JS

## Context

## Design

```bash
yarn add --dev @vanilla-extract/babel-plugin @vanilla-extract/css @vanilla-extract/webpack-plugin
```

`webpack/config/common.ts`

```typescript
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";

export default {
  plugins: [new VanillaExtractPlugin()],
};
```

`babel.config.json`

```json
{
  "plugins": ["@vanilla-extract/babel-plugin"]
}
```

`.jestrc.json`

```json
{
  "transform": {
    "^.+\\.css\\.[j|t]sx?$": "babel-jest"
  }
}
```

## Rationale

## References

- [Vanilla Extract](https://vanilla-extract.style/)
