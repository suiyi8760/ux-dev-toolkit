require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  extends: [require.resolve('./shared/base'), 'react-app', 'plugin:prettier/recommended']
}
