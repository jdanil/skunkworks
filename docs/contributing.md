# Contributing

## Getting Started

### Setup

1. If you don't have them already, install:
   1. [git](https://git-scm.com/) to run `git` SCM commands via CLI.
   1. [Node.js](https://nodejs.org/) runtime (or `nvm` to automatically sync Node.js versions, see [Additional Tools](#additional-tools)).
1. Run `corepack enable` to create package manager shims.
1. Clone the repository from [GitHub](https://github.com/jdanil/skunkworks).
   1. Note: clone using HTTPS (or SSH without a password) for Git LFS support.
   1. Sparse checkout what you need, or
      ```bash
      git clone --filter=blob:none --no-checkout https://github.com/jdanil/skunkworks.git
      cd skunkworks/
      git sparse-checkout init --cone
      ./bootstrap.sh
      ```
   1. Checkout everything
      ```bash
      git clone https://github.com/jdanil/skunkworks.git
      ```
1. `cd` into the repository directory.
1. Run `yarn install` to download and install package dependencies, and link workspaces.
1. You're done! A complete list of scripts can be found in `package.json`.

### Additional Tools

- [NVDA](https://www.nvaccess.org/download/) Screen Reader
- [NVM for POSIX](https://github.com/nvm-sh/nvm)
- [NVM for Windows](https://github.com/coreybutler/nvm-windows)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Redux Developer Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
- [Testing Library: Which Query](https://chrome.google.com/webstore/detail/testing-library-which-que/olmmagdolfehlpjmbkmondggbebeimoh)
- [Testing Playground](https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano)

## Workflow

### Code Reviews

Code needs to be reviewed and approved by at least 2 other people.
Required reviewers will be added automatically, if any.

This [article](https://medium.com/palantir/code-review-best-practices-19e02780015f) describes our philosophy on code reviews.
[Google's Engineering Practices documentation](https://google.github.io/eng-practices/review/) also has some very detailed guidelines for both authors and code reviewers.

We also try to follow "Clean Code" principles.
Links to [Clean Code](https://moderatemisbehaviour.github.io/clean-code-smells-and-heuristics/) can be used to justify your code review comments.

### Updating

If you want to update the pull request, it is best to push a new commit rather than amend your previous commit.
This makes it easier for reviewers to see what has changed between code reviews.

## Code

### Style

The repository enforces lots of strict rules to keep the code easy to understand and maintainable, and prevent code smells.
These rules are enforced during development, pre-commit, pre-push, and in CI.

#### General

When writing text or comments, we try to use [sentence casing](https://en.wiktionary.org/wiki/sentence_case).

## Guiding Principles

> Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.
>
> -- John Woods

### YAGNI

You Aren't Gonna Need It.

An acronym that basically means, don't write stuff that you do not have an immediate need for.
There is a [wikipedia page](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) for it.

### DRY

Don't Repeat Yourself.

A [TLA](https://en.wikipedia.org/wiki/Three-letter_acronym) which states that you should not repeat basic information.
There is a [wikipedia page](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) for it as well.
