# Package Manager

## Decision

Yarn.

## Rationale

### Features

#### Workspaces

[Workspaces](https://yarnpkg.com/features/workspaces) makes it easy to work with monorepos, allowing multiple packages to reside in the same repository and depend upon each other.
This architecture allows any modifications made to one package to instantly be applied to its dependents, without publishing.

Yarn v2 introduced a new [workspace tools](https://github.com/yarnpkg/berry/tree/master/packages/plugin-workspace-tools) plugin to interact with workspaces via the CLI.
This plugin allows for [focused installs](https://yarnpkg.com/cli/workspaces/focus), resulting in quicker installs for large monorepos.

#### Resolutions

Yarn supports [selective dependency resolutions](https://yarnpkg.com/configuration/manifest/#resolutions), which lets you define custom package versions or ranges inside your dependencies through the `resolutions` field in your `package.json` manifest file.

This is useful in cases where...

- You may be depending on a package that is not updated frequently, which depends on another package that got an important upgrade.
  In this case, if the version range specified by your direct dependency does not cover the new sub-dependency version, you are stuck waiting for the author.
- A sub-dependency of your project got an important security update, and you don’t want to wait for your direct-dependency to issue a minimum version update.
- You are relying on an unmaintained but working package and one of its dependencies got upgraded.
  You know the upgrade would not break things, and you also don’t want to fork the package you are relying on, just to update a minor dependency.
- Your dependency defines a broad version range, and your sub-dependency just got a problematic update, so you want to pin it to an earlier version.

#### Yarn Path

Yarn can be instructed to defer to another yarn binary for execution.
This can be configured via the [yarn path](https://yarnpkg.com/configuration/yarnrc#yarnPath) option.
Useful if you want to bundle yarn in your repository and have everyone use the same version, for environment consistency.

Yarn path can be set via the [`yarn set version`](https://yarnpkg.com/cli/set/version) command.
Yarn also supports a [`yarn set version from sources`](https://yarnpkg.com/cli/set/version/from/sources) command.
This command allows yarn to be built from `master` or another branch, to reduce the wait time for any important changes.

#### Plug'n'Play

[Plug'n'Play](https://yarnpkg.com/features/pnp) is an alternative installation strategy for Node.js.

Typically, Node package managers generate a `node_modules` directory that Node can consume via its builtin [Node Resolution Algorithm](https://nodejs.org/api/modules.html#modules_all_together).
Node traverses `node_modules` directories up the hierarchy to find package manifest files.

This installation and resolution strategy has the following issues...

- `node_modules` directories typically contain a gargantuan number of files.
  The time taken to generate these files makes up more than 70% of install time.
  Even with pre-existing installations, package managers still have to diff the existing `node_modules` with the desired state.
- `node_modules` generation is I/O-heavy, so package managers don't have much room for improvement to further optimise installation.
- The Node Resolution Algorithm is very forgiving, allowing packages that aren't explicitly declared as dependencies to be accessed.
  This means that the specific version of a package or even its availability after install is not guaranteed.
- At runtime, the Node Resolution Algorithm has to make a bunch of `stat` and `readdir` calls to figure out where to load every single required file from.
  This process is extremely wasteful and is a big contributor to Node application boot time.
- The structure of the `node_modules` directory does not lend itself to deduping.
  Some algorithms could be employed to optimise the tree layout (via hoisting), but package managers are unable to optimise particular patterns to minimise disk and memory usage.

Yarn, on the other hand, already knows everything there is to know about the dependency tree.
Instead of leaving Node to locate packages, Plug'n'Play allows yarn to handle this resolution.
Yarn (with Plug'n'Play enabled) generates a `.pnp.cjs` file instead of the usual `node_modules` directory.
The `.pnp.cjs` file contains a map linking package names and versions to a location on the disk.
The file also contains another map linking package names and versions to their dependencies.

This approach has the following benefits...

- On cold install, only a single text file needs to be generated instead of tens of thousands.
  This reduces installation speed and removes disk read/write speed as a performance bottleneck.
- Installations are more stable and reliable due to reduced I/O operations, which are prone to failure.
- Perfect optimisation of the dependency tree.
- The generated `.pnp.cjs` file can be committed to the repository to support "zero-installs".
- Application start-up speed is reduced, as Node no longer needs to iterate over the filesystem hierarchy.
- Plug'n'Play uses zip archives in place of files in the `node_modules` directory.
  These archive files are typically 1/10th the size of those in `node_modules`.

#### Offline Cache

[Documentation](https://yarnpkg.com/features/offline-cache)

#### Zero-Installs

As a side-effect of Plug'n'Play and the local cache introduced in yarn v2, consumers can configure their projects to achieve [zero-installs](https://yarnpkg.com/features/zero-installs).

Zero-installs can be configured by...

- Checking the local cache, `.yarn/cache`, into source control.
  See [Git LFS](../configuration/git-lfs.md) to handle these binary files.
- Checking the generated `.pnp.cjs` file into source control.
- Checking `.yarn/unplugged` into source control, if dependencies require post-install scripts.

This feature allows a repository to be checked-out and used immediately, without first having to install dependencies.

This configuration has the following benefits...

- Improved stability and reproducibility of builds.
- Eliminates reliance on third-party package repositories.
- Quicker and simpler developer experience.
- Consistent development environment, without the need for `install` git hooks.
- Isolates from environment issues (e.g. authentication, network connectivity, directory write permissions, etc.).

#### Constraints

Yarn v2 introduced [constraints](https://yarnpkg.com/features/constraints).
Constraints allow us to create and enforce rules across workspaces.
We can think of them as linting rules for package manifest files.

Constraint recipe examples...

- Prevent all workspaces from depending on a specific package.
- Prevent workspaces from depending on conflicting versions of the same dependency.
- Prevent workspaces from depending on non-workspace versions of available workspaces.
- Enforce a particular `license` field across workspaces.
- Enforce a particular `engines.node` field across workspaces.

#### Plugins

Yarn v2 was redesigned with a modular API that can be extended via [plugins](https://yarnpkg.com/features/plugins).

Plugins expose the ability to...

- Add new resolvers.
- Add new fetchers.
- Add new linkers.
- Add new commands.
- Subscribe to events.
- Integrate with each other.

This flexible architecture will empower us to...

- Opt in to experimental features.
- Opt out of default features.
- Perform piecemeal migrations.
- Leverage community contributions.
- Tailor our workflow.
- Share extensions with others.

This allows us to customise and enhance the package manager's behavior and functionality.
We can design solutions according to our own specifications without having to raise an RFC, reach a community consensus, wait for other changes in the release train, etc.
These plugins may also be shared between projects.

#### Patch Protocol

If an issue is identified in a dependency, yarn's ["patch" protocol](https://yarnpkg.com/features/protocols#patch) can be used to modify the source code without forking the dependency.

### Cross-Platform Support

Yarn runs scripts through a basic [shell script](https://github.com/yarnpkg/berry/tree/master/packages/yarnpkg-shell) implementation.
This allows the use of operators, redirection, variables, and positional arguments regardless of the underlying operating system.
This eliminates the need for tools like [cross-env](https://github.com/kentcdodds/cross-env).

### Upcoming

#### corepack (previously pmm)

[Node.js](https://nodejs.org/) comes with `npm` bundled by default.
If users want to use a different package manager, it needs to be installed separately.

This is not generally an issue in CI, as the default docker node image comes with both `npm` and `yarn` pre-installed.

A [proposal](https://github.com/nodejs/TSC/issues/904) (and [pull request](https://github.com/nodejs/node/pull/35398)) has been put forward for including out-of-the-box support for both `yarn` and `pnpm` via [corepack](https://github.com/nodejs/corepack).
A [Node.js Binary Manager Summit](https://github.com/nodejs/node/discussions/35682) has been held to discuss a solution incorporating this functionality.
This would put all popular Node package managers on equal footing, and lower the barrier for using alternative package managers.

#### Multi-Language Support

One of the [long-term goals](https://github.com/yarnpkg/yarn/issues/6953) for yarn is to become a package management platform, offering multi-language support for different installation targets (other than Node).

Yarn v2 has been architected to isolate the core from the resolvers, fetchers, and linkers, which are now provided as plugins.
The aim being to offer package management features in a language-agnostic way.

If this goal is realised, it could help unify tooling within projects.

## References

- [Yarn](https://yarnpkg.com/)
