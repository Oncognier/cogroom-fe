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
    children: {
      control: {
        type: 'text',
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

export const WithChildren: Story = {
  args: {
    icon: <ScriptX />,
    children: <p>Children</p>,
  },
};
