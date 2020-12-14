# Package

Annotations for `package.json` manifest file.

## Dependencies

### Rationale

Justification for using pinned, outdated, or pre-release versions of dependencies.

### Watchlist

Upcoming versions of dependencies.

#### actions/cache

Yarn cache is restored and persisted at the start and end of each build job.
Persisting the cache can take a couple of minutes on its own, negating the benefit of the cache.
There is a request to support read-only caches.

[issue](https://github.com/actions/cache/issues/334)

#### npm@7

Keep an eye on npm.
Acquisition by [GitHub](https://github.blog/2020-03-16-npm-is-joining-github/) and fragmentation in yarn community could turn the tide.

- Workspaces

[issue](https://github.com/npm/cli/issues/878)
[blog](https://blog.npmjs.org/post/617484925547986944/npm-v7-series-introduction)
