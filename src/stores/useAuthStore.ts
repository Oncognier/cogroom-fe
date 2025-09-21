import { create } from 'zustand';

import type { MemberRole } from '@/types/member';

export type AuthStatus = 'unknown' | 'authenticated' | 'unauthenticated';

interface AuthState {
  status: AuthStatus;
  role: MemberRole | null;

  isUnknown: () => boolean;
  isUnauth: () => boolean;
  isAuth: () => boolean;
  isAdmin: () => boolean;
  isContentProvider: () => boolean;

  setAuthenticated: (role: MemberRole) => void;
  setUnauthenticated: () => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  status: 'unknown',
  role: null,

  isAuth: () => get().status === 'authenticated',
  isUnauth: () => get().status === 'unauthenticated',
  isUnknown: () => get().status === 'unknown',
  isAdmin: () => get().role === 'ADMIN',
  isContentProvider: () => get().role === 'CONTENT_PROVIDER',

  setAuthenticated: (role) => set({ status: 'authenticated', role }),
  setUnauthenticated: () => set({ status: 'unauthenticated', role: null }),
  reset: () => set({ status: 'unknown', role: null }),
}));
