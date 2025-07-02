import { useMutation } from '@tanstack/react-query';
import { UseFormSetError } from 'react-hook-form';

import { memberApi } from '@/api/memberApis';
import { useAlertModalStore } from '@/stores/useModalStore';
import { setValidationError } from '@/utils/validators/setValidationError';

export const useCheckNicknameMutation = (
  setError?: UseFormSetError<{ nickname: string }>,
  onSuccess?: () => void,
  onFailure?: () => void,
) => {
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: memberApi.checkNickname,
    onSuccess: (result) => {
      if (result) {
        onSuccess?.();
      } else {
        if (onFailure) {
          onFailure();
        } else {
          open('error', { message: '닉네임 중복 확인에 실패했습니다.' });
        }
      }
    },
    onError: (error) => {
      setValidationError<{ nickname: string }>(error, setError);
    },
  });

  return { checkNickname: mutation.mutate };
};
