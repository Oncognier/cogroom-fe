'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authApi } from '@/api/authApis';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useWithdrawMutation = () => {
  const { clearToken } = useAuthStore();
  const { open } = useAlertModalStore();
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: authApi.withdraw,
    onSuccess: () => {
      clearToken();
      queryClient.clear();
      router.push('/');
    },
    onError: () => {
      open('error', { message: '회원 탈퇴에 실패했습니다.' });
    },
  });

  return { withdraw: mutation.mutate };
};
