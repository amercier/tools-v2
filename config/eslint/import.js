module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/warnings'].filter(Boolean),
  rules: {
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: ['.'],
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
      },
    ],
    'import/prefer-default-export': ['off'],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
}
