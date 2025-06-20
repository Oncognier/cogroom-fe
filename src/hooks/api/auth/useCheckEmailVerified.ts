import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';

export const useCheckEmailVerifiedMutation = (onSuccess?: () => void, onFailure?: () => void) => {
  const mutation = useMutation({
    mutationFn: authApi.checkEmailVerified,
    onSuccess: (result) => {
      if (result) {
        onSuccess?.();
      } else {
        onFailure?.();
      }
    },
  });

  return { checkEmailVerified: mutation.mutate };
};
