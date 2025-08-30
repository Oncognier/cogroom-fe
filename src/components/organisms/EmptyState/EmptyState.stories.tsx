import { action } from '@storybook/addon-actions';
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
    description: {
      control: {
        type: 'text',
      },
    },
    buttonLabel: {
      control: {
        type: 'text',
      },
    },
    buttonAction: {
      action: 'clicked',
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

export const WithDescriptionAndButton: Story = {
  args: {
    icon: <ScriptX />,
    description: 'Description',
    buttonLabel: 'Button Label',
    buttonAction: action('clicked'),
  },
};
