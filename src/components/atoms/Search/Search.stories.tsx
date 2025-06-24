import type { Meta, StoryObj } from '@storybook/react';

import Search from './Search';

const meta = {
  title: 'components/atoms/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: { type: 'radio' },
      options: ['nm', 'sm'],
    },
    interactionVariant: {
      control: 'radio',
      options: ['normal', 'light', 'strong'],
    },
  },
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    inputSize: 'nm',
    interactionVariant: 'normal',
    placeholder: 'Search',
  },
};

export const Small: Story = {
  args: {
    inputSize: 'sm',
    interactionVariant: 'normal',
    placeholder: 'Search',
  },
};
