import type { Meta, StoryObj } from '@storybook/react';

import OutlinedTag from './OutlinedTag';

const meta = {
  title: 'components/atoms/OutlinedTag',
  component: OutlinedTag,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'green', 'violet', 'orange', 'cyan', 'pink', 'gray'],
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof OutlinedTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '태그',
    color: 'blue',
  },
};
