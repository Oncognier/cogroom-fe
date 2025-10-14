'use client';

import { useCallback } from 'react';

import { useUrlSearchParams } from './useUrlSearchParams';

/**
 * ?category= 다중 숫자 파라미터 전담 훅
 * - URL 형식: ?category=1&category=3&category=5
 * - 내부 값: number[] (NaN 필터링)
 * - 빈 배열이면 URL에서 파라미터 제거
 */
export function useCategoryParam() {
  const { getSearchParamAsArray, updateSearchParams } = useUrlSearchParams();

  const value = getSearchParamAsArray('category')
    .map((v) => Number(v))
    .filter((n) => Number.isFinite(n));

  const setValue = useCallback(
    (next: number[] | null | undefined) => {
      const arr = (next ?? []).filter((n) => Number.isFinite(n));
      updateSearchParams({ category: arr.length ? arr.map(String) : null });
    },
    [updateSearchParams],
  );

  return [value, setValue] as const;
}
