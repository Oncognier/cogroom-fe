import { useMutation } from '@tanstack/react-query';

import authApis from '@/api/authApis';

export const useEmailVerificationStatusMutation = (onConfirm?: () => void) => {
  const emailVerificationStatusMutation = useMutation({
    mutationFn: authApis.postEmailVerificationStatus,
    onSuccess: () => {
      onConfirm?.();
    },
  });

  return { mutateEmailVerificationStatus: emailVerificationStatusMutation.mutate };
};
