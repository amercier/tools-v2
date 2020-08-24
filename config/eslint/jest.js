const reactConfig = require('./react')

module.exports = {
  overrides: [
    {
      files: ['*.{spec,test}.{js,jsx,ts,tsx}'],
      env: {
        jest: true,
      },
      plugins: ['jest-extended'],
      extends: ['plugin:jest/all', 'plugin:jest-extended/recommended'],
      rules: {
        'jest/prefer-expect-assertions': 'off',
      },
    },
    {
      files: ['*.spec.{js,jsx,ts,tsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [
              ...reactConfig.rules['no-restricted-imports'][1].paths,
              {
                name: '@testing-library/react',
                message:
                  'Importing @testing-library/react is forbidden in a .spec file, use react-test-renderer/shallow instead, or rename to .test.',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.test.{js,jsx,ts,tsx}'],
      rules: {
        'jest/expect-expect': 'off',
      },
    },
  ],
}
