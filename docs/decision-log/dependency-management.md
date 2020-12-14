# Dependency Management

## Decision

renovate bot to automatically raise pull requests.
`libyear` to enforce as an architectural fitness function.

## Rationale

### Dependency Updates

renovate and dependabot are both frontrunners in the category of dependency update tools.
[Greenkeeper](https://greenkeeper.io/) has been shut down, with functionality integrated into [Snyk](https://snyk.io/).

dependabot would seem to be the incumbent, especially after being acquired and integrated into GitHub, but it has some limitations.
The most obstructing limitation is the lack of support for yarn v2.
Development on dependabot has been progressing very slowly as the team focuses on integration with GitHub.

renovate would seem to have more comprehensive [package manager](https://docs.renovatebot.com/modules/manager/) support.
nvm and yarn v2 support are of particular interest.

renovate is much more configurable.

- auto-merging
- deduping
- dependency grouping
- immediate frequency
- lockfile maintenance
- separate major branches

### Fitness Function

libyear.

## References

- [renovate](https://github.com/renovatebot/renovate)
- [libyear](https://github.com/jdanil/libyear)
