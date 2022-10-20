# CSS-in-JS

## Context

## Design

```bash
yarn add --dev @vanilla-extract/css @vanilla-extract/jest-transform @vanilla-extract/webpack-plugin
```

`webpack/config/common.ts`

```typescript
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";

export default {
  plugins: [new VanillaExtractPlugin()],
};
```

`.jestrc.json`

```json
{
  "transform": {
    "^.+\\.css\\.[j|t]sx?$": "@vanilla-extract/jest-transform"
  }
}
```

## Rationale

## References

- [Vanilla Extract](https://vanilla-extract.style/)
