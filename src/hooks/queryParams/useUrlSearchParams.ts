'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { formatDayAsDashYYYYMMDD } from '@/utils/date/formatDay';

type UpdateMode = 'push' | 'replace';

const isEmptyParamValue = (value: unknown) => value === null || value === undefined || value === '';

function applyParamToSearchParams(searchParams: URLSearchParams, key: string, value: unknown) {
  if (isEmptyParamValue(value)) {
    searchParams.delete(key);
    return;
  }

  if (Array.isArray(value)) {
    searchParams.delete(key);

    // 중복 제거 → 빈 값 제거 → 숫자/문자 정렬
    const normalized = Array.from(new Set(value))
      .filter((v) => !isEmptyParamValue(v))
      .sort((a, b) => {
        const [aNum, bNum] = [Number(a), Number(b)];
        const bothNumbers = !Number.isNaN(aNum) && !Number.isNaN(bNum);
        return bothNumbers ? aNum - bNum : String(a).localeCompare(String(b));
      });

    normalized.forEach((v) => searchParams.append(key, String(v)));

    return;
  }

  if (value instanceof Date) {
    const formatted = formatDayAsDashYYYYMMDD(value) || value.toISOString();
    searchParams.set(key, formatted);
    return;
  }

  searchParams.set(key, String(value));
}

export const useUrlSearchParams = () => {
  const nextRouter = useRouter();
  const currentPathname = usePathname();
  const currentSearchParams = useSearchParams();

  const updateSearchParams = useCallback(
    (params: Record<string, unknown>, mode: UpdateMode = 'push') => {
      // 현재 쿼리를 복제해서 수정 가능한 객체로 변환
      const updatedSearchParams = new URLSearchParams(currentSearchParams?.toString());

      // 새 파라미터들 적용
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        applyParamToSearchParams(updatedSearchParams, paramKey, paramValue);
      });

      // 최종 URL 조립
      const queryString = updatedSearchParams.toString();
      const nextUrl = queryString ? `${currentPathname}?${queryString}` : currentPathname;

      // 페이지 이동
      mode === 'replace' ? nextRouter.replace(nextUrl, { scroll: false }) : nextRouter.push(nextUrl, { scroll: false });
    },
    [currentSearchParams, currentPathname, nextRouter],
  );

  const getSearchParam = useCallback(
    (key: string): string | null => currentSearchParams?.get(key) ?? null,
    [currentSearchParams],
  );

  const getSearchParamAsArray = useCallback(
    (key: string): string[] => currentSearchParams?.getAll(key) ?? [],
    [currentSearchParams],
  );

  const getSearchParamAsDate = useCallback(
    (key: string): Date | null => {
      const raw = currentSearchParams?.get(key);
      if (!raw) return null;
      const parsed = new Date(raw);
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    },
    [currentSearchParams],
  );

  const getAllSearchParams = useCallback((): Record<string, string | string[]> => {
    const allParams: Record<string, string | string[]> = {};
    if (!currentSearchParams) return allParams;

    const keys = new Set<string>();
    currentSearchParams.forEach((_, key) => keys.add(key));

    keys.forEach((key) => {
      const values = currentSearchParams.getAll(key);
      allParams[key] = values.length > 1 ? values : (values[0] ?? '');
    });

    return allParams;
  }, [currentSearchParams]);

  return {
    updateSearchParams,
    getSearchParam,
    getSearchParamAsArray,
    getSearchParamAsDate,
    getAllSearchParams,
  };
};
