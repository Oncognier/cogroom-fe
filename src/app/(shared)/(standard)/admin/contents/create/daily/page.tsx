'use client';

import { Controller, useForm } from 'react-hook-form';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import Input from '@/components/molecules/Input/Input';
import { Select } from '@/components/molecules/Select/Select';
import { CATEGORY_SELECT_OPTIONS, LEVEL_SELECT_OPTIONS } from '@/constants/common';
import { useCreateDailyQuestionsMutation } from '@/hooks/api/admin/useCreateDailyQuestions';
import { DailyCreateFormFields } from '@/types/form';

import * as S from './page.styled';

export default function CreateDaily() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DailyCreateFormFields>({
    defaultValues: {
      level: '',
      categories: [],
      question1: '',
    },
  });

  const { createDailyQuestions } = useCreateDailyQuestionsMutation();

  const onSubmit = (data: DailyCreateFormFields) => {
    const questionList = [data.question1, data.question2, data.question3]
      .filter((q): q is string => !!q?.trim())
      .map((q) => ({ question: q }));

    createDailyQuestions({
      level: data.level,
      categoryList: data.categories,
      questionList,
    });
  };

  return (
    <S.ContentsContainer>
      <S.TitleWrapper>
        <S.Title>데일리 콘텐츠 추가</S.Title>
        <S.Subtitle>데일리 페이지 내 노출되는 콘텐츠를 추가합니다</S.Subtitle>
      </S.TitleWrapper>

      <S.ContentsForm onSubmit={handleSubmit(onSubmit)}>
        <S.SelectWrapper>
          <S.FixedSelectItem>
            <Controller
              name='level'
              control={control}
              rules={{ required: '난이도를 선택해주세요.' }}
              render={({ field }) => (
                <Select
                  inputSize='md'
                  label='난이도'
                  placeholder='기본'
                  options={LEVEL_SELECT_OPTIONS}
                  value={field.value ? [field.value] : []}
                  onChange={(val) => field.onChange(String(val[0]))}
                  error={errors.level?.message}
                  required
                />
              )}
            />
          </S.FixedSelectItem>

          <S.FixedSelectItem>
            <Controller
              name='categories'
              control={control}
              rules={{ required: '카테고리를 선택해주세요.' }}
              render={({ field }) => (
                <Select
                  inputSize='md'
                  label='카테고리'
                  placeholder='카테고리'
                  isMulti
                  options={CATEGORY_SELECT_OPTIONS}
                  value={field.value}
                  onChange={(val) => {
                    const parsed = val.map((v) => Number(v)).filter((v) => !isNaN(v));
                    field.onChange(parsed);
                  }}
                  error={errors.categories?.message}
                  required
                />
              )}
            />
          </S.FixedSelectItem>
        </S.SelectWrapper>

        <S.InputWrapper>
          <Input
            label='질문 1'
            inputSize='md'
            placeholder='질문을 입력하세요'
            {...register('question1', { required: '질문 1은 필수입니다.' })}
            error={errors.question1?.message}
            required
          />

          <Input
            label='질문 2'
            inputSize='md'
            placeholder='질문을 입력하세요'
            {...register('question2')}
          />

          <Input
            label='질문 3'
            inputSize='md'
            placeholder='질문을 입력하세요'
            {...register('question3')}
          />
        </S.InputWrapper>

        <S.ButtonWrapper>
          <SolidButton
            type='submit'
            color='primary'
            size='sm'
            label='등록하기'
            interactionVariant='normal'
            fillContainer
          />
        </S.ButtonWrapper>
      </S.ContentsForm>
    </S.ContentsContainer>
  );
}
