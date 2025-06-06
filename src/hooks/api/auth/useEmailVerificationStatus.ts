import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';

export const useCheckEmailVerifiedMutation = (onConfirm?: () => void) => {
  const mutation = useMutation({
    mutationFn: authApi.checkEmailVerified,
    onSuccess: () => {
      onConfirm?.();
    },
  });

  return { checkEmailVerified: mutation.mutate };
};
