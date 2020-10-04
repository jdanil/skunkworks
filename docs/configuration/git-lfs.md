# Git Large File Storage (LFS)

## Context

Updates to binary files are handled as complete file changes by Git.
Large files and binary files grow the history of a repository every time they are updated.
Fetching, pulling, and other Git operations become slower.

Git LFS is an extension to Git.
Its goal is to work more efficiently with large files and binary files in a repository.
The extension uses pointers to files flagged to be handled by Git LFS.

## Design

`.gitattributes`

```text
*.ext filter=lfs diff=lfs merge=lfs -text
```

## Rationale

Git LFS reduces the impact of large files on a repository by downloading relevant versions of files lazily.

Git LFS is supported by most popular remote servers.

## Consequences

GitHub requires either SSH without a password or HTTPS to pull from and push to Git LFS.

## References

- [Git LFS](https://git-lfs.github.com/)
