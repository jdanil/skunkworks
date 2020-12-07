# Roadmap

## Initiatives

- [ ] yarn berry
  - [ ] node modules linker
    - [x] yarn `.yarnrc.yml`
    - [x] yarn cacheFolder
    - [ ] `yarn install --offline`
    - [ ] `yarn install --no-lockfile`
    - [x] yarn lifecycle scripts
    - [x] yarn `nodeLinker: node-modules`
    - [x] yarn npm audit
    - [x] yarn plugins
    - [x] `yarn set version berry`
    - [ ] audit-ci
      - [ ] [`pull #171`](https://github.com/IBM/audit-ci/pull/171)
    - [x] cross-env
    - [x] libyear
    - [ ] lockfile-lint
      - [ ] [issue #101](https://github.com/lirantal/lockfile-lint/issues/101)
    - [ ] dependabot/renovate
      - [ ] [dependabot issue #1297](https://github.com/dependabot/dependabot-core/issues/1297)
      - [ ] [renovate issue #7894](https://github.com/renovatebot/renovate/issues/7894)
    - [x] [yarn constraints](https://yarnpkg.com/features/constraints)
  - [ ] [pnp loose](https://yarnpkg.com/features/pnp#pnp-loose-mode)
    - [x] upgrades
      - [x] husky@4
      - [x] jest@24.1
      - [x] prettier@1.17
      - [x] typescript-eslint@2.12
      - [x] webpack@5
    - [ ] yarn `nodeLinker: pnp`
    - [ ] yarn `pnpMode: loose`
  - [ ] pnp strict
    - [ ] [`@yarnpkg/doctor`](https://github.com/yarnpkg/berry/tree/master/packages/yarnpkg-doctor)
    - [ ] [`@rushstack/eslint-patch`](https://www.npmjs.com/package/@rushstack/eslint-patch)
  - [ ] [zero-installs](https://yarnpkg.com/features/zero-installs)
    - [ ] drop actions/cache
    - [ ] drop gitignore `.pnp.cjs`, `.pnp.js`, `.yarn/cache/`
    - [ ] drop husky post-checkout/post-merge
    - [ ] drop yarn install
    - [ ] git lfs / sparse checkout

## Adhoc

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
    - [yarn.build](https://yarn.build/)
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
  - [solid](https://github.com/ryansolid/solid)
  - stricter
  - [monorepo guide](https://monorepo.guide/)
    - manypkg
    - preconstruct
    - changesets
