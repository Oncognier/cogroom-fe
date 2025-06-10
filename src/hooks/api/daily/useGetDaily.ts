'use client';

import { useQuery } from '@tanstack/react-query';

import { getDaily } from '@/api/dailyApis';

// 스트릭, 질문, 답변 조회
export default function useDailyQuery() {
  const { data } = useQuery({
    queryKey: ['daily-question'],
    queryFn: getDaily,
  });

  return data;
}
