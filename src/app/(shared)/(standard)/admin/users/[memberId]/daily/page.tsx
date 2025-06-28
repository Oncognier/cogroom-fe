'use client';

import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Search from '@/components/atoms/Search/Search';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import useGetMemberDailyQuestions from '@/hooks/api/admin/useGetMemberDailyQuestions';

export default function MemberDaily() {
  const params = useParams();
  const memberId = Number(params?.memberId);

  const [currentPage, setCurrentPage] = useState(0);
  const [inputKeyword, setInputKeyword] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filterCategories, setFilterCategories] = useState<string[]>([]);

  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [filterLevels, setFilterLevels] = useState<string[]>([]);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const { data, isLoading } = useGetMemberDailyQuestions({
    memberId,
    params: {
      page: currentPage,
      keyword: searchKeyword,
      categories: filterCategories,
      levels: filterLevels,
    },
  });

  const contents = useMemo(() => data?.data ?? [], [data]);
  const totalPages = data?.totalPages ?? 1;
  const totalCount = data?.totalElements ?? 0;

  const currentPageContentIds = useMemo(() => contents.map((c) => c.assignedQuestionId), [contents]);
  const isAllSelected =
    currentPageContentIds.length > 0 && currentPageContentIds.every((id) => selectedIds.includes(id));

  const handleToggleAll = (checked: boolean) => {
    setSelectedIds(checked ? currentPageContentIds : []);
  };

  const handleToggleOne = (id: number, checked: boolean) => {
    setSelectedIds((prev) => (checked ? [...prev, id] : prev.filter((v) => v !== id)));
  };

  const handleSearch = () => {
    setSearchKeyword(inputKeyword);
    setFilterCategories(selectedCategories);
    setFilterLevels(selectedLevels);
    setCurrentPage(0);
    setSelectedIds([]);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedIds([]);
  };

  return (
    <S.DailyContainer>
      <S.FilterHeader>
        <S.Title>회원별 데일리 콘텐츠</S.Title>

        <S.FilterRow>
          <MultiSelect
            size='sm'
            placeholder='카테고리 선택'
            options={CATEGORY_OPTIONS}
            selectedValues={selectedCategories}
            onChange={setSelectedCategories}
          />
          <MultiSelect
            size='sm'
            placeholder='난이도 선택'
            options={LEVEL_OPTIONS}
            selectedValues={selectedLevels}
            onChange={setSelectedLevels}
          />
          <Search
            inputSize='sm'
            placeholder='키워드 검색'
            interactionVariant='normal'
            value={inputKeyword}
            onChange={(e) => setInputKeyword(e.target.value)}
          />
          <OutlinedButton
            size='sm'
            color='primary'
            label='검색하기'
            interactionVariant='normal'
            onClick={handleSearch}
          />
        </S.FilterRow>
      </S.FilterHeader>

      <S.TableWrapper>
        <S.TotalCount>총 {totalCount.toLocaleString()}개</S.TotalCount>

        <S.Table>
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
        </S.Table>
      </S.TableWrapper>

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
