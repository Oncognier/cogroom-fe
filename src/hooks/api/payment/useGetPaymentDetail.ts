import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { PaymentDetailParams } from '@/types/payment';

export default function useGetPaymentDetail(params: PaymentDetailParams) {
  return useQuery({
    queryKey: ['member', 'payment-detail', params.paymentHistoryId],
    queryFn: () => memberApi.getPaymentDetail(params),
    enabled: !!params.paymentHistoryId,
  });
}
