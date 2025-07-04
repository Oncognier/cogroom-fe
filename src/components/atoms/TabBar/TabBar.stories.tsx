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
      control: 'radio',
      options: ['default', 'active', 'disabled'],
      defaultValue: 'default',
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
    state: 'default',
    fillContainer: false,
    interactionVariant: 'normal',
    onChange: action('탭 클릭됨'),
  },
};

export const Active: Story = {
  args: {
    label: 'Label',
    size: 'md',
    state: 'active',
    fillContainer: false,
    interactionVariant: 'normal',
    onChange: action('선택된 탭 클릭됨'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    size: 'md',
    state: 'disabled',
    fillContainer: false,
    interactionVariant: 'normal',
    onChange: action('선택된 탭 클릭됨'),
  },
};
