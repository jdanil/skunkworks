# Yarn Workspaces

## Design

`package.json`

- Flag root `package.json` as private to prevent publishing
- Add references to workspace directories

```json
{
  "private": true,
  "workspaces": [
    "applications/*",
    "components/*",
    "configs/*",
    "packages/*",
    "services/*"
  ]
}
```

## Rationale

- All project dependencies are installed together, giving Yarn more latitude to better optimise them
- Yarn will use a single lockfile rather than a different one for each project, which means fewer conflicts and easier reviews

## References

- [Manifest File](https://yarnpkg.com/configuration/manifest)
