# Package

Annotations for `package.json` manifest file.

## Engines

### node@10.13

[prettier](https://github.com/prettier/prettier/blob/master/package.json)

## Dependencies

### Rationale

Justification for using pinned, outdated, or pre-release versions of dependencies.

#### yarn@1

ESLint does not support Plug'n'Play's stricter dependency resolution.

The [`node_modules` plugin](https://github.com/yarnpkg/berry/tree/master/packages/plugin-node-modules) has known issues that block usage.

- [eslint rfc #5](https://github.com/eslint/rfcs/pull/5)
- [eslint rfc #9](https://github.com/eslint/rfcs/pull/9)
- [eslint rfc #14](https://github.com/eslint/rfcs/pull/14)
- [eslint issue #3458](https://github.com/eslint/eslint/issues/3458)
- [eslint pull request #12460](https://github.com/eslint/eslint/pull/12460)
- [yarn berry issue #8](https://github.com/yarnpkg/berry/issues/8)

### Watchlist

Upcoming versions of dependencies.

#### actions/cache@v2

Yarn cache is restored and persisted at the start and end of each build job.
Persisting the cache can take a couple minutes on its own, negating the benefit of the cache.
There is a request to support read-only caches.

[issue](https://github.com/actions/cache/issues/334)

#### npm@7

Keep an eye on npm.
Acquisition by [GitHub](https://github.blog/2020-03-16-npm-is-joining-github/) and fragmentation in yarn community could turn the tide.

- Workspaces

[issue](https://github.com/npm/cli/issues/878)
[blog](https://blog.npmjs.org/post/617484925547986944/npm-v7-series-introduction)
