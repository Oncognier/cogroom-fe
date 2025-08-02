import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authApi } from '@/api/authApis';
import { useAlertModalStore, useAppModalStore } from '@/stores/useModalStore';

export const useLoginMutation = () => {
  const router = useRouter();
  const { open: openApp } = useAppModalStore();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ socialUserInfo, needSignup }) => {
      if (needSignup || socialUserInfo) {
        openApp('signup', {
          provider: socialUserInfo.provider ?? '',
          providerId: socialUserInfo.providerId ?? '',
          email: socialUserInfo.email ?? '',
          nickname: socialUserInfo.nickname ?? '',
        });
      }

      router.replace('/daily');
    },
    onError: () => {
      openAlert('error', { message: '로그인 중 오류가 발생했습니다.' });
      router.replace('/');
    },
  });

  return { login: mutation.mutate };
};
