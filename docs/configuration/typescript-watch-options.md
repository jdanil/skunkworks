# TypeScript Watch Options

## Design

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

> Using fs.watch() is more efficient than fs.watchFile and fs.unwatchFile.
> fs.watch should be used instead of fs.watchFile and fs.unwatchFile when possible.
>
> -- [Node.js](https://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener)

## References

- [Configuring Watch](https://github.com/microsoft/TypeScript-Handbook/blob/master/pages/Configuring%20Watch.md)
- [John Reilly - TypeScript Watch CPU Usage](https://blog.johnnyreilly.com/2019/05/typescript-and-high-cpu-usage-watch.html)
