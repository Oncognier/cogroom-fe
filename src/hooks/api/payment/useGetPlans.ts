import { useQuery } from '@tanstack/react-query';

import { paymentApi } from '@/api/paymentApis';
import { PAYMENT_QUERY_KEYS } from '@/constants/queryKeys';

export const useGetPlans = () => {
  return useQuery({
    queryKey: [...PAYMENT_QUERY_KEYS.PLANS],
    queryFn: paymentApi.getPlans,
  });
};
