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
      options: ['primary', 'secondary', 'assistive'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'fillContainer'],
    },
    isDisabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
      defaultValue: false,
    },
    interactionVariant: {
      control: 'radio',
      options: ['normal', 'light', 'strong'],
    },
    onClick: { action: 'clicked' },
    iconLeft: {
      table: {
        disable: true,
      },
    },
    iconRight: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof OutlinedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoIcon: Story = {
  args: {
    label: 'Label',
    color: 'primary',
    size: 'md',
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
  },
};

export const LeftIconOnly: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    color: 'primary',
    size: 'md',
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
  },
};

export const RightIconOnly: Story = {
  args: {
    label: 'Label',
    iconRight: <Blank />,
    color: 'primary',
    size: 'md',
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
  },
};

export const Primary: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    iconRight: <Blank />,
    color: 'primary',
    size: 'md',
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
  },
};

export const Secondary: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    iconRight: <Blank />,
    color: 'secondary',
    size: 'md',
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
  },
};

export const Assistive: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    iconRight: <Blank />,
    color: 'assistive',
    size: 'md',
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
  },
};
