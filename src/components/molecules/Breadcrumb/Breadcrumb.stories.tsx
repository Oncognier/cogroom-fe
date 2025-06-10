import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumb from './Breadcrumb';

const meta = {
  title: 'components/molecules/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Daily: Story = {
  args: {
    items: [
      { name: '홈', href: '/' },
      { name: '데일리', href: '/daily' },
    ],
  },
};

export const MyPage: Story = {
  args: {
    items: [
      { name: '홈', href: '/' },
      { name: '마이페이지', href: '/mypage' },
    ],
  },
};
