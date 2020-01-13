#!/usr/bin/env bash
set -euo pipefail

if [[ ! -f "./ci/${1}.sh" ]]; then
  echo "Script \"${1}\" doesn't exist."
  source "./ci/help.sh"
  exit 1
fi

# shellcheck disable=SC1090
source "./ci/${1}.sh" "${@:2}"
