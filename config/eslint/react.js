module.exports = {
  extends: ['plugin:react-hooks/recommended'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message: 'Importing React is not needed, please remove.',
          },
        ],
      },
    ],
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: 'use[A-Z].*',
      },
    ],
  },
}
