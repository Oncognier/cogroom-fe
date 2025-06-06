import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

import authApis from '@/api/authApis';
import { HTTPError } from '@/api/axios/errors/HTTPError';

export const useSendEmailMutation = (onConfirm?: () => void) => {
  const { setError } = useFormContext<{ email: string }>();

  const sendEmailMutation = useMutation({
    mutationFn: authApis.postSendEmail,
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

  return { mutateSendEmail: sendEmailMutation.mutate };
};
