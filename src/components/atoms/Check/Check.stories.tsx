import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import type { CheckState } from '@/types/check';

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
    disabled: {
      control: 'boolean',
      description: '체크박스 비활성화 여부',
      defaultValue: false,
    },
    state: {
      control: 'radio',
      options: ['checked', 'unchecked'],
    },
    interactionVariant: {
      control: 'radio',
      options: ['normal', 'light', 'strong'],
    },
    onToggle: { action: 'toggled' },
  },
} satisfies Meta<typeof Check>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    state: 'unchecked',
    disabled: false,
    interactionVariant: 'normal',
    onToggle: action('toggled'),
  },
  render: (args) => {
    const [checked, setChecked] = useState<CheckState>(args.state);

    useEffect(() => {
      setChecked(args.state);
    }, [args.state]);

    const handleToggle = (next: CheckState) => {
      setChecked(next);
      action('toggled')(next);
    };

    return (
      <Check
        {...args}
        state={checked}
        onToggle={handleToggle}
      />
    );
  },
};
