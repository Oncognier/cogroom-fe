import { useMutation } from '@tanstack/react-query';
import { UseFormSetError } from 'react-hook-form';

import { authApi } from '@/api/authApis';
import { setValidationError } from '@/utils/validators/setValidationError';

interface FormFields {
  email: string;
}

export const useSendEmailMutation = (onSuccess?: () => void, setError?: UseFormSetError<FormFields>) => {
  const mutation = useMutation({
    mutationFn: authApi.sendEmail,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      setValidationError(error, setError);
    },
  });

  return { sendEmail: mutation.mutate };
};
