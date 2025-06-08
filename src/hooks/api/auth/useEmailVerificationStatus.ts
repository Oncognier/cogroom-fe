import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';

export const useCheckEmailVerifiedMutation = (onSuccess?: () => void) => {
  const mutation = useMutation({
    mutationFn: authApi.checkEmailVerified,
    onSuccess: () => {
      onSuccess?.();
    },
  });

  return { checkEmailVerified: mutation.mutate };
};
