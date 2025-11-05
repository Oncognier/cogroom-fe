'use client';

import { useCallback } from 'react';

import { formatDayAsDashYYYYMMDD } from '@/utils/date/formatDay';

import { useUrlSearchParams } from './useUrlSearchParams';

/**
 * ?startDate=, ?endDate= 날짜 범위 파라미터 전담 훅
 * - 내부/반환 값: 'YYYY-MM-DD' 문자열 또는 undefined (API 바로 사용 가능)
 * - setter는 Date | null을 입력받아 URL에는 'YYYY-MM-DD'로 저장, null이면 제거
 * - 파싱 불가한 값은 undefined로 처리
 */
export function useDateRangeParams() {
  const { getSearchParamAsDate, updateSearchParams } = useUrlSearchParams();

  const startDate = (() => {
    const date = getSearchParamAsDate('startDate');
    return date ? formatDayAsDashYYYYMMDD(date) : undefined;
  })();

  const endDate = (() => {
    const date = getSearchParamAsDate('endDate');
    return date ? formatDayAsDashYYYYMMDD(date) : undefined;
  })();

  const setRange = useCallback(
    (next: { startDate?: Date | null; endDate?: Date | null }) => {
      updateSearchParams({
        startDate: next.startDate ? formatDayAsDashYYYYMMDD(next.startDate) : null,
        endDate: next.endDate ? formatDayAsDashYYYYMMDD(next.endDate) : null,
      });
    },
    [updateSearchParams],
  );

  return [{ startDate, endDate }, setRange] as const;
}
