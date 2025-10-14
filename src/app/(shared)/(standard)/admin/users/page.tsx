'use client';

import { useMemo, useState, useCallback } from 'react';

import ScrollXWrapper from '@/app/(shared)/(standard)/admin/_components/ScrollXWrapper/ScrollXWrapper';
import ScriptX from '@/assets/icons/script-x.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import Table from '@/components/organisms/Table/Table';
import { USER_TABLE_HEADER_ITEMS } from '@/constants/common';
import { useDeleteMemberMutation } from '@/hooks/api/admin/useDeleteMember';
import useGetMemberList from '@/hooks/api/admin/useGetMemberList';
import { useDateRangeParams } from '@/hooks/queryParams/useDateRangeParams';
import { useKeywordParam } from '@/hooks/queryParams/useKeywordParam';
import { usePageParam } from '@/hooks/queryParams/usePageParam';

import UserListRow from './_components/UserListRow/UserListRow';
import * as S from './page.styled';

export default function Users() {
  const [page, setPage] = usePageParam(0);
  const [keyword] = useKeywordParam();
  const [{ startDate, endDate }] = useDateRangeParams();

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const { data, isLoading } = useGetMemberList({
    page,
    keyword,
    startDate,
    endDate,
  });

  const { deleteMember } = useDeleteMemberMutation();

  const members = useMemo(() => data?.data ?? [], [data]);
  const totalPages = data?.totalPages ?? 1;
  const totalCount = data?.totalElements ?? 0;

  const currentPageMemberIds = useMemo(() => members.map((m) => m.memberId), [members]);
  const isAllSelected = currentPageMemberIds.length > 0 && currentPageMemberIds.every((id) => selectedIds.includes(id));

  const handlePageChange = (uiPageOneBased: number) => {
    setPage(uiPageOneBased - 1);
    setSelectedIds([]);
  };

  const handleToggleAll = (checked: boolean) => {
    setSelectedIds(checked ? currentPageMemberIds : []);
  };

  const handleToggleOne = useCallback((id: number, checked: boolean) => {
    setSelectedIds((prev) => (checked ? [...prev, id] : prev.filter((v) => v !== id)));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <S.UsersContainer>
      <ScrollXWrapper>
        <SearchFilter
          totalTitle='전체 회원'
          total={totalCount}
          fields={{
            dateRange: {},
            search: [{ name: 'keyword', placeholder: '회원정보 검색' }],
          }}
          action={{ label: '검색하기' }}
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
          currentPage={page + 1}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </S.PaginationButton>
    </S.UsersContainer>
  );
}
