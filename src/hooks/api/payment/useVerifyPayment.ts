import { useMutation } from '@tanstack/react-query';

import { paymentApi } from '@/api/paymentApis';

export const useVerifyPaymentMutation = () => {
  const mutation = useMutation({
    mutationFn: paymentApi.verifyPayment,
    onError: () => {
      alert('결제에 실패하였습니다');
    },
  });

  return { verifyPayment: mutation.mutateAsync };
};
