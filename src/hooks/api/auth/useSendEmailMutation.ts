import { useFormContext } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
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
        console.log(error.message);
        setError('email', {
          type: 'server',
          message: 'error:' + error.message,
        });
      }
    },
  });

  return { mutateSendEmail: sendEmailMutation.mutate };
};
