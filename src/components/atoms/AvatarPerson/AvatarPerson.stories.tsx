import type { Meta, StoryObj } from '@storybook/react';

import { DEFAULT_AVATAR_IMAGE } from '@/constants/image';

import AvatarPerson from './AvatarPerson';

const meta = {
  title: 'components/atoms/AvatarPerson',
  component: AvatarPerson,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['icon', 'image'],
    },
    size: {
      control: 'radio',
      options: ['xsm', 'sm', 'md', 'lg', 'xlg'],
    },
    src: {
      control: 'text',
      description: '이미지 URL',
    },
  },
} satisfies Meta<typeof AvatarPerson>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    type: 'icon',
    size: 'md',
  },
};

export const Image: Story = {
  args: {
    type: 'image',
    size: 'md',
    src: DEFAULT_AVATAR_IMAGE,
  },
};
