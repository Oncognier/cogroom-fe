import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authApi } from '@/api/authApis';
import { AUTH_QUERY_KEYS, MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export const useLogoutMutation = () => {
  const { clearToken } = useAuthStore();
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      clearToken();
      queryClient.removeQueries({ queryKey: AUTH_QUERY_KEYS.AUTH });
      queryClient.removeQueries({ queryKey: MEMBER_QUERY_KEYS.MEMBER });
      router.push('/');
    },
    onError: () => {
      alert('로그아웃에 실패했습니다.');
    },
  });

  return { logout: mutation.mutate };
};
