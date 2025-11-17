import { useMutation } from '@tanstack/react-query';

import { paymentApi } from '@/api/paymentApis';
import { requestIssueBillingKey } from '@/utils/portone';

export const useVerifyPaymentMutation = () => {
  const mutation = useMutation({
    mutationFn: paymentApi.verifyPayment,
    onSuccess: async ({ email, phoneNumber, name, paymentHistoryId, finalPrice, planName }) => {
      await requestIssueBillingKey({
        finalPrice,
        paymentHistoryId,
        planName,
        customer: {
          fullName: name,
          phoneNumber: phoneNumber,
          email: email,
        },
      });
    },
    onError: () => {
      alert('결제에 실패하였습니다');
    },
  });

  return { verifyPayment: mutation.mutate };
};
