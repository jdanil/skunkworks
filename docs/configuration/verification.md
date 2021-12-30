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

#### Commit Linting (Development)

```bash
yarn commitlint --edit $1
```

### Pre-Commit

`.lintstagedrc.json`

#### Linting (Development)

Lint and fix.

```bash
lint-staged
```

#### Unit Test (Development)

```bash
jest --bail --findRelatedTests
```

### Pre-Push

#### Compile (Development)

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

#### Install (Branch Verification)

`--immutable` to fail if an update to the lockfile is needed.

```bash
yarn install --immutable
```

#### Constraints (Branch Verification)

Check that the project constraints are met.

```bash
yarn constraints
```

#### Dedupe (Branch Verification)

`--check` to fail if the lockfile can be optimised.

```bash
yarn dedupe --check
```

#### Compile (Branch Verification)

root `package.json`

```bash
yarn compile --since master
```

package `package.json`

```bash
tsc
```

#### Test (Branch Verification)

root `package.json`

```bash
yarn test --since master
```

package `package.json`

```bash
jest --ci --changedSince="master"
```

#### Linting (Branch Verification)

root `package.json`

```bash
yarn lint:diff --since master
```

package `package.json`

```bash
eslint-changeset
```

#### Commit Linting (Branch Verification)

```bash
commitlint --from master
```

### Merge to `master`

#### Install (Merge to `master`)

Fail if an update to the lockfile is needed.

```bash
yarn install --immutable
```

#### Audit (Merge to `master`)

```bash
audit-ci
```

#### Build (Merge to `master`)

```bash
yarn build
```

#### Test (Merge to `master`)

```bash
jest --ci
```

#### Bundle Size (Merge to `master`)

```bash
bundlesize
```

#### Outdated (Merge to `master`)

```bash
libyear -D=[#] -P=[#] -R=[#] -d=[#] -p=[#] -r=[#]
```

#### Pack (Merge to `master`)

```bash
yarn pack
```
