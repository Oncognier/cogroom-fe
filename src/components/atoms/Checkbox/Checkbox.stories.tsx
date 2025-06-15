import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import type { CheckState } from '@/types/check';

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
} satisfies Meta<typeof Checkbox>;

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
      <Checkbox
        {...args}
        state={checked}
        onToggle={handleToggle}
      />
    );
  },
};
