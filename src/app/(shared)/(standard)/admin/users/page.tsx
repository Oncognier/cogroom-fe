'use client';

import { useMemo, useState } from 'react';

import ScrollXWrapper from '@/app/(shared)/(standard)/admin/_components/ScrollXWrapper/ScrollXWrapper';
import ScriptX from '@/assets/icons/script-x.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Search from '@/components/atoms/Search/Search';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import SelectDate from '@/components/molecules/SelectDate/SelectDate';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import { useDeleteMemberMutation } from '@/hooks/api/admin/useDeleteMember';
import useGetMemberList from '@/hooks/api/admin/useGetMemberList';
import { formatDayAsDashYYYYMMDD } from '@/utils/date/formatDay';

import UserListRow from './_components/UserListRow/UserListRow';
import UserTableHeader from './_components/UserTableHeader/UserTableHeader';
import * as S from './page.styled';

export default function Users() {
  const [currentPage, setCurrentPage] = useState(0);

  const [draftKeyword, setDraftKeyword] = useState('');
  const [draftStartDate, setDraftStartDate] = useState<Date | null>(null);
  const [draftEndDate, setDraftEndDate] = useState<Date | null>(null);

  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { data, isLoading } = useGetMemberList({
    page: currentPage,
    keyword,
    startDate: formatDayAsDashYYYYMMDD(startDate),
    endDate: formatDayAsDashYYYYMMDD(endDate),
  });

  const { deleteMember } = useDeleteMemberMutation();

  const members = useMemo(() => data?.data ?? [], [data]);
  const totalPages = data?.totalPages ?? 1;
  const totalCount = data?.totalElements ?? 0;

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const currentPageMemberIds = useMemo(() => members.map((m) => m.memberId), [members]);
  const isAllSelected = currentPageMemberIds.length > 0 && currentPageMemberIds.every((id) => selectedIds.includes(id));

  const handleSearch = () => {
    setKeyword(draftKeyword);
    setStartDate(draftStartDate);
    setEndDate(draftEndDate);
    setCurrentPage(0);
    setSelectedIds([]);
  };

  return (
    <S.UsersContainer>
      <ScrollXWrapper>
        <S.FilterHeader>
          <S.TotalMemberCount>전체 회원 ({totalCount.toLocaleString()})</S.TotalMemberCount>

          <SelectDate
            selectedStartDate={draftStartDate}
            selectedEndDate={draftEndDate}
            onStartDateChange={setDraftStartDate}
            onEndDateChange={setDraftEndDate}
          />

          <S.SearchWrapper>
            <Search
              inputSize='sm'
              placeholder='회원정보 검색'
              interactionVariant='normal'
              value={draftKeyword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDraftKeyword(e.target.value)}
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
              color='destructive'
              label='선택항목 삭제'
              interactionVariant='normal'
              onClick={() => deleteMember({ memberIdList: selectedIds })}
            />
          )}

          <S.UserTable>
            <UserTableHeader
              checked={isAllSelected}
              onCheckToggle={(checked) => setSelectedIds(checked ? currentPageMemberIds : [])}
            />

            {isLoading ? (
              <Loading />
            ) : members.length === 0 ? (
              <EmptyState icon={<ScriptX />} />
            ) : (
              members.map((member) => (
                <UserListRow
                  key={member.memberId}
                  member={member}
                  checked={selectedIds.includes(member.memberId)}
                  onCheckToggle={(ck) =>
                    setSelectedIds((prev) =>
                      ck ? [...prev, member.memberId] : prev.filter((id) => id !== member.memberId),
                    )
                  }
                />
              ))
            )}
          </S.UserTable>
        </S.TableWrapper>
      </ScrollXWrapper>

      <S.PaginationButton>
        <NumberPagination
          size='nm'
          currentPage={currentPage + 1}
          totalPages={totalPages}
          onPageChange={(uiPage) => {
            setCurrentPage(uiPage - 1);
            setSelectedIds([]);
          }}
        />
      </S.PaginationButton>
    </S.UsersContainer>
  );
}
