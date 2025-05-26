import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import Blank from '@/assets/icons/blank.svg';

import IconButton from './IconButton';

const meta = {
  title: 'components/atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['normal', 'outlined', 'solid', 'background'],
    },
    size: {
      control: 'text',
    },
    interactionVariant: {
      control: 'radio',
      options: ['normal', 'light', 'strong'],
    },
    interactionColor: {
      control: 'color',
      description: '인터랙션 오버레이의 색상입니다.',
      defaultValue: 'rgba(55, 56, 60, 0.61)',
    },
    disable: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
      defaultValue: false,
    },
    pushBadge: {
      control: 'boolean',
      description: '우측 상단에 알림 뱃지를 표시할지 여부',
      defaultValue: false,
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    variant: 'normal',
    size: '40px',
    interactionVariant: 'normal',
    interactionColor: 'rgba(55, 56, 60, 0.61)',
    disable: false,
    pushBadge: false,
    children: <Blank />,
    onClick: action('clicked'),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: '40px',
    interactionVariant: 'light',
    interactionColor: 'rgba(55, 56, 60, 0.61)',
    disable: false,
    pushBadge: false,
    children: <Blank />,
    onClick: action('clicked'),
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    size: '40px',
    interactionVariant: 'strong',
    interactionColor: 'rgba(55, 56, 60, 0.61)',
    disable: false,
    pushBadge: false,
    children: <Blank />,
    onClick: action('clicked'),
  },
};

export const Background: Story = {
  args: {
    variant: 'background',
    size: '40px',
    interactionVariant: 'normal',
    interactionColor: 'rgba(55, 56, 60, 0.61)',
    disable: false,
    pushBadge: false,
    children: <Blank />,
    onClick: action('clicked'),
  },
};
