require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  globals: {
    // __DEV__: true,
    // __PROD__: true
  },
  env: {
    // 支持浏览器环境
    browser: true,
    // 识别 CommonJS
    node: true,
    // 识别 ES 的代码，使用 ECMAScript 2021 自动设置 ecmaVersion parser 为 12，
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: ['./tsconfig.json'] // 告诉 eslint：tsconfig 在哪
  // },
  rules: {
    'no-unsafe-optional-chaining': 'off',
    'no-constant-condition': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      extends: [
        'plugin:vue/recommended',
        '@vue/eslint-config-typescript/recommended',
        'plugin:prettier/recommended'
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser',
          js: 'espree',
          '<template>': '@typescript-eslint/parser'
        }
      },
      rules: {
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off'
      }
    },
    // 处理 TS 文件
    {
      files: ['src/**/*.{ts,tsx}', 'src/**/*.{js,jsx}'], // 只处理 ts 和 js 文件
      excludedFiles: [], // 这里禁用了 .eslintrc.js 的类型检查
      parser: '@typescript-eslint/parser', // 能看懂 TypeScript
      parserOptions: {
        project: ['./tsconfig.json'] // 告诉 eslint：tsconfig 在哪
      },
      extends: [
        // typescript-eslint 的推荐规则，只是这些最佳规则都是针对 TS 的
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
        // tsconfig.json 里 Type Checking 的推荐规则
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      plugins: [
        // 使用 typescript x eslint 的插件
        '@typescript-eslint'
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-inferrable-types': 'warn'
      }
    }
  ]
}
