import { useQuery } from '@tanstack/react-query';

import { PAYMENT_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';
import { paymentApi } from '@/api/paymentApis';

export const useGetPlans = () => {
  const isAuth = useAuthStore((s) => s.isAuth());

  return useQuery({
    queryKey: [...PAYMENT_QUERY_KEYS.PLANS],
    queryFn: paymentApi.getPlans,
    enabled: isAuth,
  });
};
