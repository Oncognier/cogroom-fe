'use client';

import { useQuery } from '@tanstack/react-query';

import { getDaily } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS } from '@/constants/queryKeys';

export default function useGetDailyQuery() {
  return useQuery({
    queryKey: [...DAILY_QUERY_KEYS.DAILY],
    queryFn: getDaily,
  });
}
