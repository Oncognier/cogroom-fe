import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';
import { DAILY_QUERY_KEYS, MEMBER_QUERY_KEYS, STREAK_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';
import { getKakaoPixelId } from '@/utils/kakaoPixel';

export const useSignupMutation = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: authApi.signup,
    onSuccess: () => {
      const kakaoPixelId = getKakaoPixelId();

      if (typeof window !== 'undefined' && window.kakaoPixel && kakaoPixelId) {
        window.kakaoPixel(kakaoPixelId).pageView();
        window.kakaoPixel(kakaoPixelId).completeRegistration();
      }

      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SUMMARY] });
      queryClient.invalidateQueries({ queryKey: [...DAILY_QUERY_KEYS.DAILY] });
      queryClient.invalidateQueries({ queryKey: [...STREAK_QUERY_KEYS.STREAK] });
    },
    onError: () => {
      open('error', { message: '회원가입에 실패했습니다.' });
    },
  });

  return { signup: mutation.mutate };
};
