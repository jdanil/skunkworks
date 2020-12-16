# Dependency Versions

## Decision

Packages that are not published should use exact versions.

Libraries should use caret versions.

## Rationale

Exact versions improve repeatability.
Pinning exact versions also makes it easier to identify and keep track of dependency versions.
A similar outcome can also be achieved by installing purely from the lockfile, but exact versions are easier to enforce and leave less room for error.

Libraries should be more permissive, allowing use of any compatible version.
Reduces duplication of dependencies.
Allows consumers to easily resolve security vulnerabilities and bugs from transitive dependencies.
