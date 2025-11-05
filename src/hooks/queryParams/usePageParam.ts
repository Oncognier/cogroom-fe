'use client';

import { useCallback, useMemo } from 'react';

import { useUrlSearchParams } from './useUrlSearchParams';

/**
 * ?page= 페이지 파라미터 전담 훅
 * - URL은 1-based(?page=1), 내부/API는 0-based number로 관리
 * - 잘못된 값(음수/NaN)은 1로 보정
 * - page=1이면 URL에서 파라미터 제거(공유용 URL 깔끔하게 유지)
 */
export function usePageParam(defaultZeroBased = 0) {
  const { getSearchParam, updateSearchParams } = useUrlSearchParams();

  const zeroBased = useMemo(() => {
    const raw = getSearchParam('page');
    const one = Number(raw || '1');
    const safeOne = Number.isFinite(one) && one > 0 ? one : 1;
    return Math.max(0, safeOne - 1);
  }, [getSearchParam]);

  const page = Number.isFinite(zeroBased) ? zeroBased : defaultZeroBased;

  const setPage = useCallback(
    (nextZeroBased: number) => {
      const nextOne = Math.max(1, Math.floor(nextZeroBased) + 1);
      updateSearchParams({ page: nextOne === 1 ? null : nextOne });
    },
    [updateSearchParams],
  );

  return [page, setPage] as const;
}
