'use client';

import { useSearchParams } from 'next/navigation';
import { FormProvider } from 'react-hook-form';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import AuthGuard from '@/components/organisms/AuthGuard/AuthGuard';
import Loading from '@/components/organisms/Loading/Loading';
import { useCategoryLogic } from '@/hooks/communityWrite/useCategoryLogic';
import { useDailyLogic } from '@/hooks/communityWrite/useDailyLogic';
import { useEditMode } from '@/hooks/communityWrite/useEditMode';
import { usePostSubmission } from '@/hooks/communityWrite/usePostSubmission';
import { useWriteForm } from '@/hooks/communityWrite/useWriteForm';
import { useAuthStore } from '@/stores/useAuthStore';

import CategorySelector from './_components/CategorySelector/CategorySelector';
import DailyQuestionCard from './_components/DailyQuestionCard/DailyQuestionCard';
import PostEditor from './_components/PostEditor/PostEditor';
import TitleInput from './_components/TitleInput/TitleInput';
import * as S from './page.styled';
import CommunityDescription from '../_components/CommunityDescription';

export default function CommunityWrite() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'post';
  const isDaily = type === 'daily';

  const editMode = useEditMode({
    reset: () => {},
    updateUrlType: () => {},
  });

  const form = useWriteForm({
    defaultValues: editMode.getInitialValues(),
  });

  const watchedCategoryId = form.watch('categoryId');

  const category = useCategoryLogic({
    watchedCategoryId,
    setValue: form.setValue,
    onDailySelected: () => {},
  });

  const daily = useDailyLogic({
    isDaily,
    isEditMode: editMode.isEditMode,
    isDailyCategory: category.isDailyCategory,
    existingPost: editMode.existingPost,
    setValue: form.setValue,
    updateUrlType: category.updateUrlType,
  });

  const editModeWithUpdate = useEditMode({
    reset: form.reset,
    updateUrlType: category.updateUrlType,
  });

  const categoryWithDaily = useCategoryLogic({
    watchedCategoryId,
    setValue: form.setValue,
    onDailySelected: daily.handleDailySelected,
  });

  const submission = usePostSubmission({
    isEditMode: editModeWithUpdate.isEditMode,
    editPostId: editModeWithUpdate.editPostId,
    existingPost: editModeWithUpdate.existingPost,
    dailyData: daily.dailyData,
    isDaily,
    isDailyCategory: categoryWithDaily.isDailyCategory,
  });
  const isUnauth = useAuthStore((s) => s.isUnauth());

  if (isUnauth) {
    return <AuthGuard />;
  }

  if (editModeWithUpdate.isEditMode && editModeWithUpdate.isLoadingPost) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.MobileGuard>
        <Breadcrumb
          items={[
            { name: '홈', href: '/' },
            { name: '커뮤니티', href: '/community' },
          ]}
        />

        <CommunityDescription />
      </S.MobileGuard>

      <FormProvider {...form.methods}>
        <S.WriteForm onSubmit={form.methods.handleSubmit(submission.onSubmit)}>
          <CategorySelector
            options={categoryWithDaily.categoryOptions}
            error={form.errors.categoryId?.message}
            onChange={(value: number[]) => form.setValue('categoryId', value)}
            onCategoryChange={categoryWithDaily.handleCategoryChange}
            showAnonymous={daily.showAnonymous}
            onAnonymousToggle={(checked: boolean) => form.setValue('isAnonymous', checked)}
            control={form.methods.control}
            isAnonymousDisabled={daily.isAnonymousDisabled}
          />

          <TitleInput
            control={form.methods.control}
            error={form.methods.formState.errors.title?.message}
          />

          {daily.dailyQuestionProps && <DailyQuestionCard {...daily.dailyQuestionProps} />}

          <PostEditor
            height={800}
            control={form.methods.control}
            onContentChange={(value: string) => form.setValue('content', value)}
          />

          <S.ButtonWrapper>
            <SolidButton
              type='submit'
              color='primary'
              size='sm'
              label={editModeWithUpdate.isEditMode ? '수정하기' : '올리기'}
              interactionVariant='normal'
              isDisabled={submission.isLoading}
            />
          </S.ButtonWrapper>
        </S.WriteForm>
      </FormProvider>
    </S.Container>
  );
}
