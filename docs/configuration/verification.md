# Verification

## Environment Consistency

### Node Version

`.nvmrc`

### Package Manager Version

```bash
yarn policies set-version
```

### Engines

`package.json`
```json
{
  "engines": {
    "node": "^x.x.x",
    "yarn": "^x.x.x"
  }
}
```

### IDE

`.code-worspace`
`.editorconfig`

### Docker

## Commit Message

### Commit Linting

```bash
commitlint -E HUSKY_GIT_PARAMS
```

## Pre-Commit

### Linting

Lint and fix.

```bash
lint-staged
```

### Unit Test

```bash
jest --bail --findRelatedTests
```

## Pre-Push

### Compile

root `package.json`
```bash
yarn compile --since master
```

package `package.json`
```bash
tsc
```

## Branch Verification

### Install

Fail if an update to the lockfile is needed.

```bash
yarn install --frozen-lockfile
```

### Compile

root `package.json`
```bash
yarn compile --since master
```

package `package.json`
```bash
tsc
```

### Test

root `package.json`
```bash
yarn test --since master
```

package `package.json`
```bash
jest --ci --changedSince="master"
```

### Linting

root `package.json`
```bash
yarn lint --since master
```

package `package.json`
```bash
eslint
```

### Commit Linting

```bash
commitlint --from master
```

## Merge to `master`

### Install

Fail if an update to the lockfile is needed.

```bash
yarn install --frozen-lockfile
```

### Build

```bash
yarn build
```

### Test

```bash
jest --ci
```

### Audit

```bash
audit-ci --high
```

### Pack

```bash
yarn pack
```
