import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authApi } from '@/api/authApis';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useLogoutMutation = () => {
  const { clearToken } = useAuthStore();
  const { open } = useAlertModalStore();
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      clearToken();
      queryClient.clear();
      router.push('/');
    },
    onError: () => {
      open('error', { message: '로그아웃에 실패했습니다.' });
    },
  });

  return { logout: mutation.mutate };
};
