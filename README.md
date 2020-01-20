# `template`

`template` is a monorepo to experiment with project configuration.

See [documentation](docs/index.md) for more information.

## Motivation

The premise of [create-react-app](https://create-react-app.dev/) makes a lot of sense.
Being able to abstract all the boilerplate configuration behind a single dependency massively simplifies maintenance.
But as a project grows being able to tweak configuration becomes more important.
Once you eject from `create-react-app` you're on your own.

This project is designed to be modular.
Constructed as a monorepo it encourages portable code with isolated dependencies.
This provides a separation of concerns and allows for sustainable growth.

If a project is forked from this repository it can be compared with future releases to adopt changes.

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

### Document

- `.github`
  - `ISSUE_TEMPLATE`
    - `feature-request.md`
    - `bug-report.md`
- `docs`
  - `configuration`
    - `lerna.md`
    - `verification.md`
  - `decision-log`
    - `eslint-package.md`
    - `fonts.md`
    - `monorepo.md`
    - `package-manager.md`
    - `styling.md`
    - `tsconfig-package.md`

### Implement

- `root`
  - ci scripts
  - lint branch
- `packages`
  - `eslint`
    - relax `eslint-plugin-functional` rules

### Investigate

- `docs`
  - `decision-log`
    - `react-testing-library.md`
- `applications`
  - `app`
    - `jest` coverage threshold per commit/branch

### Reading List
