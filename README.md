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
- **packages** - a collection of reusable packages.
  - [eslint-config](packages/eslint-config/README.md) - shareable eslint config.
  - [jest-config](packages/jest-config/README.md) - shareable jest config.
  - [prettier-config](packages/prettier-config/README.md) - shareable prettier config.
  - [tsconfig](packages/tsconfig/README.md) - shareable TypeScript config.
- **services** - a collection of independently-deployable services.
  - [server](services/server/README.md) - backend server.

## Stack

- [Lerna](https://lerna.js.org/) - a tool for managing JavaScript projects with multiple packages.
- [Node.js](https://nodejs.org/) - a JavaScript runtime.
- [Yarn](https://yarnpkg.com/) - a JavaScript package manager.

## To Do

### Document

- `docs`
  - `configuration`
    - `cypress.md`
    - `lerna.md`
    - `prettier.md`
    - `verification.md`
  - `decision-log`
    - `code-formatting.md`
    - `eslint-config-package.md`
    - `fonts.md`
    - `jest-config-package.md`
    - `monorepo.md`
    - `package-manager.md`
    - `prettier-config-package.md`
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
    - code splitting
    - pwa
      - workbox-webpack-plugin
    - service workers
    - tooling
      - [esnext-build](https://github.com/codynova/esnext-build)
      - [jamstack](https://jamstack.org/)
      - [next.js](https://nextjs.org/)
      - [nx](https://nx.dev/)
      - [tooling](https://tooling.js.org/)
      - [ts-engine](https://ts-engine.dev/)
      - [tsdx](https://github.com/jaredpalmer/tsdx)
    - web workers (see [webpack](https://webpack.js.org/blog/2020-10-10-webpack-5-release/#native-worker-support), previously [workerize-loader](https://github.com/developit/workerize-loader) and [worker-plugin](https://github.com/GoogleChromeLabs/worker-plugin))
    - webpack module federation
- cloud
  - [cloudfare workers](https://workers.cloudflare.com/)
  - pulumi vs. terraform (& tflint, tfsec)
- db
  - cockroachdb
  - postgres
- dependencies
  - [@react-hook](https://github.com/jaredLunde/react-hook)
  - build systems
    - [bazel](https://bazel.build/)
    - [please](https://please.build/)
  - [esbuild](https://github.com/evanw/esbuild)
  - golang
    - graphql
    - orm
    - web framework
  - [module-federation/automatic-vendor-sharing](https://github.com/module-federation/automatic-vendor-sharing)
  - react
    - concurrent mode, suspense
    - fast refresh
    - lazy
    - memo
  - react-loads vs. react-query
  - [solid](https://github.com/ryansolid/solid)
  - stricter
  - [monorepo guide](https://monorepo.guide/)
    - manypkg
    - preconstruct
    - changesets

### Reading List
