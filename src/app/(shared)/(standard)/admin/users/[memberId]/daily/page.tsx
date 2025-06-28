'use client';

import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Search from '@/components/atoms/Search/Search';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import { Select } from '@/components/molecules/Select/Select';
import { CATEGORY_SELECT_OPTIONS, LEVEL_SELECT_OPTIONS } from '@/constants/common';
import useGetMemberDailyQuestions from '@/hooks/api/admin/useGetMemberDailyQuestions';

import DailyTableHeader from './_components/DailyTableHeader/DailyTableHeader';
import * as S from './page.styled';
import DailyListRow from '../../../_components/DailyListRow/DailyListRow';

type FormValues = {
  keyword: string;
  category: number[];
  level: string[];
};

export default function MemberDaily() {
  const params = useParams();
  const memberId = Number(params?.memberId);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [filterValues, setFilterValues] = useState<FormValues>({
    keyword: '',
    category: [],
    level: [],
  });

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      keyword: '',
      category: [],
      level: [],
    },
  });

  const { data, isLoading } = useGetMemberDailyQuestions({
    memberId,
    params: {
      page: currentPage,
      keyword: filterValues.keyword,
      category: filterValues.category,
      level: filterValues.level,
    },
  });

  const contents = useMemo(() => data?.data ?? [], [data]);
  const totalPages = data?.totalPages ?? 1;

  const currentPageContentIds = useMemo(() => contents.map((c) => c.assignedQuestionId), [contents]);
  const isAllSelected =
    currentPageContentIds.length > 0 && currentPageContentIds.every((id) => selectedIds.includes(id));

  const handleToggleAll = (checked: boolean) => {
    setSelectedIds(checked ? currentPageContentIds : []);
  };

  const handleToggleOne = (id: number, checked: boolean) => {
    setSelectedIds((prev) => (checked ? [...prev, id] : prev.filter((v) => v !== id)));
  };

  const onSubmit = (data: FormValues) => {
    setFilterValues(data);
    setCurrentPage(0);
    setSelectedIds([]);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedIds([]);
  };

  return (
    <S.DailyContainer>
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
                placeholder='키워드 / 작성자 검색'
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
      </S.FilterHeader>

      <S.MemberDailyTable>
        <DailyTableHeader
          checked={isAllSelected}
          onCheckToggle={handleToggleAll}
        />

        {isLoading ? (
          <div>로딩 중...</div>
        ) : (
          contents.map((daily) => (
            <DailyListRow
              key={daily.assignedQuestionId}
              daily={daily}
              checked={selectedIds.includes(daily.assignedQuestionId)}
              onCheckToggle={(checked) => handleToggleOne(daily.assignedQuestionId, checked)}
            />
          ))
        )}
      </S.MemberDailyTable>

      <S.PaginationWrapper>
        <NumberPagination
          size='nm'
          currentPage={currentPage + 1}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </S.PaginationWrapper>
    </S.DailyContainer>
  );
}
