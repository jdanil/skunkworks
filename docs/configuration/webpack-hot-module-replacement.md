# Webpack Hot Module Replacement

## Design

```bash
yarn add --dev @pmmmwh/react-refresh-webpack-plugin react-refresh react-refresh-typescript
```

`webpack/config/development.ts`

```typescript
import * as ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import reactRefreshTypeScript from "react-refresh-typescript";
import { type CustomTransformers } from "typescript";

export default {
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/v,
        use: [
          {
            loader: "ts-loader",
            options: {
              getCustomTransformers: (): CustomTransformers => ({
                before: [reactRefreshTypeScript()],
              }),
            },
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
```

## Rationale

Speeds by development by...

- Retaining application state which is lost during a full reload.
- Saving valuable development time by only updating what's changed.
- Instantly updating the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

## References

- [Webpack Concept - Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)
- [Webpack Guide - Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)
- [React Refresh](https://www.npmjs.com/package/react-refresh)
- [React Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin)
- [React Refresh TypeScript](https://github.com/Jack-Works/react-refresh-transformer/tree/main/typescript)
