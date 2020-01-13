# `template`

`template` is a monorepo to experiment with project configuration.

See [documentation](docs/index.md) for more information.

## Structure

- **applications** - a collection of applications.
  - [app](applications/app/README.md) - frontend web application.
- **components** - a collection of reusable components.
- **packages** - a collection of reusable packages.
  - [eslint](packages/eslint/README.md) - shareable eslint config.
  - [tsconfig](packages/tsconfig/README.md) - shareable TypeScript config.
- **services** - a collection of independently-deployable services.

## Stack

- [Lerna](https://lerna.js.org/) - A tool for managing JavaScript projects with multiple packages.
- [Node.js](https://nodejs.org/) - A JavaScript runtime.
- [Yarn](https://yarnpkg.com/) - A JavaScript package manager.

## To Do

- `.github`
  - `ISSUE_TEMPLATE`
    - `feature-request.md`
    - `bug-report.md`
- `docs`
  - `decision-log`
    - `configuration-files.md`
    - `dependency-versions.md`
    - `eslint-package.md`
    - `monorepo.md`
    - `package-manager.md`
    - `styling.md`
    - `tsconfig-package.md`
