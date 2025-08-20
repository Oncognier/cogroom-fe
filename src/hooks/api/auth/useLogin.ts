import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authApi } from '@/api/authApis';
import { DAILY_QUERY_KEYS, MEMBER_QUERY_KEYS, STREAK_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore, useAppModalStore } from '@/stores/useModalStore';

export const useLoginMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { open: openApp } = useAppModalStore();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ signupToken, socialUserInfo, needSignup }) => {
      if (needSignup) {
        openApp('signup', {
          signupToken: signupToken ?? '',
          email: socialUserInfo.email ?? '',
          provider: socialUserInfo.provider ?? '',
        });
      }

      queryClient.invalidateQueries({ queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SUMMARY] });
      queryClient.invalidateQueries({ queryKey: [...DAILY_QUERY_KEYS.DAILY] });
      queryClient.invalidateQueries({ queryKey: [...STREAK_QUERY_KEYS.STREAK] });
      router.replace('/daily');
    },
    onError: () => {
      openAlert('error', { message: '로그인 중 오류가 발생했습니다.' });
      router.replace('/');
    },
  });

  return { login: mutation.mutate };
};
