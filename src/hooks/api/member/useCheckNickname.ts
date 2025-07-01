import { useMutation } from '@tanstack/react-query';
import { UseFormSetError } from 'react-hook-form';

import { memberApi } from '@/api/memberApis';
import { setValidationError } from '@/utils/validators/setValidationError';

export const useCheckNicknameMutation = (
  setError?: UseFormSetError<{ nickname: string }>,
  onSuccess?: () => void,
  onFailure?: () => void,
) => {
  const mutation = useMutation({
    mutationFn: memberApi.checkNickname,
    onSuccess: (result) => {
      if (result) {
        onSuccess?.();
      } else {
        onFailure?.();
      }
    },
    onError: (error) => {
      setValidationError<{ nickname: string }>(error, setError);
    },
  });

  return { checkNickname: mutation.mutate };
};
