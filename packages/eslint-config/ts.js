require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: [
    require.resolve('./shared/base'),
    require.resolve('eslint-config-standard-with-typescript'),
    'plugin:prettier/recommended'
    // 'prettier/@typescript-eslint'
    // require.resolve('eslint-config-prettier/standard')
  ],
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off'
      }
    }
  ]
}
