import { ModalComponentMap } from '@/components/organisms/Modal/modalConfig';
import { create } from 'zustand';

export type ModalType = keyof ModalComponentMap;

type ModalPropsMap = {
  [K in ModalType]: Parameters<ModalComponentMap[K]['Component']>[0];
};

type ModalStore = {
  isOpen: boolean;
  modalType: ModalType | null;
  modalProps: ModalType extends keyof ModalPropsMap ? ModalPropsMap[ModalType] : Record<string, unknown>;
  open: <T extends ModalType>(type: T, props: ModalPropsMap[T]) => void;
  close: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  modalType: null,
  modalProps: {},
  open: (type, props) => set({ isOpen: true, modalType: type, modalProps: props }),
  close: () => set({ isOpen: false, modalType: null, modalProps: {} }),
}));
