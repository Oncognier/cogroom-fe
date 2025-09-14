'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import ScrollXWrapper from '@/app/(shared)/(standard)/admin/_components/ScrollXWrapper/ScrollXWrapper';
import ChevronDown from '@/assets/icons/chevrondown.svg';
import ScriptX from '@/assets/icons/script-x.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import Table from '@/components/organisms/Table/Table';
import { CATEGORY_SELECT_OPTIONS, CONTENTS_TABLE_HEADER_ITEMS, LEVEL_SELECT_OPTIONS } from '@/constants/common';
import useGetDailyQuestions from '@/hooks/api/admin/useGetDailyQuestions';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';

import DailyListRow from './_components/DailyListRow/DailyListRow';
import * as S from './page.styled';

export default function Contents() {
  const router = useRouter();
  const { updateSearchParams, getSearchParam, getSearchParamAsArray } = useUrlSearchParams();

  const [currentPage, setCurrentPage] = useState(Number(getSearchParam('page') ?? 0));
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const { data, isLoading } = useGetDailyQuestions({
    page: currentPage,
    category: getSearchParamAsArray('category').map(Number).filter(Boolean),
    level: getSearchParamAsArray('level'),
    keyword: getSearchParam('keyword') ?? '',
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
    updateSearchParams({ page: page + 1 });
  };

  const urlPageNum = Number(getSearchParam('page') ?? 0);

  useEffect(() => {
    if (urlPageNum > 0) {
      setCurrentPage(urlPageNum - 1);
    }
  }, [urlPageNum]);

  if (isLoading) return <Loading />;

  return (
    <S.ContentsContainer>
      <ScrollXWrapper>
        <S.FilterHeader>
          <S.PageSwitcher>
            <S.PageTitle>데일리 콘텐츠</S.PageTitle>
            <IconButton
              size='4rem'
              variant='normal'
              interactionVariant='normal'
            >
              <ChevronDown />
            </IconButton>
          </S.PageSwitcher>
          <SearchFilter
            fields={{
              select: [
                {
                  name: 'category',
                  placeholder: '카테고리 선택',
                  options: CATEGORY_SELECT_OPTIONS,
                  isMulti: true,
                },
                {
                  name: 'level',
                  placeholder: '난이도 선택',
                  options: LEVEL_SELECT_OPTIONS,
                  isMulti: true,
                },
              ],
              search: { placeholder: '키워드 검색' },
            }}
            actions={[
              { type: 'submit', label: '검색하기' },
              {
                type: 'button',
                label: '추가하기',
                variant: 'solid',
                onClick: () => router.push('/admin/contents/create/daily'),
              },
            ]}
          />
        </S.FilterHeader>

        <Table
          checked={isAllSelected}
          onCheckToggle={handleToggleAll}
          headerItems={CONTENTS_TABLE_HEADER_ITEMS}
          isEmpty={contents.length === 0}
          emptyState={<EmptyState icon={<ScriptX />} />}
        >
          {contents.map((daily) => (
            <DailyListRow
              key={daily.questionId}
              daily={daily}
              checked={selectedIds.includes(daily.questionId)}
              onCheckToggle={(checked) => handleToggleOne(daily.questionId, checked)}
            />
          ))}
        </Table>
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
