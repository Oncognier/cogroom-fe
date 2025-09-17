import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { DEFAULT_DAILY_QUESTION } from '@/constants/common';
import useGetDailyQuestionsQuery from '@/hooks/api/daily/useGetDailyQuestions';
import { useCreatePostMutation } from '@/hooks/api/post/useCreatePost';
import { useGetPost } from '@/hooks/api/post/useGetPost';
import { useUpdatePostMutation } from '@/hooks/api/post/useUpdatePost';
import { useAlertModalStore } from '@/stores/useModalStore';
import { CommunityWriteFormData, CategoryOption, UseCommunityWriteLogicReturn } from '@/types/communityWrite';
import { extractImageUrls, calculateDeleteUrls, getCategoryType, extractCategoryId } from '@/utils/postUtils';

const categoryOptions: CategoryOption[] = [
  { value: 1, label: '데일리 공유' },
  { value: 2, label: '사색/고민' },
  { value: 3, label: '칼럼' },
];

export const useCommunityWriteLogic = (): UseCommunityWriteLogicReturn => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'post';
  const editPostId = searchParams.get('edit');
  const isEditMode = !!editPostId;
  const isDaily = type === 'daily';

  // 수정 모드에서 useEffect 초기화를 한번만 실행하기 위한 ref 입니다!
  const isInitialized = useRef(false);

  const { createPost, isLoading: isCreating } = useCreatePostMutation();
  const { updatePost, isLoading: isUpdating } = useUpdatePostMutation();
  const { data: existingPost, isLoading: isLoadingPost } = useGetPost(editPostId || '', { enabled: isEditMode });
  const { data: dailyData, isLoading: isDailyLoading } = useGetDailyQuestionsQuery();
  const { open: openAlert } = useAlertModalStore();

  const isLoading = isCreating || isUpdating;

  const getInitialCategoryId = () => {
    if (isEditMode && existingPost) {
      return [existingPost.category.categoryId];
    }
    if (type === 'daily') return [1];
    if (type === 'post') return [];
    return [];
  };

  const getInitialValues = () => {
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

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: getInitialValues(),
  });

  const {
    setValue,
    watch,
    reset,
    formState: { errors },
  } = methods;

  const watchedCategoryId = watch('categoryId');
  const isDailyCategory = Array.isArray(watchedCategoryId) && watchedCategoryId.includes(1);

  const updateUrlType = useCallback(
    (type: 'post' | 'daily') => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('type', type);
      router.replace(`${window.location.pathname}?${newSearchParams.toString()}`);
    },
    [searchParams, router],
  );

  const showDailyAlert = () => {
    openAlert('alert', {
      message: '오늘의 데일리에 답해주세요!',
      type: 'confirm',
      confirmText: '답변하러 가기',
      cancelText: '마저 글쓰기',
      onConfirm: () => {
        router.push('/daily');
      },
      onCancel: () => {
        setValue('categoryId', [2]);
        updateUrlType('post');
      },
    });
  };

  const onSubmit = (formData: CommunityWriteFormData) => {
    const categoryId = extractCategoryId(formData.categoryId);
    const imageUrlList = extractImageUrls(formData.content);
    const isAnonymousRendered =
      (isEditMode && existingPost?.daily && isDailyCategory) || (!!dailyData?.answer && isDaily && isDailyCategory);

    const finalIsAnonymous = isAnonymousRendered ? formData.isAnonymous : false;

    if (isEditMode && editPostId) {
      const existingImageUrls = extractImageUrls(existingPost?.content || '');
      const deleteUrlList = calculateDeleteUrls(existingImageUrls, imageUrlList);

      updatePost({
        postId: editPostId,
        title: formData.title,
        categoryId: categoryId,
        content: formData.content,
        imageUrlList: imageUrlList,
        deleteUrlList: deleteUrlList,
      });
    } else {
      createPost({
        title: formData.title,
        categoryId: categoryId,
        content: formData.content,
        isAnonymous: finalIsAnonymous,
        imageUrlList: imageUrlList,
      });
    }
  };

  const handleCategoryChange = (categoryValue: number) => {
    const newType = getCategoryType(categoryValue);
    updateUrlType(newType);

    if (categoryValue === 1) {
      setValue('isAnonymous', true);

      if (isEditMode && existingPost?.daily) {
        setValue('title', existingPost.daily.question);
      } else {
        if (dailyData && !dailyData.answer) {
          showDailyAlert();
        }

        if (dailyData?.answer) {
          setValue('title', dailyData?.question ?? DEFAULT_DAILY_QUESTION);
        }
      }
    }
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

  useEffect(() => {
    if (!isDaily || isDailyLoading || !dailyData || isEditMode) return;

    if (!isDailyCategory) return;

    if (!dailyData.answer) {
      const timer = setTimeout(() => {
        setValue('categoryId', [2]);
        setValue('title', '');
        updateUrlType('post');
      }, 100);

      return () => clearTimeout(timer);
    }

    if (dailyData.question && dailyData.answer) {
      setValue('title', dailyData.question);
    }
  }, [isDaily, isDailyLoading, dailyData, isDailyCategory, setValue, updateUrlType, isEditMode]);

  const showAnonymous =
    (isEditMode && existingPost?.daily && isDailyCategory) || (!!dailyData?.answer && isDaily && isDailyCategory);

  const dailyQuestionProps = (() => {
    if (isEditMode && existingPost?.daily && isDailyCategory) {
      return {
        question: existingPost.daily.question,
        answer: existingPost.daily.answer,
        assignedQuestionId: 0,
      };
    }

    if (dailyData?.answer && isDaily) {
      return {
        question: dailyData?.question ?? DEFAULT_DAILY_QUESTION,
        answer: dailyData?.answer ?? '',
        assignedQuestionId: dailyData?.assignedQuestionId ?? 0,
      };
    }

    return null;
  })();

  return {
    // Form 관련
    methods,
    onSubmit,
    isLoading,

    // Category 관련
    categoryProps: {
      options: categoryOptions,
      value: watchedCategoryId || [],
      error: errors.categoryId?.message,
      onChange: (value: number[]) => setValue('categoryId', value),
      onCategoryChange: handleCategoryChange,
    },

    // Daily 관련
    dailyProps: dailyQuestionProps,

    // Editor 관련
    editorProps: {
      height: 800,
    },

    // 상태
    isEditMode,
    isLoadingPost,
    showAnonymous,
  };
};
