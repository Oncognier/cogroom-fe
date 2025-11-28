import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { PaymentHistoryParams } from '@/types/payment';

export default function useGetPaymentHistory(params?: PaymentHistoryParams) {
  return useQuery({
    queryKey: ['member', 'payment-history', params],
    queryFn: () => memberApi.getPaymentHistory(params),
  });
}
