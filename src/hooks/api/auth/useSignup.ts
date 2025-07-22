import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useSignupMutation = (onSuccess?: () => void) => {
  const { open } = useAlertModalStore();
  const setToken = useAuthStore((state) => state.setToken);

  const mutation = useMutation({
    mutationFn: authApi.signup,
    onSuccess: (response) => {
      const accessToken = response.headers['authorization']?.replace(/^Bearer\s/i, '');
      if (accessToken) {
        setToken(accessToken);
      }
      onSuccess?.();
    },
    onError: () => {
      open('error', { message: '회원가입에 실패했습니다.' });
    },
  });

  return { signup: mutation.mutate };
};
