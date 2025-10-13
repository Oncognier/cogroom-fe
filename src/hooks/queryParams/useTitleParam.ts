'use client';

import { useCallback } from 'react';

import { useUrlSearchParams } from './useUrlSearchParams';

/**
 * ?title= 문자열 파라미터 전담 훅
 * - 빈 문자열이면 URL에서 파라미터 제거
 */
export function useTitleParam() {
  const { getSearchParam, updateSearchParams } = useUrlSearchParams();

  const value = getSearchParam('title') ?? '';

  const setValue = useCallback(
    (next: string) => {
      const trimmed = next?.trim() ?? '';
      updateSearchParams({ title: trimmed || null });
    },
    [updateSearchParams],
  );

  return [value, setValue] as const;
}
