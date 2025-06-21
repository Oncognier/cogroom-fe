import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import Check from './Check';

const meta = {
  title: 'components/atoms/Check',
  component: Check,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md'],
    },
    isDisabled: {
      control: 'boolean',
      description: '체크박스 비활성화 여부',
    },
    isChecked: {
      control: 'boolean',
    },
    interactionVariant: {
      control: 'radio',
      options: ['normal', 'light', 'strong'],
    },
    name: {
      control: 'text',
      defaultValue: 'check-default',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
    onToggle: { action: 'toggled' },
  },
} satisfies Meta<typeof Check>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    isChecked: false,
    isDisabled: false,
    interactionVariant: 'normal',
    required: false,
    onToggle: action('toggled'),
    name: 'check-default',
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.isChecked);

    useEffect(() => {
      setChecked(args.isChecked);
    }, [args.isChecked]);

    const handleToggle = (value: boolean) => {
      action('toggled')(value);
      setChecked(value);
    };

    return (
      <Check
        {...args}
        isChecked={checked}
        onToggle={handleToggle}
      />
    );
  },
};
