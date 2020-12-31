module.exports = {
  root: true,

  extends: ['amercier/next-typescript', 'amercier/addons/storybook'],

  rules: {
    // TODO Remove once integrated in eslint-config-amercier
    'no-restricted-exports': 'off',
    'react/require-default-props': 'off',
  },

  overrides: [
    {
      files: ['config/**', 'scripts/**', '*Story.*'],
      extends: ['amercier/addons/dev'],
    },
  ],
}
