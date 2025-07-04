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
    error: {
      control: 'text',
      description: `'normal:메시지', 'error:메시지' 등의 형식 사용`,
    },
    width: {
      control: 'text',
      description: '텍스트에어리어 너비 (예: "100%", "32rem")',
    },
    textareaSize: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '소개글',
    placeholder: '자기소개를 입력하세요',
    value: '',
    required: true,
    isDisabled: false,
    error: '',
    width: '32rem',
    textareaSize: 'md',
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
