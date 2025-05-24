import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';

import { InteractionOverlay } from './InteractionOverlay';

export type InteractionOverlayVariant = 'normal' | 'light' | 'strong';

const DummyButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: #eee;
  font-size: 14px;
  cursor: pointer;
  position: relative;
`;

const meta = {
  title: 'Common/Atoms/InteractionOverlay',
  component: InteractionOverlay,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '마우스 오버, 포커스, 클릭 등의 인터랙션 상태에 따라 투명한 오버레이 효과를 추가해주는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'hover / focus / active 상태에서의 오버레이 강도를 설정합니다.',
      control: { type: 'radio' },
      options: ['normal', 'light', 'strong'],
      table: {
        type: { summary: 'normal | light | strong' },
        defaultValue: { summary: 'normal' },
      },
    },
    children: {
      name: 'label',
      description: '오버레이 안에 포함될 요소입니다.',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof InteractionOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    variant: 'normal',
    children: <DummyButton>Click Me</DummyButton>,
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: <DummyButton>Light Hover</DummyButton>,
  },
};

export const Strong: Story = {
  args: {
    variant: 'strong',
    children: <DummyButton>Strong Hover</DummyButton>,
  },
};
