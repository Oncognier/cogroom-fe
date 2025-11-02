import PortOne from '@portone/browser-sdk/v2';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { paymentApi } from '@/api/paymentApis';
import { PORTONE } from '@/constants/api';

export const useVerifyPaymentMutation = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: paymentApi.verifyPayment,
    onSuccess: async ({ email, phoneNumber, name, paymentHistoryId, finalPrice, planName }) => {
      if (!PORTONE.STORE_ID || !PORTONE.CHANNEL_KEY) {
        return;
      }

      await PortOne.requestIssueBillingKey({
        displayAmount: finalPrice,
        currency: 'KRW',
        storeId: PORTONE.STORE_ID,
        billingKeyMethod: 'CARD',
        channelKey: PORTONE.CHANNEL_KEY,
        issueId: String(paymentHistoryId),
        issueName: planName,
        redirectUrl: PORTONE.REDIRECT_URL,
        offerPeriod: {
          interval: '1m',
        },
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
