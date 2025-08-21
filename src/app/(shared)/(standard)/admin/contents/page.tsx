'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import ScrollXWrapper from '@/app/(shared)/(standard)/admin/_components/ScrollXWrapper/ScrollXWrapper';
import ScriptX from '@/assets/icons/script-x.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Search from '@/components/atoms/Search/Search';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import { Select } from '@/components/molecules/Select/Select';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import { CATEGORY_SELECT_OPTIONS, LEVEL_SELECT_OPTIONS } from '@/constants/common';
import useGetDailyQuestions from '@/hooks/api/admin/useGetDailyQuestions';

import ContentsDailyTableHeader from './_components/ContentsDailyTableHeader/ContentsDailyTableHeader';
import * as S from './page.styled';
import DailyListRow from '../_components/DailyListRow/DailyListRow';

type DailyContentsFilterForm = {
  category: number[];
  level: string[];
  keyword: string;
};

export default function Contents() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [filterValues, setFilterValues] = useState<DailyContentsFilterForm>({
    category: [],
    level: [],
    keyword: '',
  });

  const { control, handleSubmit } = useForm<DailyContentsFilterForm>({
    defaultValues: {
      category: [],
      level: [],
      keyword: '',
    },
  });

  const { data, isLoading } = useGetDailyQuestions({
    page: currentPage,
    ...filterValues,
  });

  const contents = useMemo(() => data?.data ?? [], [data]);
  const totalPages = data?.totalPages ?? 1;

  const currentPageIds = useMemo(() => contents.map((c) => c.questionId), [contents]);
  const isAllSelected = currentPageIds.length > 0 && currentPageIds.every((id) => selectedIds.includes(id));

  const handleToggleAll = (checked: boolean) => {
    setSelectedIds(checked ? currentPageIds : []);
  };

  const handleToggleOne = (id: number, checked: boolean) => {
    setSelectedIds((prev) => (checked ? [...prev, id] : prev.filter((v) => v !== id)));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedIds([]);
  };

  const onSubmit = (formValues: DailyContentsFilterForm) => {
    setFilterValues(formValues);
    setCurrentPage(0);
    setSelectedIds([]);
  };

  return (
    <S.ContentsContainer>
      <ScrollXWrapper>
        <S.FilterHeader onSubmit={handleSubmit(onSubmit)}>
          <S.Title>데일리 콘텐츠</S.Title>

          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <S.SelectWrapper>
                <Select
                  inputSize='sm'
                  placeholder='카테고리 선택'
                  isMulti
                  options={CATEGORY_SELECT_OPTIONS}
                  value={field.value}
                  onChange={field.onChange}
                />
              </S.SelectWrapper>
            )}
          />

          <Controller
            name='level'
            control={control}
            render={({ field }) => (
              <S.SelectWrapper>
                <Select
                  inputSize='sm'
                  placeholder='난이도 선택'
                  isMulti
                  options={LEVEL_SELECT_OPTIONS}
                  value={field.value}
                  onChange={field.onChange}
                />
              </S.SelectWrapper>
            )}
          />

          <Controller
            name='keyword'
            control={control}
            render={({ field }) => (
              <S.SearchWrapper>
                <Search
                  inputSize='sm'
                  placeholder='키워드 검색'
                  interactionVariant='normal'
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </S.SearchWrapper>
            )}
          />

          <OutlinedButton
            size='sm'
            color='primary'
            label='검색하기'
            interactionVariant='normal'
            type='submit'
          />

          <SolidButton
            size='sm'
            color='primary'
            label='추가하기'
            interactionVariant='normal'
            onClick={() => router.push('/admin/contents/create/daily')}
          />
        </S.FilterHeader>

        <S.ContentsTable>
          <ContentsDailyTableHeader
            checked={isAllSelected}
            onCheckToggle={handleToggleAll}
          />

          {isLoading ? (
            <Loading />
          ) : contents.length === 0 ? (
            <EmptyState icon={<ScriptX />} />
          ) : (
            contents.map((daily) => (
              <DailyListRow
                key={daily.questionId}
                daily={daily}
                checked={selectedIds.includes(daily.questionId)}
                onCheckToggle={(checked) => handleToggleOne(daily.questionId, checked)}
              />
            ))
          )}
        </S.ContentsTable>
      </ScrollXWrapper>

      <S.PaginationWrapper>
        <NumberPagination
          size='nm'
          currentPage={currentPage + 1}
          totalPages={totalPages}
          onPageChange={(uiPage) => handlePageChange(uiPage - 1)}
        />
      </S.PaginationWrapper>
    </S.ContentsContainer>
  );
}
