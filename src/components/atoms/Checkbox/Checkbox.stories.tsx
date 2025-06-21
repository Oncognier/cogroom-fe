import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useEffect, useState } from 'react';

import Checkbox from './Checkbox';

const meta = {
  title: 'components/atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md'],
    },
    variant: {
      control: 'radio',
      options: ['default', 'round'],
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
      defaultValue: 'checkbox-default',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
    onToggle: { action: 'toggled' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'default',
    isChecked: false,
    isDisabled: false,
    interactionVariant: 'normal',
    required: false,
    onToggle: action('toggled'),
    name: 'checkbox-default',
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
      <Checkbox
        {...args}
        isChecked={checked}
        onToggle={handleToggle}
      />
    );
  },
};

export const Round: Story = {
  args: {
    size: 'md',
    variant: 'round',
    isChecked: false,
    isDisabled: false,
    interactionVariant: 'normal',
    required: false,
    onToggle: action('toggled'),
    name: 'checkbox-round',
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
      <Checkbox
        {...args}
        isChecked={checked}
        onToggle={handleToggle}
      />
    );
  },
};
