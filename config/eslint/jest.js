module.exports = {
  overrides: [
    {
      files: ['*.{spec,test}.{js,jsx,ts,tsx}'],
      env: {
        jest: true,
      },
      extends: ['plugin:jest/all', 'plugin:jest-extended/recommended'],
    },
  ],
}
