'use client';

import { useCallback } from 'react';

import { useUrlSearchParams } from './useUrlSearchParams';

/**
 * ?content= 문자열 파라미터 전담 훅
 * - 앞뒤 공백을 제거(trim)한 후 빈 문자열이면 URL에서 파라미터 제거
 * - 내부 값: string (기본값 '')
 */
export function useContentParam() {
  const { getSearchParam, updateSearchParams } = useUrlSearchParams();

  const value = getSearchParam('content') ?? '';

  const setValue = useCallback(
    (next: string) => {
      const trimmed = next?.trim() ?? '';
      updateSearchParams({ content: trimmed ? trimmed : null });
    },
    [updateSearchParams],
  );

  return [value, setValue] as const;
}
