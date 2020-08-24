module.exports = {
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            message: 'Importing React is not needed, please remove.',
          },
        ],
      },
    ],
  },
}
