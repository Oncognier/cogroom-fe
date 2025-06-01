import type { Meta, StoryObj } from '@storybook/react';

import NavList from './NavList';

const meta = {
  title: 'components/molecules/NavList',
  component: NavList,
  tags: ['autodocs'],
  argTypes: {
    pathname: {
      control: 'radio',
      options: ['/', '/daily', '/content', '/community'],
    },
  },
} satisfies Meta<typeof NavList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pathname: '/',
  },
};

export const Daily: Story = {
  args: {
    pathname: '/daily',
  },
};

export const Content: Story = {
  args: {
    pathname: '/content',
  },
};

export const Community: Story = {
  args: {
    pathname: '/community',
  },
};
