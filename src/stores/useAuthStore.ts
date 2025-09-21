import { create } from 'zustand';
import type { MemberRole } from '@/types/member';

export type AuthStatus = 'unknown' | 'authenticated' | 'unauthenticated';

interface AuthState {
  status: AuthStatus;
  role: MemberRole | null;

  isAuthenticated: boolean;
  isAdmin: boolean;
  isContentProvider: boolean;

  setAuthenticated: (role: MemberRole) => void;
  setUnauthenticated: () => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  status: 'unknown',
  role: null,

  get isAuthenticated() {
    return get().isAuthenticated;
  },
  get isAdmin() {
    return get().role === 'ADMIN';
  },
  get isContentProvider() {
    return get().role === 'CONTENT_PROVIDER';
  },

  setAuthenticated: (role) => set({ status: 'authenticated', role }),
  setUnauthenticated: () => set({ status: 'unauthenticated', role: null }),
  reset: () => set({ status: 'unknown', role: null }),
}));
