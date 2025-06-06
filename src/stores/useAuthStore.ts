import { create } from 'zustand';

import { ACCESS_TOKEN_NAME } from '@/constants/api';
import { hasCookie } from '@/utils/cookie';

interface AuthState {
  isLoggedIn: boolean;
  checkAuth: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,

  checkAuth: () => {
    const isLoggedIn = hasCookie(ACCESS_TOKEN_NAME);
    set({ isLoggedIn });
  },

  logout: () => {
    set({ isLoggedIn: false });
  },
}));
