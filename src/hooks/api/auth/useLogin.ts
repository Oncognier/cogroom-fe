import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authApi } from '@/api/authApis';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAlertModalStore, useAppModalStore } from '@/stores/useModalStore';

export const useLoginMutation = () => {
  const router = useRouter();
  const { open: openApp } = useAppModalStore();
  const { open: openAlert } = useAlertModalStore();

  const setToken = useAuthStore((state) => state.setToken);

  const mutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (response) => {
      const accessToken = response.headers['authorization'];

      if (!!accessToken) {
        setToken(accessToken);
      }

      const { socialUserInfo, needSignup } = response.data.result;

      if (needSignup || socialUserInfo) {
        openApp('signup', {
          provider: socialUserInfo.provider ?? '',
          providerId: socialUserInfo.providerId ?? '',
          email: socialUserInfo.email ?? '',
          nickname: socialUserInfo.nickname ?? '',
        });
      }

      router.push('/');
    },
    onError: () => {
      openAlert('error', { message: '로그인 중 오류가 발생했습니다.' });
      router.push('/');
    },
  });

  return { login: mutation.mutate };
};
