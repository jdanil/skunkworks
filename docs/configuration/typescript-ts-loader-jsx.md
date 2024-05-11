# TypeScript TS Loader JSX

## Design

Set `jsx` compiler option to `react-jsxdev` in development.

`webpack/config/development.ts`

```typescript
export default {
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                jsx: "react-jsxdev",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configOverwrite: {
          compilerOptions: {
            jsx: "react-jsxdev",
          },
        },
      },
    }),
  ],
};
```

## Rationale

The `jsxDEV` constructor, transformed with the `"jsx": "react-jsxdev"` compiler option, takes debug data.

## References

- [TypeScript JSX](https://www.typescriptlang.org/docs/handbook/jsx.html)
- [TypeScript tsconfig JSX](https://www.typescriptlang.org/tsconfig#jsx)
- [React 17 JSX Factories](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#jsx-factories)
