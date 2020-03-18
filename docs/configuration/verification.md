# Verification

## Environment Consistency

### Node Version

`.nvmrc`

### Package Manager Version

```bash
yarn set version [range]
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

`.editorconfig`

`.code-worspace`

### Docker

## Development

Configure [husky](husky.md) and [lint-staged](lint-staged.md).

### Commit Message

#### Commit Linting

```bash
commitlint -E HUSKY_GIT_PARAMS
```

### Pre-Commit

`.lintstagedrc.json`

#### Linting

Lint and fix.

```bash
lint-staged
```

#### Unit Test

```bash
jest --bail --findRelatedTests
```

### Pre-Push

#### Compile

root `package.json`

```bash
yarn compile --since master
```

package `package.json`

```bash
tsc
```

package `tsconfig.json`

- configure TypeScript's [incremental](typescript-incremental.md) builds and [project references](typescript-project-references.md) to avoid unnecessary re-compilation

```json
{
  "compilerOptions": {
    "incremental": true
  }
}
```

## CI

### Branch Verification

#### Install

Fail if an update to the lockfile is needed.

```bash
yarn install --frozen-lockfile
```

#### Compile

root `package.json`

```bash
yarn compile --since master
```

package `package.json`

```bash
tsc
```

#### Test

root `package.json`

```bash
yarn test --since master
```

package `package.json`

```bash
jest --ci --changedSince="master"
```

#### Linting

root `package.json`

```bash
yarn lint:diff --since master
```

package `package.json`

```bash
eslint-changeset
```

#### Commit Linting

```bash
commitlint --from master
```

### Merge to `master`

#### Install

Fail if an update to the lockfile is needed.

```bash
yarn install --frozen-lockfile
```

#### Audit

```bash
audit-ci --high
```

#### Build

```bash
yarn build
```

#### Test

```bash
jest --ci
```

#### Bundle Size

```bash
bundlesize
```

#### Outdated

```bash
libyear -D=[#] -P=[#] -R=[#] -d=[#] -p=[#] -r=[#]
```

#### Pack

```bash
yarn pack
```
