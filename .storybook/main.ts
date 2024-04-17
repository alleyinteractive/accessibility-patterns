import type { StorybookConfig } from '@storybook/react/types';
const path = require('path');

const config: StorybookConfig = {
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
		builder: 'webpack5',
	},

	typescript: {
		check: true,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {},
	},

	webpackFinal: async (config) => {
		// Hook up aliases.
		// eslint-disable-next-line no-param-reassign
		if (config.resolve) {
			config.resolve.alias = {
				'@': path.resolve(__dirname, '../src'),
			};
		}

		// Return the altered config
		return config;
	},
};

export default config;
