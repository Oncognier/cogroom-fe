import type { Meta, StoryObj } from '@storybook/react';

import FormStatusMessage from './FormStatusMessage';

const meta = {
  title: 'components/atoms/FormStatusMessage',
  component: FormStatusMessage,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'radio',
      options: ['error', 'warning', 'success', 'disable'],
      description: '상태에 따른 스타일 지정',
    },
    label: {
      control: 'text',
      description: '메시지 내용',
    },
  },
} satisfies Meta<typeof FormStatusMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    status: 'error',
    label: 'Error 상태입니다.',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    label: 'Warning 상태입니다.',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    label: 'Success 상태입니다.',
  },
};

export const Disable: Story = {
  args: {
    status: 'disable',
    label: 'Disable 상태입니다.',
  },
};
