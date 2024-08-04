# Roadmap

## Initiatives

- [ ] eslint
  - [ ] [flat configuration file](https://eslint.org/docs/latest/use/configure/migration-guide)
  - [ ] [eslint@9 migration](https://eslint.org/docs/latest/use/migrate-to-9.0.0)
  - [ ] config presets
- [ ] husky
  - [ ] postinstall
- [ ] [rspack](https://rspack.dev/)
  - [ ] [rspack issue #2236](https://github.com/web-infra-dev/rspack/issues/2236)
- [ ] yarn
  - [ ] drop audit-ci
  - [ ] [constraints typescript api](https://yarnpkg.com/features/constraints)
  - [ ] [corepack](https://nodejs.org/api/corepack.html)
  - [ ] pnpm linker
    - [ ] [pnpm issue #3524](https://github.com/pnpm/pnpm/issues/3524)
    - [ ] yarn `nodeLinker: pnpm`
  - [ ] pnp strict
    - [ ] [`@yarnpkg/doctor`](https://github.com/yarnpkg/berry/tree/master/packages/yarnpkg-doctor)
    - [ ] peer dependencies
      - [ ] eslint-plugin-import (@typescript-eslint/parser, eslint-import-resolver-node) [pull #2283](https://github.com/import-js/eslint-plugin-import/pull/2283)
      - [ ] eslint-plugin-monorepo (eslint-import-resolver-node) [issue #8](https://github.com/azz/eslint-plugin-monorepo/issues/8)
      - [ ] msw (debug) [issue #815](https://github.com/mswjs/msw/issues/851) [pull #959](https://github.com/mswjs/msw/pull/959)
      - [ ] react-adaptive-hooks (react) [pull #62](https://github.com/GoogleChromeLabs/react-adaptive-hooks/pull/62)

## Adhoc

### Document

- `docs`
  - `configuration`
    - `css-in-js.md`
    - `icons.md`
    - `playwright.md`
    - `prettier.md`
    - `verification.md`
  - `decision-log`
    - `code-formatting.md`
    - `eslint-config-package.md`
    - `fonts.md`
    - `jest-config-package.md`
    - `markdownlint-config-package.md`
    - `monorepo.md`
    - `prettier-config-package.md`
    - `source-control-management.md`
    - `state-management.md`
    - `styling.md`
    - `testing-library.md`
    - `tsconfig-package.md`
  - `knowledge-bank`
    - `fitness-functions.md`
    - `html-external-resources.md`
    - `micro-frontends.md`

### Implement

- `configs`
  - `eslint-config`
    - rename `config` directory (`preset`?)
    - separate auto-fixable rules to fix in development

### Investigate

- `applications`
  - `app`
    - styling
      - component library
      - prefers-reduced-data
      - prefers-reduced-motion
    - pwa
      - workbox-webpack-plugin
    - service workers
    - tooling
      - [tooling](https://tooling.js.org/)
      - [ts-engine](https://ts-engine.dev/)
      - [tsdx](https://github.com/jaredpalmer/tsdx)
    - web workers (see [webpack](https://webpack.js.org/blog/2020-10-10-webpack-5-release/#native-worker-support), previously [workerize-loader](https://github.com/developit/workerize-loader) and [worker-plugin](https://github.com/GoogleChromeLabs/worker-plugin))
    - webpack module federation
- `configs`
  - `prettier-config`
    - [prettier-plugin-sh](https://github.com/rx-ts/prettier/tree/master/packages/sh)
- cloud
  - [cloudfare workers](https://workers.cloudflare.com/)
  - [OpenTofu](https://opentofu.org/) (& tflint, tfsec)
- db
  - postgres
  - sqlite
- dependencies
  - [@react-hook](https://github.com/jaredLunde/react-hook)
  - build systems
    - [bazel](https://bazel.build/)
    - [please](https://please.build/)
    - [yarn.build](https://yarn.build/)
  - [esbuild](https://github.com/evanw/esbuild)
    - [esbuild-loader](https://github.com/privatenumber/esbuild-loader)
  - [kubernetes](https://kubernetes.io/)
    - [k3s](https://k3s.io/)
    - [tilt](https://tilt.dev/)
  - [module-federation/automatic-vendor-sharing](https://github.com/module-federation/automatic-vendor-sharing)
  - [rust](https://www.rust-lang.org/)
  - [solid](https://github.com/solidjs/solid)
  - stricter
  - [monorepo guide](https://monorepo.guide/)
    - manypkg
    - preconstruct
    - changesets
