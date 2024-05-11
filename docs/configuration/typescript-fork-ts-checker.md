# TypeScript Fork TS Checker

## Design

Webpack plugin that runs TypeScript type checker in a separate process.

```bash
yarn add --dev fork-ts-checker-webpack-plugin
```

`webpack/config/development.ts`

```typescript
import { ForkTsCheckerWebpackPlugin } from "fork-ts-checker-webpack-plugin/lib/plugin";

export default {
  context: __dirname, // to automatically find tsconfig.json
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      devServer: false,
      typescript: {
        build: true,
      },
    }),
  ],
};
```

## Rationale

- speeds up compilation by transpiling without type checking
- TypeScript errors do not block compilation

## References

- [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)
