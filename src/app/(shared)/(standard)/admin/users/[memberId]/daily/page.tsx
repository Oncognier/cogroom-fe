'use client';

import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import ScrollXWrapper from '@/app/(shared)/(standard)/admin/_components/ScrollXWrapper/ScrollXWrapper';
import ScriptX from '@/assets/icons/script-x.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Search from '@/components/atoms/Search/Search';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import { Select } from '@/components/molecules/Select/Select';
import SelectDateRange from '@/components/molecules/SelectDateRange/SelectDateRange';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import Table from '@/components/organisms/Table/Table';
import { CATEGORY_SELECT_OPTIONS, DAILY_TABLE_HEADER_ITEMS, LEVEL_SELECT_OPTIONS } from '@/constants/common';
import useGetMemberDailyQuestions from '@/hooks/api/admin/useGetMemberDailyQuestions';
import { MemberDailyFormFields } from '@/types/form';
import { formatDayAsDashYYYYMMDD } from '@/utils/date/formatDay';

import DailyListCard from './_components/DailyListCard/DailyListCard';
import * as S from './page.styled';

export default function MemberDaily() {
  const memberId = String(useParams()?.memberId);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const [filterValues, setFilterValues] = useState<MemberDailyFormFields>({
    keyword: '',
    category: [],
    level: [],
    startDate: null,
    endDate: null,
  });

  const { control, handleSubmit } = useForm<MemberDailyFormFields>({
    defaultValues: filterValues,
  });

  const { data, isLoading } = useGetMemberDailyQuestions({
    memberId,
    params: {
      page: currentPage,
      keyword: filterValues.keyword,
      category: filterValues.category,
      level: filterValues.level,
      startDate: formatDayAsDashYYYYMMDD(filterValues.startDate),
      endDate: formatDayAsDashYYYYMMDD(filterValues.endDate),
    },
  });

  const contents = useMemo(() => data?.data ?? [], [data]);
  const totalPages = data?.totalPages ?? 1;

  const currentPageContentIds = useMemo(() => contents.map((c) => c.assignedQuestionId), [contents]);
  const isAllSelected =
    currentPageContentIds.length > 0 && currentPageContentIds.every((id) => selectedIds.includes(id));

  const onSubmit = (form: MemberDailyFormFields) => {
    setFilterValues(form);
    setCurrentPage(0);
    setSelectedIds([]);
  };

  const handleToggleAll = (checked: boolean) => {
    setSelectedIds(checked ? currentPageContentIds : []);
  };

  const handleToggleOne = (id: number, checked: boolean) => {
    setSelectedIds((prev) => (checked ? [...prev, id] : prev.filter((v) => v !== id)));
  };

  if (isLoading) return <Loading />;

  return (
    <S.DailyContainer>
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
            name='startDate'
            control={control}
            render={({ field: startField }) => (
              <Controller
                name='endDate'
                control={control}
                render={({ field: endField }) => (
                  <SelectDateRange
                    selectedStartDate={startField.value}
                    selectedEndDate={endField.value}
                    onStartDateChange={startField.onChange}
                    onEndDateChange={endField.onChange}
                  />
                )}
              />
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
            type='submit'
            size='sm'
            color='primary'
            label='검색하기'
            interactionVariant='normal'
          />
        </S.FilterHeader>

        <Table
          checked={isAllSelected}
          onCheckToggle={handleToggleAll}
          headerItems={DAILY_TABLE_HEADER_ITEMS}
          isEmpty={contents.length === 0}
          emptyState={<EmptyState icon={<ScriptX />} />}
        >
          <S.RowWrapper>
            {contents.map((d) => (
              <DailyListCard
                key={d.assignedQuestionId}
                daily={d}
                checked={selectedIds.includes(d.assignedQuestionId)}
                onCheckToggle={(ck) => handleToggleOne(d.assignedQuestionId, ck)}
              />
            ))}
          </S.RowWrapper>
        </Table>
      </ScrollXWrapper>

      <S.PaginationWrapper>
        <NumberPagination
          size='nm'
          currentPage={currentPage + 1}
          totalPages={totalPages}
          onPageChange={(uiPage) => {
            setCurrentPage(uiPage - 1);
            setSelectedIds([]);
          }}
        />
      </S.PaginationWrapper>
    </S.DailyContainer>
  );
}
