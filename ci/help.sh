#!/usr/bin/env bash
# Display the list of available commands.
set -euo pipefail

# https://www.ostricher.com/2014/10/the-right-way-to-get-the-directory-of-a-bash-script/
get_script_dir () {
     SOURCE="${BASH_SOURCE[0]}"
     # While $SOURCE is a symlink, resolve it
     while [[ -h "$SOURCE" ]]; do
          DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
          SOURCE="$( readlink "$SOURCE" )"
          # If ${SOURCE} was a relative symlink (so no "/" as prefix, need to resolve it relative to the symlink base directory
          [[ ${SOURCE} != /* ]] && SOURCE="$DIR/$SOURCE"
     done
     DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
     echo "$DIR"
}

current_dir="$(get_script_dir)/"
prefix_len=$((${#current_dir} + 1))

echo -e "\\e[1m./ci.sh <script> -- program to run continuous integration and deployment scripts\\e[0m"
echo ""
echo "Available scripts:"

for file in "${current_dir}"*.sh
do
    if [[ -f ${file} ]] && [[ ${file::${prefix_len}} != "${current_dir}_" ]]; then
        task=${file#${current_dir}}
        task=${task:0:$((${#task}-3))}
        description=$(sed -n '2{p;q;}' "${file}")
        description=${description#"# "}
        printf "  \\e[36m%s\\e[0m - %s\\n" "${task}" "${description}"
    fi
done
