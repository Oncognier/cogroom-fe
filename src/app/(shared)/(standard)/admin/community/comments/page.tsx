'use client';

import { useMemo, useCallback } from 'react';

import ScriptX from '@/assets/icons/script-x.svg';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import Table from '@/components/organisms/Table/Table';
import { ADMIN_COMMENTS_TABLE_HEADER_ITEMS, POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useGetAdminCommentList from '@/hooks/api/admin/useGetAdminCommentList';
import { useCategoryParam } from '@/hooks/queryParams/useCategoryParam';
import { useContentParam } from '@/hooks/queryParams/useContentParam';
import { useDateRangeParams } from '@/hooks/queryParams/useDateRangeParams';
import { useNicknameParam } from '@/hooks/queryParams/useNicknameParam';
import { usePageParam } from '@/hooks/queryParams/usePageParam';

import * as S from './page.styled';
import ScrollXWrapper from '../../_components/ScrollXWrapper/ScrollXWrapper';
import CommunityListRow from '../_components/CommunityListRow/CommunityListRow';

export default function AdminComments() {
  const [page, setPage] = usePageParam(0);
  const [categoryId] = useCategoryParam();
  const [content] = useContentParam();
  const [nickname] = useNicknameParam();
  const [{ startDate, endDate }] = useDateRangeParams();

  const { data, isLoading } = useGetAdminCommentList({
    page,
    categoryId,
    content,
    nickname,
    startDate,
    endDate,
  });

  const comments = useMemo(() => data?.data ?? [], [data]);
  const totalPages = data?.totalPages ?? 1;
  const totalCount = data?.totalElements ?? 0;

  const handlePageChange = useCallback((uiPageOneBased: number) => setPage(uiPageOneBased - 1), [setPage]);

  if (isLoading) return <Loading />;

  return (
    <S.AdminComments>
      <ScrollXWrapper>
        <SearchFilter
          totalTitle='전체 댓글'
          total={totalCount}
          fields={{
            select: [
              {
                name: 'category',
                placeholder: '카테고리 선택',
                options: POST_CATEGORY_SELECT_OPTIONS,
                isMulti: true,
              },
            ],
            dateRange: { startDateName: 'startDate', endDateName: 'endDate' },
            search: [
              { name: 'nickname', placeholder: '닉네임 검색' },
              { name: 'content', placeholder: '댓글 내용 입력' },
            ],
          }}
          action={{ label: '검색하기' }}
        />

        <Table
          showSelection={false}
          onCheckToggle={() => {}}
          headerItems={ADMIN_COMMENTS_TABLE_HEADER_ITEMS}
          isEmpty={comments.length === 0}
          emptyState={<EmptyState icon={<ScriptX />} />}
        >
          {comments.map((comment) => (
            <CommunityListRow
              key={comment.commentId}
              type='comment'
              comment={comment}
            />
          ))}
        </Table>
      </ScrollXWrapper>

      <S.PaginationWrapper>
        <NumberPagination
          size='nm'
          currentPage={page + 1}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </S.PaginationWrapper>
    </S.AdminComments>
  );
}
