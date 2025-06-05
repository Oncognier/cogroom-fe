import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useModalStore } from '@/stores/useModalStore';
import authApis from '@/api/authApis';

export const useLoginMutation = () => {
  const router = useRouter();
  const { open } = useModalStore();

  const loginMutation = useMutation({
    mutationFn: authApis.postLogin,
    onSuccess: ({ email, nickname, needSignup }: { email?: string; nickname?: string; needSignup: boolean }) => {
      router.push('/');
      if (needSignup || !!email || !!nickname) {
        open('signup', { email: email ?? '', nickname: nickname ?? '' });
      }
    },
    onError: () => {
      alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      router.push('/');
    },
  });

  return { mutateLogin: loginMutation.mutate };
};
