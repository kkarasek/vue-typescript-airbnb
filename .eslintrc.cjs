/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-airbnb-with-typescript',
    'plugin:prettier/recommended',
    'plugin:vuejs-accessibility/recommended'
  ],
  plugins: ['vuejs-accessibility'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-plusplus': 'off'
  }
};
