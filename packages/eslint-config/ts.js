const path = require('path')

module.exports = {
  extends: [
    require.resolve('./shared/base'),
    require.resolve('eslint-config-standard-with-typescript'),
    'plugin:prettier/recommended'
    // 'prettier/@typescript-eslint'
    // require.resolve('eslint-config-prettier/standard')
  ],
  parserOptions: {
    project: path.resolve(process.cwd(), './tsconfig.json')
  },
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
