require('@rushstack/eslint-patch/modern-module-resolution')
const path = require('path')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(process.cwd(), './tsconfig.json')
  },
  plugins: ['solid'],
  extends: ['eslint:recommended', 'plugin:solid/typescript']
}
