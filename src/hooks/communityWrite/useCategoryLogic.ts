import { useCallback } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import { POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import { useUrlSearchParams } from '@/hooks/queryParams/useUrlSearchParams';
import { CommunityWriteFormData } from '@/types/communityWrite';
import { getCategoryType } from '@/utils/postUtils';

export interface UseCategoryLogicProps {
  watchedCategoryId: number[];
  setValue: UseFormSetValue<CommunityWriteFormData>;
  onDailySelected: () => void;
}

export interface UseCategoryLogicReturn {
  categoryOptions: typeof POST_CATEGORY_SELECT_OPTIONS;
  isDailyCategory: boolean;
  updateUrlType: (type: 'post' | 'daily') => void;
  handleCategoryChange: (categoryValue: number) => void;
}

export const useCategoryLogic = ({
  watchedCategoryId,
  setValue,
  onDailySelected,
}: UseCategoryLogicProps): UseCategoryLogicReturn => {
  const { updateSearchParams } = useUrlSearchParams();

  const isDailyCategory = Array.isArray(watchedCategoryId) && watchedCategoryId.includes(1);

  const updateUrlType = useCallback(
    (type: 'post' | 'daily') => {
      updateSearchParams({ type }, 'replace');
    },
    [updateSearchParams],
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
    categoryOptions: POST_CATEGORY_SELECT_OPTIONS,
    isDailyCategory,
    updateUrlType,
    handleCategoryChange,
  };
};
