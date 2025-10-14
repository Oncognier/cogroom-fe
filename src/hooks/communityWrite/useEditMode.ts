import { useEffect, useRef } from 'react';
import { UseFormReset } from 'react-hook-form';

import { useGetPost } from '@/hooks/api/post/useGetPost';
import { useUrlSearchParams } from '@/hooks/queryParams/useUrlSearchParams';
import { CommunityWriteFormData } from '@/types/communityWrite';
import { getCategoryType } from '@/utils/postUtils';

interface ExistingPost {
  category: {
    categoryId: number;
  };
  title: string;
  content: string;
  author?: {
    isAnonymous?: boolean;
  };
  daily?: {
    question: string;
    answer: string;
  } | null;
}

export interface UseEditModeProps {
  reset: UseFormReset<CommunityWriteFormData>;
  updateUrlType: (type: 'post' | 'daily') => void;
}

export interface UseEditModeReturn {
  isEditMode: boolean;
  editPostId: string | null;
  existingPost: ExistingPost | undefined;
  isLoadingPost: boolean;
  getInitialValues: () => CommunityWriteFormData;
}

export const useEditMode = ({ reset, updateUrlType }: UseEditModeProps): UseEditModeReturn => {
  const { getSearchParam } = useUrlSearchParams();
  const type = getSearchParam('type') || 'post';
  const editPostId = getSearchParam('edit');
  const isEditMode = !!editPostId;
  const isDaily = type === 'daily';

  // 수정 모드에서 useEffect 초기화를 한번만 실행하기 위한 ref
  const isInitialized = useRef(false);

  const { data: existingPost, isLoading: isLoadingPost } = useGetPost(editPostId || '', { enabled: isEditMode });

  const getInitialCategoryId = () => {
    if (isEditMode && existingPost) {
      return [existingPost.category.categoryId];
    }
    if (type === 'daily') return [1];
    if (type === 'post') return [];
    return [];
  };

  const getInitialValues = (): CommunityWriteFormData => {
    if (isEditMode && existingPost) {
      return {
        categoryId: [existingPost.category.categoryId],
        title: existingPost.title,
        content: existingPost.content,
        isAnonymous: existingPost.author?.isAnonymous ?? false,
      };
    }
    return {
      categoryId: getInitialCategoryId(),
      title: '',
      content: '',
      isAnonymous: isDaily,
    };
  };

  useEffect(() => {
    if (isEditMode && existingPost && !isLoadingPost && !isInitialized.current) {
      reset({
        categoryId: [existingPost.category.categoryId],
        title: existingPost.title,
        content: existingPost.content,
        isAnonymous: existingPost.author?.isAnonymous ?? false,
      });

      const categoryId = existingPost.category.categoryId;
      updateUrlType(getCategoryType(categoryId));

      isInitialized.current = true;
    }
  }, [isEditMode, existingPost, isLoadingPost, reset, updateUrlType]);

  return {
    isEditMode,
    editPostId,
    existingPost,
    isLoadingPost,
    getInitialValues,
  };
};
