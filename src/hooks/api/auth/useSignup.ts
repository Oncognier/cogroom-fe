import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authApi } from '@/api/authApis';
import { useAuthStore } from '@/stores/useAuthStore';

export const useSignupMutation = () => {
  const router = useRouter();
  const setToken = useAuthStore((state) => state.setToken);

  const mutation = useMutation({
    mutationFn: authApi.signup,
    onSuccess: (response) => {
      const accessToken = response.headers['authorization']?.replace(/^Bearer\s/i, '');

      if (!!accessToken) {
        setToken(accessToken);
      }

      router.push('/');
    },
    onError: () => {
      alert('회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.');
      router.push('/');
    },
  });

  return { signup: mutation.mutate };
};
