import type { Meta, StoryObj } from '@storybook/react';

import ScriptX from '@/assets/icons/script-x.svg';

import EmptyState from './EmptyState';

const meta = {
  title: 'components/organisms/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <ScriptX />,
  },
};
