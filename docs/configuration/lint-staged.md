# lint-staged

## Design

Root `.husky/pre-commit`

- pre-commit git hook is triggered once from git root
- hook uses `yarn` to spawn "precommit" scripts from workspaces
- only run on workspaces changed since branching from `master`
- stream output from the spawned child processes

```bash
yarn workspaces foreach --parallel --since="master" --topological-dev --verbose run precommit
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
`yarn` is used to filter workspaces for more efficient linting.

## References

- [lint-staged](https://github.com/okonet/lint-staged)
- [lint-staged monorepo example](https://github.com/sudo-suhas/lint-staged-multi-pkg)
