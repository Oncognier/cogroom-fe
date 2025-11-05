'use client';

import { useCallback } from 'react';

import { useUrlSearchParams } from './useUrlSearchParams';

/**
 * ?level= 다중 문자열 파라미터 전담 훅
 * - URL 형식: ?level=BASIC&level=ADVANCED
 * - 내부 값: string[] (빈 문자열 제거)
 * - 빈 배열이면 URL에서 파라미터 제거
 */
export function useLevelParam() {
  const { getSearchParamAsArray, updateSearchParams } = useUrlSearchParams();

  const value = getSearchParamAsArray('level').filter((v) => v && v.trim() !== '');

  const setValue = useCallback(
    (next: string[] | null | undefined) => {
      const arr = (next ?? []).filter((v) => v && v.trim() !== '');
      updateSearchParams({ level: arr.length ? arr : null });
    },
    [updateSearchParams],
  );

  return [value, setValue] as const;
}
