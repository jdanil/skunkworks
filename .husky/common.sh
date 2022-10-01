# utilities
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# git
GIT_DEFAULT_BRANCH=$(git for-each-ref --format='%(refname:short)' $(git symbolic-ref refs/remotes/origin/HEAD))

# nvm
use_nvm_version () {
  if command_exists nvm; then
    NVM_VERSION=$(cat .nvmrc)
    nvm install ${NVM_VERSION}
    nvm use ${NVM_VERSION}

    if command_exists corepack; then
      corepack enable
    fi
  fi
}

# Windows 10, Git Bash, and Yarn workaround
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
