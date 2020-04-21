# `template` &middot; ![](https://github.com/jdanil/template/workflows/ci/badge.svg)

`template` is a monorepo to experiment with project configuration.

Click [here](https://github.com/jdanil/template/generate) to initialise a new repository from this template on GitHub.

See [documentation](docs/index.md) for more information.

## Motivation

The premise of [create-react-app](https://create-react-app.dev/) makes a lot of sense.
Being able to abstract all the boilerplate configuration behind a single dependency massively simplifies maintenance.
But as a project grows being able to tweak configuration becomes more important.
Once you eject from `create-react-app` you're on your own.

This project is designed for maintainability, efficiency, and developer experience.
Constructed as a monorepo it encourages packages of modular code with isolated dependencies.
Configuration is shared between packages while remaining overridable.
This provides a separation of concerns and allows for sustainable growth.

If a project is forked from this repository it can be compared with future releases to adopt changes.

## Structure

- **applications** - a collection of applications.
  - [app](applications/app/README.md) - frontend web application.
- **components** - a collection of reusable components.
- **packages** - a collection of reusable packages.
  - [eslint-config](packages/eslint-config/README.md) - shareable eslint config.
  - [jest-config](packages/jest-config/README.md) - shareable jest config.
  - [tsconfig](packages/tsconfig/README.md) - shareable TypeScript config.
- **services** - a collection of independently-deployable services.
  - [server](services/server/README.md) - backend server.

## Stack

- [Lerna](https://lerna.js.org/) - A tool for managing JavaScript projects with multiple packages.
- [Node.js](https://nodejs.org/) - A JavaScript runtime.
- [Yarn](https://yarnpkg.com/) - A JavaScript package manager.

## To Do

### Document

- `docs`
  - `configuration`
    - `lerna.md`
    - `prettier.md` decide `prettier` vs `eslint-plugin-prettier`
    - `verification.md`
  - `decision-log`
    - `code-formatting.md`
    - `eslint-config-package.md`
    - `fonts.md`
    - `jest-config-package.md`
    - `monorepo.md`
    - `package-manager.md`
    - `state-management.md`
    - `testing-library.md`
    - `tsconfig-package.md`
  - `knowledge-bank`
    - `fitness-functions.md`
    - `html-external-resources.md`
    - `micro-frontends.md`

### Implement

- `packages`
  - `eslint-config`
    - rename `config` directory (`preset`?)
    - relax `eslint-plugin-functional` rules
    - separate auto-fixable rules to fix in development

### Investigate

- `applications`
  - `app`
    - `jest` coverage threshold per commit/branch
    - styling
      - component library
      - css-in-js library
        - linaria
        - emotion
        - styled-components
        - compiled-css-in-js
        - stylex
        - etc.
      - prefers-color-scheme
      - prefers-reduced-motion
      - fonts
        - inter
        - font-display
    - babel
    - service workers
    - web workers
    - webpack module federation
- dependencies
  - react
    - hooks
    - error boundaries
    - concurrent mode, suspense
    - lazy
    - memo
  - stricter
  - [monorepo guide](monorepo.guide)
    - manypkg
    - preconstruct
    - changesets

### Reading List
