import { useQuery } from '@tanstack/react-query';

import { adminApi } from '@/api/adminApi';
import { CouponListRequest } from '@/types/admin';

export function useGetCoupons(params: CouponListRequest) {
  const stableParams = {
    ...params,
    status: Array.from(params.status).sort(),
    couponTypes: params.couponTypes ? Array.from(params.couponTypes).sort() : undefined,
  };

  return useQuery({
    queryKey: ['coupons', stableParams],
    queryFn: () => adminApi.getCoupons(params),
  });
}
