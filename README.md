# 🦨 `skunkworks` &middot; ![CI Workflow Status](https://github.com/jdanil/skunkworks/workflows/ci/badge.svg)

`skunkworks` is a monorepo to experiment with project configuration.

Click [here](https://github.com/jdanil/skunkworks/generate) to initialise a new repository from this template on GitHub.

See [documentation](docs/index.md) for more information.

## Motivation

This project is designed for maintainability, efficiency, and developer experience.
Constructed as a monorepo it encourages packages of modular code with isolated dependencies.
Configuration is shared between packages while remaining overridable.
This provides a separation of concerns and allows for sustainable growth.

## Structure

- 🖥 **applications** - a collection of applications.
  - [app](applications/app/README.md) - frontend web application.
- 🧩 **components** - a collection of reusable components.
- ⚙ **configs** - a collection of shareable configurations.
  - [eslint-config](configs/eslint-config/README.md) - shareable eslint config.
  - [jest-config](configs/jest-config/README.md) - shareable jest config.
  - [markdownlint-config](configs/markdownlint-config/README.md) - shareable markdownlint config.
  - [prettier-config](configs/prettier-config/README.md) - shareable prettier config.
  - [tsconfig](configs/tsconfig/README.md) - shareable TypeScript config.
- 📚 **libraries** - a collection of reusable packages.
  - [react-utils](libraries/react-utils/README.md) - a collection of react utilities.
- 🔌 **plugins** - a collection of custom yarn plugins.
  - [scaffolder](plugins/scaffolder/README.md) - plugin to bootstrap new packages.
  - [typescript-project-references](plugins/typescript-project-references/README.md) - plugin to automatically declare typescript project references.
- ☁ **services** - a collection of independently-deployable services.
  - [server](services/server/README.md) - backend server.
- 🏗️ **templates** - a collection of templates used by scaffolder to bootstrap new packages.
  - [library](templates/library/README.md) - template to bootstrap new libraries.
  - [node-server](templates/node-server/README.md) - template to bootstrap new node servers.
  - [plugin](templates/plugin/README.md) - template to bootstrap new plugins.
  - [react-application](templates/react-application/README.md) - template to bootstrap new react applications.
  - [react-library](templates/react-library/README.md) - template to bootstrap new react libraries.

## Stack

- [Node.js](https://nodejs.org/) - a JavaScript runtime.
- [Yarn](https://yarnpkg.com/) - a JavaScript package manager.
