# TypeScript

## Design

### `fork-ts-checker-webpack-plugin`

Webpack plugin that runs TypeScript type checker in a separate process.

```bash
yarn add --dev fork-ts-checker-webpack-plugin
```

`webpack/config/development.ts`
```typescript
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export default {
  context: __dirname, // to automatically find tsconfig.json
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: './tsconfig.json', // path to tsconfig.json
              experimentalWatchApi: true,
              transpileOnly: true,
            },
          },
        ],
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin({
    eslint: true,
    tsconfig: './tsconfig.json', // path to tsconfig.json
  })]
};
```

### `ts-loader` `experimentalWatchApi`

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

### `typescript` `importHelpers`

Enable `importHelpers` option.

`tsconfig.json`
```json
{
  "compilerOptions": {
    "importHelpers": true
  }
}
```

### `typescript` `incremental`

Enable `incremental` option.

`tsconfig.json`
```json
{
  "compilerOptions": {
    "incremental": true
  }
}
```

### `typescript` `watchOptions`

Configure watch to use `fs.watch` which uses system events to get notifications for file changes/creation/deletion.
`fs.watch` is more efficient than the default `fs.watchFile`.
Fallback to a dynamic queue where `fs.watch` is not available.
This is default as of TypeScript 3.8.

Configure watch to fallback to `dynamicPriority` when the system runs out of native file watchers and/or doesn't support native file watchers.
Default appears to be `priorityPollingInterval` (see [`getFallbackOptions`](https://github.com/microsoft/TypeScript/blob/master/src/compiler/watchUtilities.ts)) which seems to be the most CPU intensive polling strategy.

`tsconfig.json`
```json
{
  "watchOptions": {
    "fallbackPolling": "dynamicPriority"
  }
}
```

## Rationale

### `fork-ts-checker-webpack-plugin`

- speeds up compilation by transpiling without type checking
- TypeScript errors and linting issues do not block compilation
- runs linting rules alongside TypeScript's type checker

### `ts-loader` `experimentalWatchApi`

> `ts-loader` has started to consume the internal TypeScript watch mode APIs which dramatically decreases the number of modules to be rebuilt on each iteration. This experimentalWatchApi shares the same logic as the normal TypeScript watch mode itself and is quite stable for development use.
>
> -- <cite>[webpack](https://webpack.js.org/guides/build-performance/#typescript-loader)</cite>

### `typescript` `importHelpers`

Helpers are pre-build functions which the TypeScript compiler uses to polyfill missing JavaScript functionality.
`importHelpers` instructs the TypeScript compiler to import these helpers from [tslib](https://github.com/Microsoft/tslib) to emit less code.

Reduces bundle size.

### `typescript` `incremental`

Enables faster subsequent builds by saving and reading information about the project graph from the last compilation.

### `typescript` `watchOptions`

> Using fs.watch() is more efficient than fs.watchFile and fs.unwatchFile. fs.watch should be used instead of fs.watchFile and fs.unwatchFile when possible.
>
> -- <cite>[Node.js](https://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener)</cite>

## References

- [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)
- [Configuring Watch](https://github.com/microsoft/TypeScript-Handbook/blob/master/pages/Configuring%20Watch.md)
- [John Reilly - TypeScript Watch CPU Usage](https://blog.johnnyreilly.com/2019/05/typescript-and-high-cpu-usage-watch.html)
