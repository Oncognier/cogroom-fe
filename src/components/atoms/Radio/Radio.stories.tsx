import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import Radio from './Radio';

const meta = {
  title: 'components/atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md'],
    },
    disable: {
      control: 'boolean',
      description: '라디오 비활성화 여부',
      defaultValue: false,
    },
    isChecked: {
      control: 'boolean',
      description: '선택 여부',
    },
    interactionVariant: {
      control: 'radio',
      options: ['normal', 'light', 'strong'],
    },
    interactionColor: {
      control: 'color',
      description: '인터랙션 오버레이 색상',
      defaultValue: '#171719',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
    name: {
      control: 'text',
      defaultValue: 'radio-group',
    },
    onToggle: { action: 'toggled' },
    interactiondisable: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    isChecked: false,
    disable: false,
    interactionVariant: 'normal',
    interactionColor: '#171719',
    required: false,
    onToggle: () => {},
    name: 'radio-default',
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
      <Radio
        {...args}
        isChecked={checked}
        onToggle={handleToggle}
      />
    );
  },
};
