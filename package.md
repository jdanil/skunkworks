# Package

Annotations for `package.json` manifest file.

## Dependencies

### Rationale

Justification for using pinned, outdated, or pre-release versions of dependencies.

#### brotli-size

`bundlesize` uses `brotli-size` to determine the compressed size of bundles.
The version of `brotli-size` that `bundlesize` uses depends on `iltorb`, which has since been deprecated as `zlib` supports brotli natively from node v10.
As such, `iltorb` does not support node v17.

A resolution has been added to override `brotli-size` to a version that does not depend on `iltorb`.

`bundlesize2` has been re-written and avoids this issue.
It will be merged back into `bundlesize` once it is feature complete.

### Watchlist

Upcoming versions of dependencies.

#### npm@7

Keep an eye on npm.
Acquisition by [GitHub](https://github.blog/2020-03-16-npm-is-joining-github/) and fragmentation in yarn community could turn the tide.

- Workspaces

[issue](https://github.com/npm/cli/issues/878)
[blog](https://blog.npmjs.org/post/617484925547986944/npm-v7-series-introduction)
