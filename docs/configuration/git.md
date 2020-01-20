# Git

## Context

Git introduces `git sparse-checkout` in version [2.25.0](https://github.blog/2020-01-13-highlights-from-git-2-25/).
This allows for checking out a partial clone of a repository.

## Design

`bootstrap.sh`
```bash
git sparse-checkout init --cone
git sparse-checkout set ${1}
```

## Rationale

When working in a monorepo its likely that some developers will not need or care about all files in the repository.
This is especially true if the monorepo is shared between different teams or projects.
Checking out a partial clone of the repository reduces mental overhead for developers and ensures the developer workflow is as fast as possible.

## References

- [Git Sparse Checkout](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/)
