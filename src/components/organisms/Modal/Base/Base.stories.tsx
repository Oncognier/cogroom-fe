import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { createModalStore } from '@/stores/createModalStore';
import type { ModalMap } from '@/types/modal';

import Base from './Base';

type TestProps = { message: string };

function TestModal({ message }: TestProps) {
  return (
    <div style={{ backgroundColor: '#fff', padding: 24 }}>
      <p>{message}</p>
    </div>
  );
}

type AppModalProps = { test: TestProps };

const testModalMap: ModalMap<AppModalProps> = {
  test: {
    Component: TestModal,
    disableOutsideClick: false,
  },
};

const useTestModalStore = createModalStore<AppModalProps>();

const TestWrapper: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({ onClose, children }) => (
  <div style={{ border: '1px solid #888', padding: 16 }}>
    <button
      onClick={onClose}
      style={{ float: 'right' }}
    >
      닫기
    </button>
    {children}
  </div>
);

const meta: Meta<typeof Base> = {
  title: 'components/organisms/Modal/Base',
  component: Base,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const ModalTest: Story = {
  render: () => {
    const { open } = useTestModalStore();

    const handleClick = () => {
      open('test', { message: '이것은 버튼 클릭으로 열린 모달입니다.' });
    };

    return (
      <>
        <div id='modal-root' />
        <button onClick={handleClick}>모달 열기</button>
        <Base
          modalMap={testModalMap}
          useModalStore={useTestModalStore}
          wrapper={TestWrapper}
        />
      </>
    );
  },
};
