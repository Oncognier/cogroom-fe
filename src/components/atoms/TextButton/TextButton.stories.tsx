import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import Blank from '@/assets/icons/blank.svg';

import TextButton from './TextButton';

const meta = {
  title: 'components/atoms/TextButton',
  component: TextButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: ['primary', 'assistive'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
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
    interactionColor: {
      table: {
        isDisabled: true,
      },
    },
    interactionDisabled: {
      table: {
        isDisabled: true,
      },
    },
    iconLeft: {
      table: {
        isDisabled: true,
      },
    },
    iconRight: {
      table: {
        isDisabled: true,
      },
    },
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoIcon: Story = {
  args: {
    label: 'Label only',
    color: 'primary',
    size: 'md',
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
  },
};

export const LeftIconOnly: Story = {
  args: {
    label: 'Left only',
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
    label: 'Right only',
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

export const Assistive: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    iconRight: <Blank />,
    color: 'assistive',
    size: 'md',
    isDisabled: false,
    interactionVariant: 'light',
    onClick: action('clicked'),
  },
};
