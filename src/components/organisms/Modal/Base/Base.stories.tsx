import type { Meta, StoryObj } from '@storybook/react';

import { createModalStore } from '@/stores/createModalStore';
import type { ModalMap } from '@/types/modal';

import Base from './Base';

type TestProps = {
  message: string;
};

function TestModal({ message }: TestProps) {
  return (
    <div style={{ backgroundColor: 'white', padding: 24, zIndex: 1000 }}>
      <p>{message}</p>
    </div>
  );
}

type AppModalProps = {
  test: TestProps;
};

const testModalMap: ModalMap<AppModalProps> = {
  test: {
    Component: TestModal,
    disableOutsideClick: false,
  },
};

const useTestModalStore = createModalStore<AppModalProps>();

const meta = {
  title: 'components/organisms/Modal/Base',
  component: Base,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    modalMap: testModalMap,
    useModalStore: useTestModalStore,
  },
} satisfies Meta<typeof Base>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalTest: Story = {
  render: (args) => {
    const { open } = useTestModalStore();

    const handleOpenModal = () => {
      open('test', {
        message: '이것은 버튼 클릭으로 열린 모달입니다.',
      });
    };

    return (
      <>
        <div id='modal-root' />
        <button onClick={handleOpenModal}>모달 열기</button>
        <Base {...args} />
      </>
    );
  },
};
