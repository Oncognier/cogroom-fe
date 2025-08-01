import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authApi } from '@/api/authApis';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useLogoutMutation = () => {
  const { open } = useAlertModalStore();
  const router = useRouter();
  const queryClient = useQueryClient();
  const clearToken = useAuthStore((state) => state.clearToken);

  const mutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      queryClient.invalidateQueries();
      router.push('/');
      clearToken();
    },
    onError: () => {
      open('error', { message: '로그아웃에 실패했습니다.' });
    },
  });

  return { logout: mutation.mutate };
};
