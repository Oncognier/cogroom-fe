import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import TabBar from './TabBar';

const meta = {
  title: 'components/atoms/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md'],
    },
    state: {
      control: 'boolean',
      description: '선택된 탭 여부',
      defaultValue: false,
    },
    fillContainer: {
      control: 'boolean',
      description: '컨테이너를 가득 채울지 여부',
      defaultValue: false,
    },
    interactionVariant: {
      control: 'radio',
      options: ['normal', 'light', 'strong'],
      defaultValue: 'normal',
    },
    onChange: { action: 'clicked' },
  },
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    size: 'md',
    state: false,
    fillContainer: false,
    interactionVariant: 'normal',
    onChange: action('탭 클릭됨'),
  },
};

export const Selected: Story = {
  args: {
    label: 'Label',
    size: 'md',
    state: true,
    fillContainer: false,
    interactionVariant: 'normal',
    onChange: action('선택된 탭 클릭됨'),
  },
};
