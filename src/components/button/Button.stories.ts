import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Components/TypeScript Example',
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};

export const Primary: Story = {
	args: {
		primary: true,
	}
};
