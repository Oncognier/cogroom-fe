'use client';

import { useEffect, useMemo, useState } from 'react';

import ScrollXWrapper from '@/app/(shared)/(standard)/admin/_components/ScrollXWrapper/ScrollXWrapper';
import ScriptX from '@/assets/icons/script-x.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import SearchFilter, { FilterValues } from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import Table from '@/components/organisms/Table/Table';
import { USER_TABLE_HEADER_ITEMS } from '@/constants/common';
import { useDeleteMemberMutation } from '@/hooks/api/admin/useDeleteMember';
import useGetMemberList from '@/hooks/api/admin/useGetMemberList';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';
import { formatDayAsDashYYYYMMDD } from '@/utils/date/formatDay';

import UserListRow from './_components/UserListRow/UserListRow';
import * as S from './page.styled';

export default function Users() {
  const { updateSearchParams, getSearchParam } = useUrlSearchParams();

  const [currentPage, setCurrentPage] = useState(Number(getSearchParam('page') ?? 0));
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [filterValues, setFilterValues] = useState<FilterValues>({
    keyword: '',
    startDate: null,
    endDate: null,
  });

  const { data, isLoading } = useGetMemberList({
    page: currentPage,
    keyword: (filterValues.keyword as string) ?? '',
    startDate: formatDayAsDashYYYYMMDD(filterValues.startDate as Date | null),
    endDate: formatDayAsDashYYYYMMDD(filterValues.endDate as Date | null),
  });

  const { deleteMember } = useDeleteMemberMutation();

  const members = useMemo(() => data?.data ?? [], [data]);
  const totalPages = data?.totalPages ?? 1;
  const totalCount = data?.totalElements ?? 0;

  const currentPageMemberIds = useMemo(() => members.map((m) => m.memberId), [members]);
  const isAllSelected = currentPageMemberIds.length > 0 && currentPageMemberIds.every((id) => selectedIds.includes(id));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedIds([]);
    updateSearchParams({ page: page + 1 });
  };

  const handleToggleAll = (checked: boolean) => {
    setSelectedIds(checked ? currentPageMemberIds : []);
  };

  const handleToggleOne = (id: number, checked: boolean) => {
    setSelectedIds((prev) => (checked ? [...prev, id] : prev.filter((v) => v !== id)));
  };

  const handleFilter = (values: FilterValues) => {
    setFilterValues(values);
    setSelectedIds([]);

    const currentPageParam = Number(getSearchParam('page') ?? currentPage + 1);
    updateSearchParams({
      ...values,
      page: currentPageParam,
    });
  };

  const urlPageNum = Number(getSearchParam('page') ?? 0);

  useEffect(() => {
    if (urlPageNum > 0) {
      setCurrentPage(urlPageNum - 1);
    }
  }, [urlPageNum]);

  if (isLoading) return <Loading />;

  return (
    <S.UsersContainer>
      <ScrollXWrapper>
        <SearchFilter
          title={`전체 회원 (${totalCount.toLocaleString()})`}
          fields={{
            dateRange: {},
            search: { placeholder: '회원정보 검색' },
          }}
          actions={[{ type: 'submit', label: '검색하기' }]}
          onSubmit={handleFilter}
          initialValues={filterValues}
          enableUrlSync={true}
        />

        <S.TableWrapper>
          {selectedIds.length > 0 && (
            <OutlinedButton
              size='sm'
              color='destructive'
              label='선택항목 삭제'
              interactionVariant='normal'
              onClick={() => deleteMember({ memberIdList: selectedIds })}
            />
          )}

          <Table
            checked={isAllSelected}
            onCheckToggle={handleToggleAll}
            headerItems={USER_TABLE_HEADER_ITEMS}
            isEmpty={members.length === 0}
            emptyState={<EmptyState icon={<ScriptX />} />}
          >
            {members.map((member) => (
              <UserListRow
                key={member.memberId}
                member={member}
                checked={selectedIds.includes(member.memberId)}
                onCheckToggle={(ck) => handleToggleOne(member.memberId, ck)}
              />
            ))}
          </Table>
        </S.TableWrapper>
      </ScrollXWrapper>

      <S.PaginationButton>
        <NumberPagination
          size='nm'
          currentPage={currentPage + 1}
          totalPages={totalPages}
          onPageChange={(uiPage) => handlePageChange(uiPage - 1)}
        />
      </S.PaginationButton>
    </S.UsersContainer>
  );
}
