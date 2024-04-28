# Husky

## Context

Husky is a dependency used to execute commands on git hooks.

## Design

Pseudocode

- `commit-msg`: `commitlint`
- `post-checkout`: `install`
- `post-merge`: `install`
- `pre-commit`: `lint-staged`
- `pre-push`: `tsc`

See `.husky` for implementation.

root `package.json`

```json
{
  "scripts": {
    "postinstall": "[ -n ${CI:-} ] || husky"
  }
}
```

## Rationale

### `commit-msg`

Run `commitlint` on commit to enforce commit message conventions.

Useful for operations that rely on commit message conventions (e.g. semver release, issue tracker integration).

### `post-checkout`

Run package manager `install` when changing branches to update dependencies.

Useful for maintaining environment consistency.

### `post-merge`

Run package manager `install` when pulling new changes to update dependencies.

Useful for maintaining environment consistency.

### `pre-commit`

Run `lint-staged` when committing code.

Useful for detecting and autofixing issues before committing code.

#### `pre-push`

Run `tsc` when pushing code.

Useful for ensuring code compiles before pushing upstream.

#### `postinstall`

Disable git hooks in CI.
