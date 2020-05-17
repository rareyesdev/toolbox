# `@rareyes/prettier-config`

Share the same Prettier configuration between projects.

## Usage

```
npm i -D @rareyes/prettier-config
```

### Without overrides

```javascript
// .prettierrc.js in project root
module.exports = require('@rareyes/prettier-config');
```

### With overrides

```javascript
// .prettierrc.js in project root
const prettierConfig = require('prettier-config');

module.exports = {
  ...prettierConfig,
  // add overrides here...
};
```
