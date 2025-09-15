/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import Question from '@/app/(shared)/(standard)/daily/_components/Question/Question';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import Input from '@/components/molecules/Input/Input';
import { Select } from '@/components/molecules/Select/Select';
import Editor from '@/components/organisms/Editor/Editor';
import { DEFAULT_DAILY_QUESTION } from '@/constants/common';
import useGetDailyQuestionsQuery from '@/hooks/api/daily/useGetDailyQuestions';
import { useCreatePostMutation } from '@/hooks/api/post/useCreatePost';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './page.styled';
import CommunityDescription from '../_components/CommunityDescription';

const categoryOptions = [
  { value: 1, label: '데일리 공유' },
  { value: 2, label: '사색/고민' },
  { value: 3, label: '칼럼' },
];

export default function CommunityWrite() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'post';
  const isDaily = type === 'daily';

  const { createPost, isLoading } = useCreatePostMutation();
  const { data: dailyData, isLoading: isDailyLoading } = useGetDailyQuestionsQuery();
  const { open: openAlert } = useAlertModalStore();

  const getInitialCategoryId = () => {
    if (type === 'daily') return [1];
    if (type === 'post') return [];
    return [];
  };

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      categoryId: getInitialCategoryId(),
      title: '',
      content: '',
      isAnonymous: isDaily,
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
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
  const extractImageUrls = (htmlContent: string): string[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const images = doc.querySelectorAll('img');
    return Array.from(images).map((img) => img.src);
  };

  const onSubmit = (formData: { categoryId: number[]; title: string; content: string; isAnonymous: boolean }) => {
    const categoryId = Array.isArray(formData.categoryId) ? formData.categoryId[0] : formData.categoryId;
    const imageUrlList = extractImageUrls(formData.content);
    const isAnonymousRendered = !!dailyData?.answer && isDaily && isDailyCategory;

    const finalIsAnonymous = isAnonymousRendered ? formData.isAnonymous : false;

    createPost({
      title: formData.title,
      categoryId: categoryId,
      content: formData.content,
      isAnonymous: finalIsAnonymous,
      imageUrlList: imageUrlList,
    });
  };

  useEffect(() => {
    if (!isDaily || isDailyLoading || !dailyData) return;

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
  }, [isDaily, isDailyLoading, dailyData, isDailyCategory, setValue, updateUrlType]);

  return (
    <S.Container>
      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '커뮤니티', href: '/community' },
        ]}
      />

      <CommunityDescription />

      <FormProvider {...methods}>
        <S.WriteForm onSubmit={handleSubmit(onSubmit)}>
          <S.CategoryBox>
            <S.CategorySelect>
              <Controller
                name='categoryId'
                control={control}
                rules={{ required: '카테고리를 선택해 주세요.' }}
                render={({ field }) => (
                  <Select
                    inputSize='md'
                    label='카테고리'
                    placeholder='카테고리 선택'
                    options={categoryOptions}
                    value={field.value || []}
                    error={errors.categoryId?.message}
                    onChange={(val) => {
                      field.onChange(val);
                      const categoryValue = Array.isArray(val) ? val[0] : val;

                      if (categoryValue) {
                        const newType = categoryValue === 1 ? 'daily' : 'post';
                        updateUrlType(newType);

                        if (categoryValue === 1) {
                          setValue('isAnonymous', true);

                          if (dailyData && !dailyData.answer) {
                            showDailyAlert();
                          }

                          if (dailyData?.answer) {
                            setValue('title', dailyData?.question ?? DEFAULT_DAILY_QUESTION);
                          }
                        }
                      }
                    }}
                  />
                )}
              />
            </S.CategorySelect>

            {!!dailyData?.answer && isDaily && isDailyCategory && (
              <S.AnonymousCheckbox>
                <Controller
                  name='isAnonymous'
                  control={control}
                  render={({ field }) => (
                    <S.CheckboxWrapper>
                      <Checkbox
                        size='nm'
                        isChecked={field.value}
                        onToggle={(checked) => field.onChange(checked)}
                        interactionVariant='normal'
                        name='isAnonymous'
                      />
                      <S.CheckboxName>익명</S.CheckboxName>
                    </S.CheckboxWrapper>
                  )}
                />
              </S.AnonymousCheckbox>
            )}
          </S.CategoryBox>

          <Controller
            name='title'
            control={control}
            rules={{
              required: '제목을 입력해 주세요.',
              maxLength: {
                value: 30,
                message: '제목은 최대 30자까지 입력할 수 있어요.',
              },
              validate: (value) => {
                // 허용 문자 정규식 (한글, 영문, 숫자, 특수문자, 이모지 포함)
                const allowedRegex = /^[\p{L}\p{N}\p{P}\p{S}\p{Emoji}\s]+$/u;

                return allowedRegex.test(value) || '제목에 사용할 수 없는 문자가 있어요';
              },
            }}
            render={({ field }) => (
              <Input
                inputSize='lg'
                label='제목'
                placeholder='제목을 입력해 주세요.'
                value={field.value || ''}
                onChange={(val) => field.onChange(val)}
                error={errors.title?.message}
              />
            )}
          />

          {dailyData?.answer && isDaily && (
            <>
              <Question
                assignedQuestionId={dailyData?.assignedQuestionId ?? 0}
                question={dailyData?.question ?? DEFAULT_DAILY_QUESTION}
                answer={dailyData?.answer ?? ''}
                hasAnswered={!!dailyData?.answer}
                hideSubmitButton={true}
                readOnlyMode={true}
              />
            </>
          )}

          <Controller
            name='content'
            control={control}
            render={({ field }) => (
              <S.ContentSection>
                <Editor
                  value={field.value || ''}
                  onChange={(val) => field.onChange(val)}
                  height={800}
                />
              </S.ContentSection>
            )}
          />

          <S.ButtonWrapper>
            <SolidButton
              type='submit'
              color='primary'
              size='sm'
              label='올리기'
              interactionVariant='normal'
              isDisabled={isLoading}
            />
          </S.ButtonWrapper>
        </S.WriteForm>
      </FormProvider>
    </S.Container>
  );
}
