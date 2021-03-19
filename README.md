# 🦨 `skunkworks` &middot; ![](https://github.com/jdanil/skunkworks/workflows/ci/badge.svg)

`skunkworks` is a monorepo to experiment with project configuration.

Click [here](https://github.com/jdanil/skunkworks/generate) to initialise a new repository from this template on GitHub.

See [documentation](docs/index.md) for more information.

## Motivation

This project is designed for maintainability, efficiency, and developer experience.
Constructed as a monorepo it encourages packages of modular code with isolated dependencies.
Configuration is shared between packages while remaining overridable.
This provides a separation of concerns and allows for sustainable growth.

## Structure

- **applications** - a collection of applications.
  - [app](applications/app/README.md) - frontend web application.
- **components** - a collection of reusable components.
- **configs** - a collection of shareable configurations.
  - [eslint-config](configs/eslint-config/README.md) - shareable eslint config.
  - [jest-config](configs/jest-config/README.md) - shareable jest config.
  - [markdownlint-config](configs/markdownlint-config/README.md) - shareable markdownlint config.
  - [prettier-config](configs/prettier-config/README.md) - shareable prettier config.
  - [tsconfig](configs/tsconfig/README.md) - shareable TypeScript config.
- **packages** - a collection of reusable packages.
- **services** - a collection of independently-deployable services.
  - [server](services/server/README.md) - backend server.

## Stack

- [Lerna](https://lerna.js.org/) - a tool for managing JavaScript projects with multiple packages.
- [Node.js](https://nodejs.org/) - a JavaScript runtime.
- [Yarn](https://yarnpkg.com/) - a JavaScript package manager.
