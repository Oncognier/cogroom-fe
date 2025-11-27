import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';

export default function useGetCouponList() {
  return useQuery({
    queryKey: ['member', 'coupon-list'],
    queryFn: memberApi.getCouponList,
  });
}
