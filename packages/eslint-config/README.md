# `@rareyes/eslint-config`

Share the same ESLint configuration between projects.

## Usage

Install peer-dependencies
```
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks
```

Install config
```
npm i -D @rareyes/eslint-config
```

## Notes

`@rareyes/eslint-config` uses `@rareyes/prettier-config` under the hood. You don't need to install it.

## Debugging this Configuration

When debugging issues with ESLint in general it's good to first disable `eslint-loader` [cache](https://webpack.js.org/loaders/eslint-loader/#cache) (enabled by default by Create React App). Use this *package.json* script for convenience: `"lint:cache:delete": "trash node_modules/.cache/eslint-loader"`
