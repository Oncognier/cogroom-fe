'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState, useCallback } from 'react';

import SortButton from '@/app/(shared)/(standard)/mypage/_components/SortButton/SortButton';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import InfiniteScrollSentinel from '@/components/atoms/InfiniteScrollSentinel/InfiniteScrollSentinel';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import PostCard from '@/components/organisms/PostCard/PostCard';
import PostCardSkeleton from '@/components/organisms/PostCard/PostCardSkeleton/PostCardSkeleton';
import { POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useDeleteUserPost from '@/hooks/api/member/useDeleteUserPosts';
import useGetUserPost from '@/hooks/api/member/useGetUserPost';
import { useCategoryParam } from '@/hooks/queryParams/useCategoryParam';
import { useDateRangeParams } from '@/hooks/queryParams/useDateRangeParams';
import { useKeywordParam } from '@/hooks/queryParams/useKeywordParam';
import { useSortParam } from '@/hooks/queryParams/useSortParam';
import useScroll from '@/hooks/useScroll';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './page.styled';

export default function Posts() {
  const router = useRouter();
  const { open } = useAlertModalStore();

  const [categoryId] = useCategoryParam();
  const [keyword] = useKeywordParam();
  const [{ startDate, endDate }] = useDateRangeParams();
  const [sort, setSort] = useSortParam('latest');

  const [isEdit, setIsEdit] = useState(false);
  const [selectedPostIds, setSelectedPostIds] = useState<number[]>([]);
  const { mutate: deleteUserPost } = useDeleteUserPost(selectedPostIds);

  const isUnknown = useAuthStore((s) => s.isUnknown());
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetUserPost({
    sort,
    categoryId,
    keyword,
    startDate,
    endDate,
  });

  const total = data?.pages?.[0]?.totalElements ?? 0;
  const posts = useMemo(() => (data?.pages ?? []).flatMap((p) => p.data ?? []), [data]);

  const { observerRef } = useScroll({
    nextPage: !!hasNextPage,
    fetchNext: fetchNextPage,
  });

  const handleSortChange = () => {
    setSort(sort === 'latest' ? 'oldest' : 'latest');
    setSelectedPostIds([]);
  };

  const handleTogglePostSelection = useCallback((postId: number, checked: boolean) => {
    setSelectedPostIds((prev) => (checked ? [...prev, postId] : prev.filter((id) => id !== postId)));
  }, []);

  const loadedIds = useMemo(() => posts.map((p) => p.postId), [posts]);
  const allSelected = loadedIds.length > 0 && loadedIds.every((id) => selectedPostIds.includes(id));
  const handleSelectAll = () => setSelectedPostIds(allSelected ? [] : loadedIds);

  const handleDeletePosts = () => {
    if (selectedPostIds.length === 0) {
      open('alert', { message: '삭제할 항목을 선택해주세요' });
      return;
    }
    deleteUserPost();
  };

  const handleGoToCommunity = () => router.push('/community');

  const renderHeader = () => (
    <S.FilterHeader>
      <SearchFilter
        totalTitle='전체 글'
        total={isLoading ? 0 : total}
        fields={{
          dateRange: { startDateName: 'startDate', endDateName: 'endDate' },
          select: [
            {
              name: 'category',
              placeholder: '카테고리 선택',
              options: POST_CATEGORY_SELECT_OPTIONS,
              isMulti: true,
            },
          ],
          search: [{ name: 'keyword', placeholder: '글 제목 입력' }],
        }}
        action={{ label: '검색하기' }}
      />

      <S.ListControlsWrapper>
        {!isLoading && posts.length > 0 && (
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
                {allSelected ? (
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
  );

  const renderContent = () => {
    if (isLoading || isUnknown) {
      return (
        <S.PostList>
          {Array.from({ length: 3 }).map((_, index) => (
            <PostCardSkeleton
              key={index}
              isEdit={isEdit}
            />
          ))}
        </S.PostList>
      );
    }

    if (posts.length === 0) {
      return (
        <EmptyState
          icon={<MessageCircleX />}
          description='코그니어 커뮤니티에 첫 글을 써 보세요!'
          buttonLabel='커뮤니티 바로가기'
          buttonAction={handleGoToCommunity}
        />
      );
    }

    return (
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
    );
  };

  return (
    <S.UserPost>
      {renderHeader()}
      {renderContent()}
    </S.UserPost>
  );
}
