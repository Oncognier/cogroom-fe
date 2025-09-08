'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import Input from '@/components/molecules/Input/Input';
import { Select } from '@/components/molecules/Select/Select';
import Editor from '@/components/organisms/Editor/Editor';

import * as S from './page.styled';
import CommunityDescription from '../_components/CommunityDescription';

export default function CommunityWrite() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'post';
  const isDaily = type === 'daily';

  const [isSubmitting, setIsSubmitting] = useState(false);

  const categoryOptions = [
    { value: 0, label: '데일리 공유' },
    { value: 1, label: '사색/고민' },
    { value: 2, label: '칼럼' },
  ];

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      categoryId: type === 'post' ? [] : [0],
      title: '',
      content: '',
    },
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    setError,
    formState: { errors, isValid },
  } = methods;

  const handleBack = () => {
    router.back();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (formData: any) => {
    setIsSubmitting(true);

    try {
      // TODO: API 연동

      // 임시로 2초 대기
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert(`${isDaily ? '데일리 공유' : '글'}이 성공적으로 작성되었습니다.`);
      router.push('/community');
    } catch (error) {
      alert('글 작성에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  onChange={(val) => field.onChange(val)}
                />
              )}
            />
          </S.CategoryBox>

          <Controller
            name='title'
            control={control}
            rules={{ required: '제목을 입력해 주세요.' }}
            render={({ field }) => (
              <Input
                inputSize='lg'
                label='제목'
                placeholder='제목을 입력해 주세요.'
                value={field.value || ''}
                onChange={(val) => field.onChange(val)}
              />
            )}
          />

          <Controller
            name='content'
            control={control}
            rules={{ required: '내용을 입력해 주세요.' }}
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
            />
          </S.ButtonWrapper>
        </S.WriteForm>
      </FormProvider>
    </S.Container>
  );
}
