# TypeScript Project References

## Design

Referenced Project `tsconfig.json`

- flag as referenced project
- set root directory to avoid nesting in out directory

```json
{
  "compilerOptions": {
    "composite": true,
    "rootDir": "src"
  }
}
```

Composite Project `tsconfig.json`

- run typescript compiler as a "build orchestrator" to build project references
- point to referenced projects

```json
{
  "compilerOptions": {
    "build": true
  },
  "references": [{ "path": "../path/to/package" }]
}
```

Composite Project `package.json`

- run typescript compiler as a "build orchestrator" to build project references
- compile project references on pretest (`ts-jest` doesn't support project references yet)

```json
{
  "scripts": {
    "compile": "tsc --build",
    "pretest": "yarn compile"
  }
}
```

Composite Project `webpack/config.ts`

- configure opt-in support for project references

```typescript
import { ForkTsCheckerWebpackPlugin } from "fork-ts-checker-webpack-plugin/lib/plugin";

export default {
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/u,
        loader: "ts-loader",
        options: {
          projectReferences: true,
        },
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        build: true,
      },
    }),
  ],
};
```

Composite Project `.jestrc.json`

- compile referenced projects (`jest` doesn't support ES Modules yet)

```json
{
  "transformIgnorePatterns": ["node_modules/(?!(@package/referenced-project)/)"]
}
```

## Rationale

Project references allows projects to be structured into smaller pieces.
A composite project can improve build times, enforce logical separation, and enable code to be organised in new and better ways.

## References

- [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
- [ts-loader](https://github.com/TypeStrong/ts-loader)

## Watchlist

- [jest ES Modules](https://github.com/facebook/jest/issues/4842)
- [ts-jest Project References](https://github.com/kulshekhar/ts-jest/issues/766)
