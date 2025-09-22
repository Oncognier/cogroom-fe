'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import SortButton from '@/app/(shared)/(standard)/mypage/_components/SortButton/SortButton';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import InfiniteScrollSentinel from '@/components/atoms/InfiniteScrollSentinel/InfiniteScrollSentinel';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import PostCard from '@/components/organisms/PostCard/PostCard';
import { POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useGetUserSave from '@/hooks/api/member/useGetUserSave';
import useScroll from '@/hooks/useScroll';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';
import { SortType } from '@/types/member';
import { formatDayAsDashYYYYMMDD } from '@/utils/date/formatDay';

import * as S from './page.styled';

export default function Saves() {
  const router = useRouter();
  const { updateSearchParams, getSearchParam, getSearchParamAsDate, getSearchParamAsArray } = useUrlSearchParams();

  const [sort, setSort] = useState<SortType>('latest');

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetUserSave({
    sort,
    categoryId: getSearchParamAsArray('categoryId').map(Number) || undefined,
    keyword: getSearchParam('keyword') || undefined,
    startDate: formatDayAsDashYYYYMMDD(getSearchParamAsDate('startDate')) || undefined,
    endDate: formatDayAsDashYYYYMMDD(getSearchParamAsDate('endDate')) || undefined,
  });

  const total = data?.pages[0].totalElements;

  const posts = useMemo(() => (data?.pages ?? []).flatMap((p) => p.data ?? []), [data]);

  const { observerRef } = useScroll({
    nextPage: !!hasNextPage,
    fetchNext: fetchNextPage,
  });

  const handleSortChange = () => {
    const newSort = sort === 'latest' ? 'oldest' : 'latest';
    setSort(newSort);
    updateSearchParams({ sort: newSort });
  };

  const handleGoToCommunity = () => {
    router.push('/community');
  };

  if (isLoading) return <Loading />;

  return (
    <S.UserSave>
      <S.FilterHeader>
        <SearchFilter
          totalTitle='전체 글'
          total={total}
          fields={{
            dateRange: { startDateName: 'startDate', endDateName: 'endDate' },
            select: [
              {
                name: 'categoryId',
                placeholder: '카테고리 선택',
                options: POST_CATEGORY_SELECT_OPTIONS,
                isMulti: true,
              },
            ],
            search: [{ name: 'keyword', placeholder: '글 제목 입력' }],
          }}
          actions={[{ type: 'submit', label: '검색하기' }]}
        />

        <S.SortButtonWrapper>
          <SortButton
            sort={sort}
            onClick={handleSortChange}
          />
        </S.SortButtonWrapper>
      </S.FilterHeader>

      {posts.length === 0 ? (
        <EmptyState
          icon={<MessageCircleX />}
          description='꼭 마음에 담아두고 싶던 글이 있나요?'
          buttonLabel='글 보러가기'
          buttonAction={handleGoToCommunity}
        />
      ) : (
        <>
          <S.SaveList>
            {posts.map((post) => (
              <PostCard
                key={post.postId}
                post={post}
              />
            ))}
          </S.SaveList>

          <InfiniteScrollSentinel
            observerRef={observerRef}
            hasNextPage={!!hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </>
      )}
    </S.UserSave>
  );
}
