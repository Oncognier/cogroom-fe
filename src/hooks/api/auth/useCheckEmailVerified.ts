import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useCheckEmailVerifiedMutation = (onSuccess?: () => void, onFailure?: () => void) => {
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: authApi.checkEmailVerified,

    onSuccess: (result) => {
      if (result) {
        onSuccess?.();
      } else {
        if (onFailure) {
          onFailure();
        } else {
          open('error', { message: '이메일 인증에 실패했습니다.' });
        }
      }
    },

    onError: () => {
      open('error', { message: '이메일 인증 과정에서 오류가 발생했습니다.' });
    },
  });

  return { checkEmailVerified: mutation.mutate };
};
