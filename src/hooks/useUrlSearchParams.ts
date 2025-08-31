'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export const useUrlSearchParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateSearchParams = useCallback(
    (params: Record<string, unknown>) => {
      if (!searchParams) return;

      const newSearchParams = new URLSearchParams(searchParams?.toString());

      Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === undefined || value === '') {
          newSearchParams.delete(key);
        } else if (Array.isArray(value)) {
          newSearchParams.delete(key);
          value.forEach((v) => {
            if (v !== null && v !== undefined && v !== '') {
              newSearchParams.append(key, String(v));
            }
          });
        } else if (value instanceof Date) {
          newSearchParams.set(key, value.toISOString());
        } else {
          newSearchParams.set(key, String(value));
        }
      });

      const queryString = newSearchParams.toString();
      const newUrl = queryString ? `?${queryString}` : window.location.pathname;

      router.push(newUrl);
    },
    [router, searchParams],
  );

  const getSearchParam = useCallback(
    (key: string): string | null => {
      if (!searchParams) return null;
      return searchParams?.get(key) || null;
    },
    [searchParams],
  );

  const getSearchParamAsArray = useCallback(
    (key: string): string[] => {
      return searchParams?.getAll(key) || [];
    },
    [searchParams],
  );

  const getSearchParamAsDate = useCallback(
    (key: string): Date | null => {
      const value = searchParams?.get(key);
      return value ? new Date(value) : null;
    },
    [searchParams],
  );

  const getAllSearchParams = useCallback((): Record<string, string | string[]> => {
    const params: Record<string, string | string[]> = {};

    if (!searchParams) return params;

    for (const [key, value] of searchParams.entries()) {
      const allValues = searchParams.getAll(key);
      params[key] = allValues.length > 1 ? allValues : value;
    }

    return params;
  }, [searchParams]);

  return {
    updateSearchParams,
    getSearchParam,
    getSearchParamAsArray,
    getSearchParamAsDate,
    getAllSearchParams,
  };
};
