import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Select } from './Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    options: { control: false },
    onChange: { action: 'changed' },
    groupName: { table: { disable: true } },
    value: { table: { disable: true } },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const OPTIONS = [
  { label: '사과', value: 'apple' },
  { label: '바나나', value: 'banana' },
  { label: '포도', value: 'grape' },
  { label: '딸기', value: 'strawberry' },
];

export const SingleSelect: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <Select
        {...args}
        value={value}
        onChange={setValue}
        options={OPTIONS}
      />
    );
  },
  args: {
    placeholder: '과일을 선택하세요',
    isMulti: false,
    label: '과일',
    required: true,
    error: '',
    options: [],
    value: [],
    onChange: () => {},
  },
};

export const MultiSelect: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <Select
        {...args}
        value={value}
        onChange={setValue}
        options={OPTIONS}
      />
    );
  },
  args: {
    placeholder: '과일을 검색해 선택하세요',
    isMulti: true,
    label: '과일',
    required: true,
    error: '',
    options: [],
    value: [],
    onChange: () => {},
  },
};
