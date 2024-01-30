const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-turbo-build',
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  core: {
    disableTelemetry: true,
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

  docs: {
    autodocs: 'tag',
  },
};
