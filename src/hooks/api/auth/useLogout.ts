import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authApi } from '@/api/authApis';
import { useAuthStore } from '@/stores/useAuthStore';

export const useLogoutMutation = () => {
  const { clearToken } = useAuthStore();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      clearToken();
      router.push('/');
    },
    onError: () => {
      alert('로그아웃에 실패했습니다.');
    },
  });

  return { logout: mutation.mutate };
};
