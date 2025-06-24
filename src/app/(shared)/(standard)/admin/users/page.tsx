'use client';

import { useState } from 'react';

import Search from '@/components/atoms/Search/Search';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import useGetMemberList from '@/hooks/api/admin/useGetMemberList';
import { Member } from '@/types/admin';

import UserListRow from './_components/UserListRow/UserListRow';
import UserTableHeader from './_components/UserTableHeader/UserTableHeader';
import * as S from './page.styled';

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const { data } = useGetMemberList({ page: currentPage });

  const members: Member[] = data?.data ?? [];
  const totalPages = data?.totalPages ?? 1;

  const isAllSelected = members.length > 0 && members.every((m) => selectedIds.includes(m.memberId));

  const handleToggleAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(members.map((m) => m.memberId));
    } else {
      setSelectedIds([]);
    }
  };

  const handleToggleOne = (memberId: number, checked: boolean) => {
    setSelectedIds((prev) => (checked ? [...prev, memberId] : prev.filter((id) => id !== memberId)));
  };

  return (
    <S.UsersContainer>
      <S.FilterHeader>
        <S.TotalMemberCount>전체 회원 ({data?.totalElements.toLocaleString() ?? 0})</S.TotalMemberCount>
        <S.Filter>
          <Search
            inputSize='nm'
            placeholder='회원정보 검색'
            interactionVariant='normal'
          />
        </S.Filter>
      </S.FilterHeader>

      <S.UserTable>
        <UserTableHeader
          checked={isAllSelected}
          onCheckToggle={handleToggleAll}
        />

        {members.map((member) => (
          <UserListRow
            key={member.memberId}
            name={member.nickname}
            email={member.email}
            role={member.memberRole}
            joinedAt={member.createdAt}
            checked={selectedIds.includes(member.memberId)}
            onCheckToggle={(checked) => handleToggleOne(member.memberId, checked)}
          />
        ))}
      </S.UserTable>

      <S.PaginationButton>
        <NumberPagination
          size='nm'
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            setSelectedIds([]);
          }}
        />
      </S.PaginationButton>
    </S.UsersContainer>
  );
}
