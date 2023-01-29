require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['solid'],
  extends: ['eslint:recommended', 'plugin:solid/typescript']
}
