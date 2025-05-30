import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import Blank from '@/assets/icons/blank.svg';

import SolidButton from './SolidButton';

const meta = {
  title: 'components/atoms/SolidButton',
  component: SolidButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'fillContainer'],
    },
    isDisabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
      defaultValue: false,
    },
    onClick: { action: 'clicked' },
    interactionVariant: {
      control: 'radio',
      options: ['normal', 'light', 'strong'],
    },
    color: {
      control: 'radio',
      options: ['primary', 'kakao'],
    },
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
} satisfies Meta<typeof SolidButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoIcon: Story = {
  args: {
    label: 'Label',
    size: 'md',
    isDisabled: false,
    interactionVariant: 'strong',
    onClick: action('clicked'),
  },
};

export const LeftIconOnly: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    size: 'md',
    isDisabled: false,
    interactionVariant: 'strong',
    onClick: action('clicked'),
  },
};

export const RightIconOnly: Story = {
  args: {
    label: 'Label',
    iconRight: <Blank />,
    size: 'md',
    isDisabled: false,
    interactionVariant: 'strong',
    onClick: action('clicked'),
  },
};

export const Primary: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    iconRight: <Blank />,
    size: 'md',
    isDisabled: false,
    interactionVariant: 'strong',
    onClick: action('clicked'),
  },
};

export const Kakao: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    iconRight: <Blank />,
    size: 'md',
    color: 'kakao',
    isDisabled: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
  },
};
