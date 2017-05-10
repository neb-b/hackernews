#!/bin/sh
#husky 0.13.3

command_exists () {
  command -v "$1" >/dev/null 2>&1
}

load_nvm () {
  export $1=$2
  [ -s "$2/nvm.sh" ] && . $2/nvm.sh
  command_exists nvm && [ -f .nvmrc ] && nvm use
}

has_hook_script () {
  [ -f package.json ] && cat package.json | grep -q "\"$1\"[[:space:]]*:"
}

cd .

has_hook_script precommit || exit 0

export PATH=$PATH:/usr/local/bin:/usr/local
load_nvm BREW_NVM_DIR /usr/local/opt/nvm

load_nvm NVM_DIR /Users/seanyesmunt/.nvm

command_exists npm || {
  echo >&2 "> husky - Can't find npm in PATH. Skipping precommit script in package.json"
  exit 0
}

echo
echo "> husky - npm run -s precommit"
echo

export GIT_PARAMS="$*"
npm run -s precommit || {
  echo
  echo "> husky - pre-commit hook failed (add --no-verify to bypass)"
  echo "> husky - to debug, use 'npm run precommit'"
  exit 1
}
