# Yarn Version

## Design

Lock the Yarn version used by the project.

```bash
yarn set version
```

The command will...

- download a specific release of Yarn,
- store it inside the project,
- change the `yarnPath` settings from the project `.yarnrc.yml` file to point to the new file.

`.yarnrc.yml`

```yaml
yarnPath: .yarn/releases/yarn-<version>.js
```

## Rationale

A very good use case for this command is to enforce the version of Yarn used by every member of your team inside the same project -
by doing this you ensure that you have control on Yarn upgrades and downgrades (including on your deployment servers),
and get rid of most of the headaches related to someone using a slightly different version and getting a different behavior than you.

## References

- [`yarn set version`](https://yarnpkg.com/cli/set/version)
- [Yarnrc File](https://yarnpkg.com/configuration/yarnrc)
