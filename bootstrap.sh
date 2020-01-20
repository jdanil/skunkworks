#!/usr/bin/env bash
# Sparse Checkout Repository

DOMAIN=$1

case $DOMAIN in
"app")
	DIRECTORIES="docs/ applications/ components/ packages/"
	;;
"ci")
	DIRECTORIES="docs/ .github/ ci/"
	;;
"service")
	DIRECTORIES="docs/ packages/ services/"
	;;
"help")
  echo "Available domains:"
  DOMAINS=(
    app
    ci
    service
  )
  DESCRIPTIONS=(
    "Frontend Applications"
    "Continuous Integration Configuration and Scripts"
    "Deployable Services"
  )
  for i in ${!DOMAINS[@]}
  do
    printf "  \\e[36m%s\\e[0m - %s\\n" "${DOMAINS[$i]}" "${DESCRIPTIONS[$i]}"
  done
	exit 1
	;;
*)
  echo "Domain \"${1}\" doesn't exist."
  ./${0} "help"
	exit 1
	;;
esac

echo "Running 'git sparse-checkout init --cone'"
git sparse-checkout init --cone

echo "Running 'git sparse-checkout set $DIRECTORIES'"
git sparse-checkout set $DIRECTORIES
