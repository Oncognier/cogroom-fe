import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

import Blank from '@/assets/icons/blank.svg';

import ToggleIcon from './ToggleIcon';

const meta = {
  title: 'components/atoms/ToggleIcon',
  component: ToggleIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'text',
      description: '아이콘 크기',
    },
    isActive: {
      control: 'boolean',
      description: '활성화 여부',
    },
    interactionVariant: {
      control: 'radio',
      options: ['normal', 'light', 'strong'],
    },
    onToggle: { table: { disable: true } },
  },
} satisfies Meta<typeof ToggleIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: '32px',
    isActive: false,
    interactionVariant: 'normal',
    children: <Blank />,
    onToggle: () => {},
  },
  render: (args) => {
    const [{ isActive }, updateArgs] = useArgs();

    return (
      <ToggleIcon
        {...args}
        isActive={isActive}
        onToggle={(next) => updateArgs({ isActive: next })}
      >
        <Blank />
      </ToggleIcon>
    );
  },
};

export const Active: Story = {
  args: {
    size: '32px',
    isActive: true,
    interactionVariant: 'normal',
    children: <Blank />,
    onToggle: () => {},
  },
  render: (args) => {
    const [{ isActive }, updateArgs] = useArgs();

    return (
      <ToggleIcon
        {...args}
        isActive={isActive}
        onToggle={(next) => updateArgs({ isActive: next })}
      >
        <Blank />
      </ToggleIcon>
    );
  },
};
