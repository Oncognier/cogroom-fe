import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Molecules/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' },
    onClose: { action: 'closed' },
    isOpen: { control: 'boolean' },
    selectedDate: { control: 'date' },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    isOpen: true,
    selectedDate: dayjs(),
  },
  render: (args) => {
    const [{ selectedDate }, updateArgs] = useArgs();

    return (
      <DatePicker
        {...args}
        selectedDate={selectedDate ? dayjs(selectedDate) : null}
        onSelect={(date) => {
          updateArgs({ selectedDate: date });
        }}
        onClose={() => updateArgs({ isOpen: false })}
      />
    );
  },
};
