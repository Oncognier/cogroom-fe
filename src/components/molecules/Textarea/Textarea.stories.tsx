import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import Textarea from './Textarea';

const meta = {
  title: 'components/molecules/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
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
    errorMessage: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    errorStatus: {
      control: 'radio',
      options: ['error', 'warning', 'success', 'disable'],
    },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '소개글',
    placeholder: 'Placeholder',
    value: '',
    required: true,
    isDisabled: false,
    errorMessage: '',
    error: '',
    errorStatus: 'error',
  },
  render: (args) => {
    const [text, setText] = useState(args.value);

    useEffect(() => {
      setText(args.value);
    }, [args.value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
      action('changed')(e.target.value);
    };

    return (
      <Textarea
        {...args}
        value={text}
        onChange={handleChange}
      />
    );
  },
};
