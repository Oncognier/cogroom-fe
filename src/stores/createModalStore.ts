import { create } from 'zustand';

export function createModalStore<T extends Record<string, unknown>>() {
  type ModalType = keyof T;

  type ModalInstance<K extends ModalType = ModalType> = {
    type: K;
    props: T[K];
  };

  type ModalStore = {
    modals: ModalInstance[];
    open: <K extends ModalType>(type: K, props: T[K]) => void;
    close: () => void;
    closeAll: () => void;
  };

  return create<ModalStore>((set) => ({
    modals: [],
    open: (type, props) =>
      set((state) => ({
        modals: [...state.modals, { type, props }],
      })),
    close: () =>
      set((state) => ({
        modals: state.modals.slice(0, -1),
      })),
    closeAll: () => set({ modals: [] }),
  }));
}
