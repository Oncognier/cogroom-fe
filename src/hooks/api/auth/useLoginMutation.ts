import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import authApis from '@/api/authApis';
import { useModalStore } from '@/stores/useModalStore';
import { PostLoginResponse } from '@/types/auth';

export const useLoginMutation = () => {
  const router = useRouter();
  const { open } = useModalStore();

  const loginMutation = useMutation({
    mutationFn: authApis.postLogin,
    onSuccess: ({ result }: PostLoginResponse) => {
      const { socialUserInfo, needSignup } = result;

      router.push('/');

      if (needSignup || socialUserInfo) {
        open('signup', {
          provider: socialUserInfo.provider ?? '',
          providerId: socialUserInfo.providerId ?? '',
          email: socialUserInfo.email ?? '',
          nickname: socialUserInfo.nickname ?? '',
        });
      }
    },
    onError: () => {
      alert('로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  return { mutateLogin: loginMutation.mutate };
};
