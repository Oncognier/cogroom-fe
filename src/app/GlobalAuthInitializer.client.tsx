'use client';

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '@/stores/useAuthStore';
import { AUTH_QUERY_KEYS } from '@/constants/queryKeys';

export default function GlobalAuthInitializerClient() {
  const setToken = useAuthStore((state) => state.setToken);
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<{ accessToken: string }>(AUTH_QUERY_KEYS.AUTH_REISSUE);

  useEffect(() => {
    if (data?.accessToken) {
      setToken(data.accessToken);
    }
  }, [data]);

  return null;
}
