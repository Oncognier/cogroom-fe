const ACCESS_TOKEN_KEY = 'accessToken';

export const getToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setToken = (token: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const clearToken = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

export const isLoggedIn = () => !!getToken();
