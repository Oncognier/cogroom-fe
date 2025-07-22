import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  isLoggedIn: false,
  setToken: (token) =>
    set(() => {
      localStorage.setItem('accessToken', token);
      return { accessToken: token, isLoggedIn: true };
    }),
  clearToken: () =>
    set(() => {
      localStorage.removeItem('accessToken');
      return { accessToken: null, isLoggedIn: false };
    }),
}));
