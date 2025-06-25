'use client';

import { useMemo, useState } from 'react';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Search from '@/components/atoms/Search/Search';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import { useDeleteMemberMutation } from '@/hooks/api/admin/useDeleteMember';
import useGetMemberList from '@/hooks/api/admin/useGetMemberList';

import UserListRow from './_components/UserListRow/UserListRow';
import UserTableHeader from './_components/UserTableHeader/UserTableHeader';
import * as S from './page.styled';

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputKeyword, setInputKeyword] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const { data, isLoading } = useGetMemberList({ page: currentPage, keyword: searchKeyword });
  const { deleteMember } = useDeleteMemberMutation();

  const members = useMemo(() => data?.data ?? [], [data]);
  const totalPages = data?.totalPages ?? 1;
  const totalCount = data?.totalElements ?? 0;

  const currentPageMemberIds = useMemo(() => members.map((m) => m.memberId), [members]);
  const isAllSelected = currentPageMemberIds.length > 0 && currentPageMemberIds.every((id) => selectedIds.includes(id));

  const handleToggleAll = (checked: boolean) => {
    setSelectedIds(checked ? currentPageMemberIds : []);
  };

  const handleToggleOne = (memberId: number, checked: boolean) => {
    setSelectedIds((prev) => (checked ? [...prev, memberId] : prev.filter((id) => id !== memberId)));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedIds([]);
  };

  const handleSearch = () => {
    setSearchKeyword(inputKeyword);
    setCurrentPage(1);
    setSelectedIds([]);
  };

  return (
    <S.UsersContainer>
      <S.FilterHeader>
        <S.TotalMemberCount>전체 회원 ({totalCount.toLocaleString()})</S.TotalMemberCount>

        <S.SearchWrapper>
          <Search
            inputSize='sm'
            placeholder='회원정보 검색'
            interactionVariant='normal'
            value={inputKeyword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputKeyword(e.target.value)}
          />
        </S.SearchWrapper>
        <OutlinedButton
          size='sm'
          color='primary'
          label='검색하기'
          interactionVariant='normal'
          onClick={handleSearch}
        />
      </S.FilterHeader>

      <S.TableWrapper>
        {selectedIds.length > 0 && (
          <OutlinedButton
            size='sm'
            color='primary'
            label='선택항목 삭제'
            interactionVariant='normal'
            onClick={() => deleteMember({ memberIdList: selectedIds })}
          />
        )}

        <S.UserTable>
          <UserTableHeader
            checked={isAllSelected}
            onCheckToggle={handleToggleAll}
          />

          {isLoading ? (
            <div>로딩 중...</div>
          ) : (
            members.map((member) => (
              <UserListRow
                key={member.memberId}
                member={member}
                checked={selectedIds.includes(member.memberId)}
                onCheckToggle={(checked) => handleToggleOne(member.memberId, checked)}
              />
            ))
          )}
        </S.UserTable>
      </S.TableWrapper>

      <S.PaginationButton>
        <NumberPagination
          size='nm'
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </S.PaginationButton>
    </S.UsersContainer>
  );
}
