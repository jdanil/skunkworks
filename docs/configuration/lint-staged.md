# lint-staged

## Design

Root `.husky/pre-commit`

- pre-commit git hook is triggered once from git root
- hook uses `lerna` to spawn "precommit" scripts from packages
- only run on packages changed since branching from `master`
- stream output from the spawned child processes

```bash
yarn lerna run precommit --concurrency 1 --since master --stream
```

Package `package.json`

- run `lint-staged` on "precommit"

```json
{
  "scripts": {
    "precommit": "lint-staged"
  }
}
```

Package `.lintstagedrc.json`

- scripts to execute on pre-commit

```json
{
  "*": ["..."]
}
```

## Rationale

Follow recommended configuration from `lint-staged` for monorepos.

Configuration ensures pre-commit scripts are only triggered once.
`lerna` is used to filter packages for more efficient linting.

## References

- [lint-staged](https://github.com/okonet/lint-staged)
- [lint-staged monorepo example](https://github.com/sudo-suhas/lint-staged-multi-pkg)
