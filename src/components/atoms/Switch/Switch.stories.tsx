import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import Switch from './Switch';

const meta = {
  title: 'components/atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md'],
    },
    isActive: {
      control: 'boolean',
      description: '활성 상태',
    },
    isDisabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    onChange: { action: 'toggled' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    isActive: false,
    isDisabled: false,
    onChange: () => {},
  },
  render: (args) => {
    const [active, setActive] = useState(args.isActive);

    useEffect(() => {
      setActive(args.isActive);
    }, [args.isActive]);

    const handleChange = () => {
      if (!args.isDisabled) {
        const next = !active;
        action('toggled')(next);
        setActive(next);
      }
    };

    return (
      <Switch
        {...args}
        isActive={active}
        onChange={handleChange}
      />
    );
  },
};
