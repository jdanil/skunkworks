# Dependency Management

## Decision

Renovate bot to automatically raise pull requests.

`libyear` to enforce as an architectural fitness function.

## Rationale

### Dependency Updates

Renovate and dependabot are both frontrunners in the category of dependency update tools.
[Greenkeeper](https://greenkeeper.io/) has been shut down, with functionality integrated into [Snyk](https://snyk.io/).

dependabot would seem to be the incumbent, especially after being acquired and integrated into GitHub, but it has some limitations.
The most obstructing limitation is the lack of support for yarn v2.
Development on dependabot has been progressing very slowly as the team focuses on integration with GitHub.

#### Support

Renovate would seem to have more comprehensive [package manager](https://docs.renovatebot.com/modules/manager/) support.
nvm and yarn v2 support are of particular interest.

#### Configuration

Renovate is much more configurable than dependabot, allowing for more tailored and effective workflows.

##### Auto-Merging

Renovate can be configured to auto-merge changes if status checks pass.
This avoids the need for manual intervention for some changes that may be considered safe.
Auto-merging can be restricted to particular types of changes (i.e. by any combination of package manager, dependency type, update type, package name pattern, semver, language, data source, target branch, etc.).

##### Deduping

Renovate supports some select "post update options" to run after dependencies have been updated.
One of these options is "dedupe" which deduplicates dependencies with overlapping ranges (according to your preferred strategy).

Deduping removes unnecessary dependencies and simplifies the dependency tree where a dependency may be more effectively shared by multiple dependent packages.
Dependency duplication leads to longer install times and potentially bloated bundles where there are multiple copies of the same dependencies.

##### Dependency Grouping

Select dependencies are developed as part of a monorepo.
When a release is triggered in a monorepo, it may result in several updated packages.

Renovate supports dependency grouping, such that dependencies in the same group are upgraded together and raised as a single pull request.
Grouping dependencies reduces the number of pull requests to review, reduces the (high) chance of merge conflicts and the need to rebase, and ensures that interdependent packages are using the correct versions of one another (especially if the workspace packages are not using independent versioning).

##### Lockfile Maintenance

Lockfiles are used to achieve consistent and reproducible installs over time and across machines.
These lockfiles are often only updated as a result of updates to direct dependencies, if deduping is performed, or if an audit autofix is run.

While the relative immutability of a lockfile is important for maintaining stability, over time it leaves many transitive dependencies outdated.
There may be many bug fixes, security vulnerability fixes, and features that are left unrealised.
It also leaves us unaware of whether the project is compatible with the latest changes in the ecosystem.

Renovate includes the ability to run lockfile maintenance, to refresh lockfiles and keep them up-to-date.
Lockfile maintenance can be scheduled to run independently of the regular dependency updates.

##### Separate Major Branches

Renovate supports separating dependency updates by semantic version update type.
By default, renovate will raise major version updates on a separate branch.

Separating major version updates in particular allows consumers to prepare for them accordingly, while still receiving any further minor and patch version updates in the meantime.

##### Update Schedule & Frequency

When dependabot was integrated into GitHub, support for the "live" update schedule was removed, with the most frequent check now supported being "daily".
Renovate supports immediate updates via a schedule value of "at any time", as well as more granular control of the schedule.

Updates can be restricted to particular times and days.
This may be useful in configuring dependency updates to run status checks at off-peak times (freeing resources and reducing costs), or supporting code freezes before releases.

### Fitness Function

While we may use renovate to automatically raise dependency update pull requests for us, it doesn't enforce any standards.
Automated dependency update pull requests can easily be ignored as a project falls out of currency.

`libyear` fills this gap.
`libyear` tracks dependencies over time, giving an indication of possible work needed.
It can be used to set and enforce an architectural [fitness function](../knowledge-bank/fitness-functions.md) around "dependency freshness", namely [dependency drift](https://www.thoughtworks.com/radar/techniques/dependency-drift-fitness-function).
As well as tracking "drift" from the latest versions of dependencies, `libyear` also provides insight into dependencies that may no longer be receiving regular maintenance.
This may be an indication that a dependency has fallen out of favour, been succeeded by an alternative, or may no longer be necessary.
These fitness functions keep us honest, and ensure we don't exceed an agreed level of technical debt, with regard to dependency freshness.

## References

- [renovate](https://github.com/renovatebot/renovate)
- [libyear](https://github.com/jdanil/libyear)
