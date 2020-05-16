# `@rareyes/prettier-config`

Share the same Prettier configuration between projects.

## Usage

```javascript
// .prettierrc.js in project root
const prettierConfig = require('prettier-config');

module.exports = {
  ...prettierConfig,
  // add overrides here...
};
```
