import { useQuery } from '@tanstack/react-query';

import { paymentApi } from '@/api/paymentApis';
import { PAYMENT_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export const useGetPlans = () => {
  const isAuth = useAuthStore((s) => s.isAuth());

  return useQuery({
    queryKey: [...PAYMENT_QUERY_KEYS.PLANS],
    queryFn: paymentApi.getPlans,
    enabled: isAuth,
  });
};
