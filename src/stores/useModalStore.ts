import { ModalRegistry } from '@/components/organisms/Modal/modalConfig';
import { create } from 'zustand';

export type ModalType = keyof ModalRegistry;

export type ModalPropsMap = {
  [K in ModalType]: Parameters<ModalRegistry[K]['Component']>[0];
};

type ModalInstance<T extends ModalType = ModalType> = {
  type: T;
  props: ModalPropsMap[T];
};

type ModalStore = {
  modals: ModalInstance[];
  open: <T extends ModalType>(type: T, props: ModalPropsMap[T]) => void;
  close: () => void;
  closeAll: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  modals: [],
  open: (type, props) => set((state) => ({ modals: [...state.modals, { type, props }] })),
  close: () => set((state) => ({ modals: state.modals.slice(0, -1) })),
  closeAll: () => set(() => ({ modals: [] })),
}));
