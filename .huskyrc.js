module.exports = {
  hooks: {
    'prepare-commit-msg': 'if test "$(git config --bool hooks.prepare-commit-msg.disabled)" != true ; then exec < /dev/tty && npm run cm -- --hook || true ; fi',
    'pre-commit': 'lint-staged',
  },
}
