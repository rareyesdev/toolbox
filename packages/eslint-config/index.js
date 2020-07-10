const prettierConfig = require('@rareyes/prettier-config');

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['import', 'eslint-comments'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  ignorePatterns: ['**/dist/'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs

    /* prettier */

    // Prettier config overrides
    'prettier/prettier': ['error', prettierConfig],

    /* react */

    // Disable prop-types since we are using Typescript
    'react/prop-types': 'off',

    // Enforce props alphabetical sorting
    'react/jsx-sort-props': ['error', { callbacksLast: true }],

    /* @typescript-eslint */

    // Prefer type inference over explicit return types
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Allow hoisting semantic
    // Allow variables such as GQL Queries to be defined bellow the React component that uses them
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: false },
    ],

    // Consistent way of defining a React Function Component
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          'React.FunctionComponent': {
            message: 'Use React.FC instead',
            fixWith: 'React.FC',
          },
        },
      },
    ],

    /* import */

    // Prohibit default exports
    // This would be desired but many libraries/tools have conventions that depend on default exports (Redux, Storybook)
    // 'import/no-default-export': 'error',

    // Enforce a convention of not using namespace (a.k.a. "wildcard" *) imports
    'import/no-namespace': 'error',

    // Enforce a convention in the order of require() / import statements
    'import/order': 'error',

    // Reports when named exports are not grouped together in a single export declaration
    'import/group-exports': 'error',

    // Enforce a leading comment with the webpackChunkName for dynamic imports
    'import/dynamic-import-chunkname': 'error',

    /* eslint-comments */

    // Prevents eslint disable directive without description.
    'eslint-comments/require-description': 'error',
  },
  overrides: [
    {
      // JS rules
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
