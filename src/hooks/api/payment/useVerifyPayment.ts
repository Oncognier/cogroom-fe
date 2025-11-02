import PortOne from '@portone/browser-sdk/v2';
import { useMutation } from '@tanstack/react-query';

import { paymentApi } from '@/api/paymentApis';

export const useVerifyPaymentMutation = () => {
  const mutation = useMutation({
    mutationFn: paymentApi.verifyPayment,
    onSuccess: async ({ email, phoneNumber, name, paymentHistoryId, finalPrice, planName }) => {
      await PortOne.requestIssueBillingKey({
        displayAmount: finalPrice,
        currency: 'KRW',
        storeId: 'store-0746d3bf-7b4d-4961-8ebb-9c1f3335cda8',
        billingKeyMethod: 'CARD',
        channelKey: 'channel-key-01599594-2b75-4af3-bd53-b8fc4c0df68a',
        issueId: String(paymentHistoryId),
        issueName: planName,
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
