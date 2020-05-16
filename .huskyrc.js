module.exports = {
  hooks: {
    "prepare-commit-msg": "exec < /dev/tty && npm run cm -- --hook || true",
  },
}
