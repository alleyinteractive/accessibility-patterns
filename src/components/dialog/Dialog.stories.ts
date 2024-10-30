import { Meta, StoryObj } from '@storybook/react';

import Dialog from './Dialog';

const meta: Meta<typeof Dialog> = {
	component: Dialog,
	title: 'Components/Dialog'
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Basic: Story = {};
