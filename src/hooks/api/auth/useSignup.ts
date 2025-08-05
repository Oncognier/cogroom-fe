import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authApi } from '@/api/authApis';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useSignupMutation = (onSuccess?: () => void) => {
  const router = useRouter();
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: authApi.signup,
    onSuccess: () => {
      onSuccess?.();
      router.replace('/daily');
    },
    onError: () => {
      open('error', { message: '회원가입에 실패했습니다.' });
    },
  });

  return { signup: mutation.mutate };
};
