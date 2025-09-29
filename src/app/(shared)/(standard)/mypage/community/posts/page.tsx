'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import SortButton from '@/app/(shared)/(standard)/mypage/_components/SortButton/SortButton';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import InfiniteScrollSentinel from '@/components/atoms/InfiniteScrollSentinel/InfiniteScrollSentinel';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import PostCard from '@/components/organisms/PostCard/PostCard';
import { POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useDeleteUserPost from '@/hooks/api/member/useDeleteUserPosts';
import useGetUserPost from '@/hooks/api/member/useGetUserPost';
import useScroll from '@/hooks/useScroll';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';
import { useAlertModalStore } from '@/stores/useModalStore';
import { SortType } from '@/types/member';

import * as S from './page.styled';

export default function Posts() {
  const router = useRouter();
  const { updateSearchParams, getSearchParam, getSearchParamAsDate, getSearchParamAsArray } = useUrlSearchParams();
  const { open } = useAlertModalStore();

  const [sort, setSort] = useState<SortType>('latest');
  const [isEdit, setIsEdit] = useState(false);
  const [selectedPostIds, setSelectedPostIds] = useState<number[]>([]);
  const { mutate: deleteUserPost } = useDeleteUserPost(selectedPostIds);

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetUserPost({
    sort,
    categoryId: getSearchParamAsArray('categoryId').map(Number) || undefined,
    keyword: getSearchParam('keyword') ?? '',
    startDate: getSearchParamAsDate('startDate') ?? undefined,
    endDate: getSearchParamAsDate('endDate') ?? undefined,
  });

  const total = data?.pages?.[0]?.totalElements;

  const posts = useMemo(() => (data?.pages ?? []).flatMap((p) => p.data ?? []), [data]);

  const { observerRef } = useScroll({
    nextPage: !!hasNextPage,
    fetchNext: fetchNextPage,
  });

  const handleSortChange = () => {
    const next = sort === 'latest' ? 'oldest' : 'latest';
    setSort(next);
    updateSearchParams({ sort: next });
    setSelectedPostIds([]);
  };

  const handleTogglePostSelection = (postId: number, checked: boolean) => {
    setSelectedPostIds((prev) => (checked ? [...prev, postId] : prev.filter((id) => id !== postId)));
  };

  const handleSelectAll = () => {
    const loadedIds = posts.map((p) => p.postId);
    const allSelected = loadedIds.length > 0 && loadedIds.every((id: number) => selectedPostIds.includes(id));
    setSelectedPostIds(allSelected ? [] : loadedIds);
  };

  const handleDeletePosts = () => {
    if (selectedPostIds.length === 0) {
      open('alert', { message: '삭제할 항목을 선택해주세요' });
      return;
    }
    deleteUserPost();
  };

  const handleGoToCommunity = () => router.push('/community');

  if (isLoading) return <Loading />;

  return (
    <S.UserPost>
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

        <S.ListControlsWrapper>
          {posts.length > 0 && (
            <>
              {!isEdit ? (
                <OutlinedButton
                  label='선택'
                  onClick={() => {
                    setIsEdit(true);
                    setSelectedPostIds([]);
                  }}
                  color='primary'
                  size='sm'
                  interactionVariant='normal'
                />
              ) : (
                <S.ListSelectButtonWrapper>
                  {posts.length > 0 && posts.every((p) => selectedPostIds.includes(p.postId)) ? (
                    <SolidButton
                      label='전체 취소'
                      onClick={handleSelectAll}
                      color='primary'
                      size='sm'
                      interactionVariant='normal'
                    />
                  ) : (
                    <SolidButton
                      type='button'
                      label='전체 선택'
                      onClick={handleSelectAll}
                      color='primary'
                      size='sm'
                      interactionVariant='normal'
                    />
                  )}

                  <OutlinedButton
                    label='삭제'
                    onClick={handleDeletePosts}
                    color='destructive'
                    size='sm'
                    interactionVariant='normal'
                  />
                </S.ListSelectButtonWrapper>
              )}
            </>
          )}

          <SortButton
            sort={sort}
            onClick={handleSortChange}
          />
        </S.ListControlsWrapper>
      </S.FilterHeader>

      {posts.length === 0 ? (
        <EmptyState
          icon={<MessageCircleX />}
          description='코그니어 커뮤니티에 첫 글을 써 보세요!'
          buttonLabel='커뮤니티 바로가기'
          buttonAction={handleGoToCommunity}
        />
      ) : (
        <>
          <S.PostList>
            {posts.map((post) => (
              <PostCard
                key={post.postId}
                post={post}
                isEdit={isEdit}
                isSelected={selectedPostIds.includes(post.postId)}
                onToggleSelect={(checked) => handleTogglePostSelection(post.postId, checked)}
              />
            ))}
          </S.PostList>

          <InfiniteScrollSentinel
            observerRef={observerRef}
            hasNextPage={!!hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </>
      )}
    </S.UserPost>
  );
}
