import type { Meta, StoryObj } from '@storybook/react';

import { DEFAULT_THUMBNAIL } from '@/constants/image';

import Thumbnail from './Thumbnail';

const meta: Meta<typeof Thumbnail> = {
  title: 'components/atoms/Thumbnail',
  component: Thumbnail,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'select',
      options: ['1_1', '5_4', '4_3', '3_2', '16_10', '16_9', '2_1', '21_9'],
    },
    border: {
      control: 'boolean',
    },
    radius: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {
  args: {
    src: DEFAULT_THUMBNAIL,
    alt: 'default thumbnail',
    ratio: '16_9',
    border: false,
    radius: false,
  },
};

export const WithBorder: Story = {
  args: {
    src: DEFAULT_THUMBNAIL,
    alt: 'bordered thumbnail',
    ratio: '4_3',
    border: true,
  },
};

export const WithRadius: Story = {
  args: {
    src: DEFAULT_THUMBNAIL,
    alt: 'rounded thumbnail',
    ratio: '1_1',
    radius: true,
  },
};

export const Portrait: Story = {
  args: {
    src: DEFAULT_THUMBNAIL,
    alt: 'portrait thumbnail',
  },
};
