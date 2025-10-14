'use client';

import { useCallback } from 'react';

import { useUrlSearchParams } from './useUrlSearchParams';

/**
 * ?sort= 문자열 파라미터 전담 훅
 * - 정렬 순서를 관리 ('latest' | 'oldest')
 * - 기본값이 없으면 'latest'로 초기화
 * - setValue 호출 시 URL 파라미터를 업데이트
 * - 내부 값: 'latest' | 'oldest'
 */
export function useSortParam(defaultValue: 'latest' | 'oldest' = 'latest') {
  const { getSearchParam, updateSearchParams } = useUrlSearchParams();
  const value = (getSearchParam('sort') as 'latest' | 'oldest' | null) ?? defaultValue;
  const setValue = useCallback(
    (next: 'latest' | 'oldest') => {
      updateSearchParams({ sort: next });
    },
    [updateSearchParams],
  );
  return [value, setValue] as const;
}
