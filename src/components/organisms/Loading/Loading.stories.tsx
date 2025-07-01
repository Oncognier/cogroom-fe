import type { Meta, StoryObj } from '@storybook/react';

import Loading from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'components/organisms/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {};
