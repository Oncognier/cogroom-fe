import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import Input from './Input';

const meta = {
  title: 'components/molecules/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    width: {
      control: 'text',
      description: '인풋 너비 (예: "100%", "32rem")',
    },
    onChange: { action: 'changed' },
    onClear: { action: 'cleared' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputSize: 'md',
    label: '이메일',
    placeholder: 'Placeholder',
    value: '',
    required: true,
    isDisabled: false,
    error: '',
    width: '32rem',
  },
  render: (args) => {
    const [inputValue, setInputValue] = useState(args.value);

    useEffect(() => {
      setInputValue(args.value);
    }, [args.value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      action('changed')(e.target.value);
    };

    const handleClear = () => {
      setInputValue('');
      action('cleared')();
    };

    return (
      <Input
        {...args}
        value={inputValue}
        onChange={handleChange}
        onClear={handleClear}
      />
    );
  },
};
