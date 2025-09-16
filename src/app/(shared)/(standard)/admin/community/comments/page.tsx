'use client';

import { useEffect, useMemo, useState } from 'react';

import ScriptX from '@/assets/icons/script-x.svg';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import Table from '@/components/organisms/Table/Table';
import {
  ADMIN_COMMENTS_TABLE_HEADER_ITEMS,
  ADMIN_POSTS_TABLE_HEADER_ITEMS,
  POST_CATEGORY_SELECT_OPTIONS,
} from '@/constants/common';
import useGetPostList from '@/hooks/api/admin/useGetAdminPostList';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';

import * as S from './page.styled';
import CommunityListRow from '../_components/CommunityListRow/CommunityListRow';
import useGetAdminCommentList from '@/hooks/api/admin/useGetAdminCommentList';

export default function AdminComments() {
  const { updateSearchParams, getSearchParam, getSearchParamAsArray } = useUrlSearchParams();

  const urlPageNum = Number(getSearchParam('page') ?? 1);
  const [currentPage, setCurrentPage] = useState(Math.max(0, urlPageNum - 1));

  const categoryId = useMemo(
    () => getSearchParamAsArray('category').map(Number).filter(Boolean),
    [getSearchParamAsArray],
  );
  const content = getSearchParam('content') ?? '';
  const nickname = getSearchParam('nickname') ?? '';
  const startDate = getSearchParam('startDate') ?? undefined;
  const endDate = getSearchParam('endDate') ?? undefined;

  const { data, isLoading } = useGetAdminCommentList({
    page: currentPage,
    categoryId,
    content,
    nickname,
    startDate,
    endDate,
  });

  const comments = useMemo(() => data?.data ?? [], [data]);
  const totalPages = data?.totalPages ?? 1;
  const totalCount = data?.totalElements ?? 0;

  useEffect(() => {
    const next = Math.max(0, Number(getSearchParam('page') ?? 1) - 1);
    setCurrentPage(next);
  }, [getSearchParam]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateSearchParams({ page: page + 1 });
  };

  if (isLoading) return <Loading />;

  return (
    <S.AdminComments>
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
        actions={[{ type: 'submit', label: '검색하기' }]}
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

      <S.PaginationWrapper>
        <NumberPagination
          size='nm'
          currentPage={currentPage + 1}
          totalPages={totalPages}
          onPageChange={(uiPage) => handlePageChange(uiPage - 1)}
        />
      </S.PaginationWrapper>
    </S.AdminComments>
  );
}
