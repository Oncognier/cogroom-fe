import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

import { authApi } from '@/api/authApis';
import { HTTPError } from '@/api/axios/errors/HTTPError';

export const useSendEmailMutation = (onConfirm?: () => void) => {
  const { setError } = useFormContext<{ email: string }>();

  const mutation = useMutation({
    mutationFn: authApi.sendEmail,
    onSuccess: () => {
      onConfirm?.();
    },
    onError: (error) => {
      if (error instanceof HTTPError) {
        setError('email', {
          type: 'server',
          message: 'error:' + error.message,
        });
      }
    },
  });

  return { sendEmail: mutation.mutate };
};
