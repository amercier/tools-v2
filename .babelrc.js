module.exports = {
  plugins: [
    // Next.js doesn't require importing React on each `.jsx` file. To get the
    // same behavior on Storybook, we add babel-plugin-react-require.
    'react-require',
  ],

  presets: [
    // By default Jest does not embed JSX support, and fail with the error:
    // > Support for the experimental syntax 'jsx' isn't currently enabled
    // > Add @babel/preset-react (https://git.io/JfeDR) to the 'presets' section
    // of your Babel config to enable transformation.
    'next/babel',
  ],
}
