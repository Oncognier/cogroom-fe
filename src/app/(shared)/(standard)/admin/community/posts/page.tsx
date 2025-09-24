'use client';

import { useEffect, useMemo, useState } from 'react';

import ScriptX from '@/assets/icons/script-x.svg';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import Table from '@/components/organisms/Table/Table';
import { ADMIN_POSTS_TABLE_HEADER_ITEMS, POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useGetPostList from '@/hooks/api/admin/useGetAdminPostList';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';

import * as S from './page.styled';
import ScrollXWrapper from '../../_components/ScrollXWrapper/ScrollXWrapper';
import CommunityListRow from '../_components/CommunityListRow/CommunityListRow';

export default function AdminPosts() {
  const { updateSearchParams, getSearchParam, getSearchParamAsArray } = useUrlSearchParams();

  const urlPageNum = Number(getSearchParam('page') ?? 1);
  const [currentPage, setCurrentPage] = useState(Math.max(0, urlPageNum - 1));

  const categoryId = useMemo(
    () => getSearchParamAsArray('category').map(Number).filter(Boolean),
    [getSearchParamAsArray],
  );
  const title = getSearchParam('title') ?? '';
  const nickname = getSearchParam('nickname') ?? '';
  const startDate = getSearchParam('startDate') ?? undefined;
  const endDate = getSearchParam('endDate') ?? undefined;

  const { data, isLoading } = useGetPostList({
    page: currentPage,
    categoryId,
    title,
    nickname,
    startDate,
    endDate,
  });

  const posts = useMemo(() => data?.data ?? [], [data]);
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
    <S.Posts>
      <ScrollXWrapper>
        <SearchFilter
          totalTitle='전체 글'
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
              { name: 'title', placeholder: '글 제목 입력' },
            ],
          }}
          actions={[{ type: 'submit', label: '검색하기' }]}
        />

        <Table
          showSelection={false}
          onCheckToggle={() => {}}
          headerItems={ADMIN_POSTS_TABLE_HEADER_ITEMS}
          isEmpty={posts.length === 0}
          emptyState={<EmptyState icon={<ScriptX />} />}
        >
          {posts.map((post) => (
            <CommunityListRow
              key={post.postId}
              type='post'
              post={post}
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
    </S.Posts>
  );
}
