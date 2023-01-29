require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json']
  },
  plugins: ['solid'],
  extends: ['eslint:recommended', 'plugin:solid/typescript']
}
