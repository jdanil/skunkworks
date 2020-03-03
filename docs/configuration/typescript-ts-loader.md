# TypeScript TS Loader

## Design

Enable `experimentalWatchApi` option.

`webpack/config/development.ts`

```typescript
export default {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              experimentalWatchApi: true,
            },
          },
        ],
      }
    ]
  },
};
```

## Rationale

> `ts-loader` has started to consume the internal TypeScript watch mode APIs which dramatically decreases the number of modules to be rebuilt on each iteration. This experimentalWatchApi shares the same logic as the normal TypeScript watch mode itself and is quite stable for development use.
>
> -- <cite>[webpack](https://webpack.js.org/guides/build-performance/#typescript-loader)</cite>

## References

- [ts-loader](https://github.com/TypeStrong/ts-loader)
