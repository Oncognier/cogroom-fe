import { create } from 'zustand';

export function createModalStore<T extends Record<string, unknown>>() {
  type ModalType = keyof T;
  type ModalEntry<K extends ModalType = ModalType> = { type: K; props: T[K] };

  type WithProps = {
    [P in ModalType]: undefined extends T[P] ? never : P;
  }[ModalType];
  type WithoutProps = {
    [P in ModalType]: undefined extends T[P] ? P : never;
  }[ModalType];

  type ModalStore = {
    modals: ModalEntry[];
    open: {
      <K extends WithProps>(type: K, props: T[K]): void;
      <K extends WithoutProps>(type: K): void;
    };
    close: () => void;
    closeAll: () => void;
  };

  return create<ModalStore>((set) => ({
    modals: [],
    open: (type: ModalType, props?: unknown) => set((s) => ({ modals: [...s.modals, { type, props } as ModalEntry] })),
    close: () => set((s) => ({ modals: s.modals.slice(0, -1) })),
    closeAll: () => set({ modals: [] }),
  }));
}
