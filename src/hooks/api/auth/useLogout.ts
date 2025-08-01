import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useLogoutMutation = () => {
  const { open } = useAlertModalStore();
  const clearToken = useAuthStore((state) => state.clearToken);

  const mutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      window.location.href = '/';
      clearToken();
    },
    onError: () => {
      open('error', { message: '로그아웃에 실패했습니다.' });
    },
  });

  return { logout: mutation.mutate };
};
