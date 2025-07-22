'use client';

import { useEffect } from 'react';

import { useAuthStore } from '@/stores/useAuthStore';
import { getToken } from '@/utils/tokenStorage';

export default function AuthComponent() {
  const { setToken } = useAuthStore();

  useEffect(() => {
    const token = getToken();
    if (token) {
      setToken(token);
    }
  }, [setToken]);

  return null;
}
