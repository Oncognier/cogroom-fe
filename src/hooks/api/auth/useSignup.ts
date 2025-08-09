import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { authApi } from '@/api/authApis';
import { useAlertModalStore } from '@/stores/useModalStore';
import { getKakaoPixelId } from '@/utils/kakaoPixel';

export const useSignupMutation = (onSuccess?: () => void) => {
  const router = useRouter();
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: authApi.signup,
    onSuccess: () => {
      const kakaoPixelId = getKakaoPixelId();

      if (typeof window !== 'undefined' && window.kakaoPixel && kakaoPixelId) {
        window.kakaoPixel(kakaoPixelId).completeRegistration();
      }

      onSuccess?.();
      router.replace('/daily');
    },
    onError: () => {
      open('error', { message: '회원가입에 실패했습니다.' });
    },
  });

  return { signup: mutation.mutate };
};
