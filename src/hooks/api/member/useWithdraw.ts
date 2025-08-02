'use client';

import { useMutation } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useWithdrawMutation = () => {
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: memberApi.withdraw,
    onSuccess: () => {
      window.location.href = '/';
    },
    onError: () => {
      open('error', { message: '회원 탈퇴에 실패했습니다.' });
    },
  });

  return { withdraw: mutation.mutate };
};
