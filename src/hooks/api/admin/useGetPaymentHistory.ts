import { useQuery } from '@tanstack/react-query';

import { adminApi } from '@/api/adminApi';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';
import { AdminPaymentHistoryRequest } from '@/types/admin';

export const useGetPaymentHistory = (params: AdminPaymentHistoryRequest) => {
  return useQuery({
    queryKey: [...ADMIN_QUERY_KEYS.PAYMENT_HISTORY, params],
    queryFn: () => adminApi.getPaymentHistory(params),
  });
};
