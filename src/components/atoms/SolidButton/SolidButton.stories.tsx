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
      options: ['sm', 'md', 'lg'],
    },
    disable: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
      defaultValue: false,
    },
    interactionVariant: {
      control: 'radio',
      options: ['normal', 'light', 'strong'],
    },
    interactionColor: {
      control: 'color',
      description: '인터랙션 오버레이 색상',
      defaultValue: 'rgba(55, 56, 60, 0.61)',
    },
    onClick: { action: 'clicked' },
    interactiondisable: {
      table: {
        disable: true,
      },
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
    disable: false,
    interactionVariant: 'normal',
    interactionColor: 'rgba(55, 56, 60, 0.61)',
    onClick: action('clicked'),
  },
};

export const LeftIconOnly: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    size: 'md',
    disable: false,
    interactionVariant: 'normal',
    interactionColor: 'rgba(55, 56, 60, 0.61)',
    onClick: action('clicked'),
  },
};

export const RightIconOnly: Story = {
  args: {
    label: 'Label',
    iconRight: <Blank />,
    size: 'md',
    disable: false,
    interactionVariant: 'normal',
    interactionColor: 'rgba(55, 56, 60, 0.61)',
    onClick: action('clicked'),
  },
};

export const Primary: Story = {
  args: {
    label: 'Label',
    iconLeft: <Blank />,
    iconRight: <Blank />,
    size: 'md',
    disable: false,
    interactionVariant: 'normal',
    onClick: action('clicked'),
  },
};
