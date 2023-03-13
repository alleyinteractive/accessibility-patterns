const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-turbo-build',
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
    options: {
      lazyCompilation: true,
    },
  },
  webpackFinal: async (config) => {
    // Hook up aliases.
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
    };

    // Return the altered config
    return config;
  },
};
