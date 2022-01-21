var path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    // Agilie turned off way to many rules. TODO: re-enable good rules.
    'spaced-comment': 'off',
    'prefer-template': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    // This is needed, otherwise webpack is treated as prod dependencies
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.spec.js', 'webpack/*.js'] },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-mutable-exports': 'off',
    'no-empty-pattern': 'off',
    'no-empty-function': 'off',
    'no-underscore-dangle': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        map: [['~', './src']],
      },
    },
  },
};
