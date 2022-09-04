module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ['testing-library', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ], // forbids naming interfaces in lower case
    'react/jsx-uses-react': 'off', // off because New JSX Transform - https://uk.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/react-in-jsx-scope': 'off', // off because New JSX Transform
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ], // configure import order, import from react always first
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ], // disallow unnecessary curly braces in JSX props and/or children
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
        patterns: [
          '!styled-components/macro',
          '@mui/*/*/*',
          '!@mui/material/test-utils/*',
        ],
      },
    ], // styled-components enforce macro imports
    'react/no-children-prop': 'off', // off because New JSX Transform
  },
};
