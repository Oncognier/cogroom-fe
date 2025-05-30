import type { Meta, StoryObj } from '@storybook/react';

import InputLabel from './InputLabel';

const meta = {
  title: 'components/atoms/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '라벨 텍스트',
    },
    required: {
      control: 'boolean',
      description: '필수 여부 표시',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Optional: Story = {
  args: {
    label: '이메일',
    required: false,
  },
};

export const Required: Story = {
  args: {
    label: '비밀번호',
    required: true,
  },
};
