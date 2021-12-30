# Webpack

## Design

### Caching (Design)

`webpack/config/development.ts`

```typescript
export default {
  cache: {
    buildDependencies: {
      config: [__filename],
    },
    name: "development",
    type: "filesystem" as const,
  },
};
```

`webpack/config/production.ts`

```typescript
export default {
  cache: {
    buildDependencies: {
      config: [__filename],
    },
    name: "production",
    type: "filesystem" as const,
  },
};
```

### TypeScript (Design)

[TypeScript](https://webpack.js.org/configuration/configuration-languages/#typescript) configuration language in [ESM](https://nodejs.org/api/esm.html).

## Rationale

### Caching (Rationale)

- [Persistent Caching - webpack@5 Release](https://webpack.js.org/blog/2020-10-10-webpack-5-release/#persistent-caching)
- [Persistent Caching - webpack@5 Changelog](https://github.com/webpack/changelog-v5/blob/master/guides/persistent-caching.md)

### TypeScript (Rationale)

Allows type-checking of webpack configuration.

Consistent with the rest of the codebase.
