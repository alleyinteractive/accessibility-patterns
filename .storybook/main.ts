import type { StorybookConfig } from '@storybook/react-webpack5';
import { Configuration } from 'webpack';
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
		builder: '@storybook/builder-webpack5',
	},

	typescript: {
		check: true,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {},
	},

	webpackFinal: async (config: Configuration) => {
		// Hook up aliases.
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
