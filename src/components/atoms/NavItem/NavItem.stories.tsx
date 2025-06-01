import type { Meta, StoryObj } from '@storybook/react';

import NavItem from './NavItem';

const meta = {
  title: 'components/atoms/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    isActive: { control: 'boolean' },
  },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Daily: Story = {
  args: {
    label: '데일리',
    href: '/daily',
    isActive: false,
  },
};

export const Content: Story = {
  args: {
    label: '콘텐츠',
    href: '/content',
    isActive: false,
  },
};

export const Community: Story = {
  args: {
    label: '커뮤니티',
    href: '/community',
    isActive: false,
  },
};
