// We reference @rareyes/eslint-config in package.json to get all dependencies but we reference the config file
// directly to always lint with the latest (not released) version of @rareyes/eslint-config.
// This allows @rareyes/eslint-config to lint itself.
module.exports = require('./packages/eslint-config');
