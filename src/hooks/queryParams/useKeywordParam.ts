'use client';

import { useCallback } from 'react';

import { useUrlSearchParams } from './useUrlSearchParams';

/**
 * ?keyword= 문자열 파라미터 전담 훅
 * - 빈 문자열이면 URL에서 파라미터 제거
 */
export function useKeywordParam() {
  const { getSearchParam, updateSearchParams } = useUrlSearchParams();

  const value = getSearchParam('keyword') ?? '';

  const setValue = useCallback(
    (next: string) => {
      const trimmed = next?.trim() ?? '';
      updateSearchParams({ keyword: trimmed || null });
    },
    [updateSearchParams],
  );

  return [value, setValue] as const;
}
