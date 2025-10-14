import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import { CategoryOption, CommunityWriteFormData } from '@/types/communityWrite';
import { getCategoryType } from '@/utils/postUtils';

const categoryOptions: CategoryOption[] = [
  { value: 1, label: '데일리 공유' },
  { value: 2, label: '사색/고민' },
  { value: 3, label: '칼럼' },
];

export interface UseCategoryLogicProps {
  watchedCategoryId: number[];
  setValue: UseFormSetValue<CommunityWriteFormData>;
  onDailySelected: () => void;
}

export interface UseCategoryLogicReturn {
  categoryOptions: CategoryOption[];
  isDailyCategory: boolean;
  updateUrlType: (type: 'post' | 'daily') => void;
  handleCategoryChange: (categoryValue: number) => void;
}

export const useCategoryLogic = ({
  watchedCategoryId,
  setValue,
  onDailySelected,
}: UseCategoryLogicProps): UseCategoryLogicReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isDailyCategory = Array.isArray(watchedCategoryId) && watchedCategoryId.includes(1);

  const updateUrlType = useCallback(
    (type: 'post' | 'daily') => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('type', type);
      router.replace(`${window.location.pathname}?${newSearchParams.toString()}`);
    },
    [searchParams, router],
  );

  const handleCategoryChange = (categoryValue: number) => {
    const newType = getCategoryType(categoryValue);
    updateUrlType(newType);

    if (categoryValue === 1) {
      setValue('isAnonymous', true);
      onDailySelected();
    }
  };

  return {
    categoryOptions,
    isDailyCategory,
    updateUrlType,
    handleCategoryChange,
  };
};
