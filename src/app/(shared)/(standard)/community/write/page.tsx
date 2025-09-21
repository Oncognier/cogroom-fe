'use client';

import { FormProvider } from 'react-hook-form';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import Loading from '@/components/organisms/Loading/Loading';
import { useCommunityWriteLogic } from '@/hooks/useCommunityWriteLogic';

import CategorySelector from './_components/CategorySelector/CategorySelector';
import DailyQuestionCard from './_components/DailyQuestionCard/DailyQuestionCard';
import PostEditor from './_components/PostEditor/PostEditor';
import TitleInput from './_components/TitleInput/TitleInput';
import * as S from './page.styled';
import CommunityDescription from '../_components/CommunityDescription';
import { useAuthStore } from '@/stores/useAuthStore';
import AuthGuard from '@/components/organisms/AuthGuard/AuthGuard';

export default function CommunityWrite() {
  const logic = useCommunityWriteLogic();
  const status = useAuthStore((s) => s.status);

  if (status === 'unauthenticated') {
    return <AuthGuard />;
  }

  // 수정 모드에서 기존 데이터를 로딩 중일 때
  if (logic.isEditMode && logic.isLoadingPost) {
    return <Loading />;
  }

  return (
    <S.Container>
      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '커뮤니티', href: '/community' },
        ]}
      />

      <CommunityDescription />

      <FormProvider {...logic.methods}>
        <S.WriteForm onSubmit={logic.methods.handleSubmit(logic.onSubmit)}>
          <CategorySelector
            options={logic.categoryProps.options}
            error={logic.categoryProps.error}
            onChange={logic.categoryProps.onChange}
            onCategoryChange={logic.categoryProps.onCategoryChange}
            showAnonymous={logic.showAnonymous}
            onAnonymousToggle={(checked: boolean) => logic.methods.setValue('isAnonymous', checked)}
            control={logic.methods.control}
            isAnonymousDisabled={logic.isAnonymousDisabled}
          />

          <TitleInput
            control={logic.methods.control}
            error={logic.methods.formState.errors.title?.message}
          />

          {logic.dailyProps && <DailyQuestionCard {...logic.dailyProps} />}

          <PostEditor
            {...logic.editorProps}
            control={logic.methods.control}
            onContentChange={(value: string) => logic.methods.setValue('content', value)}
          />

          <S.ButtonWrapper>
            <SolidButton
              type='submit'
              color='primary'
              size='sm'
              label={logic.isEditMode ? '수정하기' : '올리기'}
              interactionVariant='normal'
              isDisabled={logic.isLoading}
            />
          </S.ButtonWrapper>
        </S.WriteForm>
      </FormProvider>
    </S.Container>
  );
}
