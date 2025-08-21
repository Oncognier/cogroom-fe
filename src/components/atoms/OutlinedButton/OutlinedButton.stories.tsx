import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import Blank from '@/assets/icons/blank.svg';

import OutlinedButton from './OutlinedButton';

const meta = {
  title: 'components/atoms/OutlinedButton',
  component: OutlinedButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'secondary', 'assistive', 'destructive'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    fillContainer: {
      control: 'boolean',
      description: '버튼 너비를 100%로 설정',
    },
    isDisabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
    interactionVariant: {
      control: 'radio',
      options: ['normal', 'light', 'strong'],
    },
    onClick: { action: 'clicked' },
    iconLeft: {
      table: { disable: true },
    },
    iconRight: {
      table: { disable: true },
    },
    align: {
      control: 'radio',
      options: ['center', 'space-between'],
    },
  },
} satisfies Meta<typeof OutlinedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    color: 'primary',
    size: 'md',
    fillContainer: false,
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
    align: 'center',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Label',
    color: 'secondary',
    size: 'md',
    fillContainer: false,
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
    align: 'center',
  },
};

export const Assistive: Story = {
  args: {
    label: 'Label',
    color: 'assistive',
    size: 'md',
    fillContainer: false,
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
    align: 'center',
  },
};

export const Destructive: Story = {
  args: {
    label: 'Label',
    color: 'destructive',
    size: 'md',
    fillContainer: false,
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
    align: 'center',
  },
};

export const LeftIconOnly: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    color: 'primary',
    size: 'md',
    fillContainer: false,
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
    align: 'center',
  },
};

export const RightIconOnly: Story = {
  args: {
    label: 'Label',
    iconRight: <Blank />,
    color: 'primary',
    size: 'md',
    fillContainer: false,
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
    align: 'center',
  },
};

export const LeftRightIcon: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    iconRight: <Blank />,
    color: 'primary',
    size: 'md',
    fillContainer: false,
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
    align: 'center',
  },
};

export const FillContainerWithIcons: Story = {
  args: {
    label: 'Full Width',
    iconLeft: <Blank />,
    iconRight: <Blank />,
    color: 'secondary',
    size: 'lg',
    fillContainer: true,
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
    align: 'space-between',
  },
};
