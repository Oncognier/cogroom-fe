import { create } from 'zustand';

interface ZIndexStore {
  current: number;
  getNext: () => number;
  reset: () => void;
}

export const useZIndexStore = create<ZIndexStore>((set, get) => ({
  current: 1000,
  getNext: () => {
    const next = get().current + 1;
    set({ current: next });
    return next;
  },
  reset: () => set({ current: 1000 }),
}));
