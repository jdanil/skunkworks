# Husky

## Context

Husky is a dependency used to execute commands on git hooks.

## Design

Pseudocode

- `commit-msg`: `commitlint`
- `pre-commit`: `lint-staged`
- `pre-push`: `tsc`

See `.huskyrc.json` for implementation.

## Rationale

### `commit-msg`

Run `commitlint` on commit to enforce commit message conventions.

Useful for operations that rely on commit message conventions (e.g. semver release, issue tracker integration).

### `pre-commit`

Run `lint-staged` when committing code.

Useful for detecting and autofixing issues before committing code.

#### `pre-push`

Run `tsc` when pushing code.

Useful for ensuring code compiles before pushing upstream.
