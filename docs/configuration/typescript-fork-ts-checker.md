# TypeScript Fork TS Checker

## Design

Webpack plugin that runs TypeScript type checker in a separate process.

```bash
yarn add --dev fork-ts-checker-webpack-plugin
```

`webpack/config/development.ts`

```typescript
import * as ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export default {
  context: __dirname, // to automatically find tsconfig.json
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: "**/*",
      },
      typescript: {
        build: true,
      },
    }),
  ],
};
```

## Rationale

- speeds up compilation by transpiling without type checking
- TypeScript errors and linting issues do not block compilation
- runs linting rules alongside TypeScript's type checker

## References

- [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)
