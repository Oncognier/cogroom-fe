import type { Meta, StoryObj } from '@storybook/react';

import SolidTag from './SolidTag';

const meta = {
  title: 'components/atoms/SolidTag',
  component: SolidTag,
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
} satisfies Meta<typeof SolidTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '태그명',
    color: 'blue',
  },
};
