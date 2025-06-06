'use client';
import { useEffect } from 'react';

import { useAuthStore } from '@/stores/useAuthStore';

export default function GlobalAuthInitializer() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, []);

  return null;
}
