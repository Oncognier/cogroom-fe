'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import SortButton from '@/app/(shared)/(standard)/mypage/_components/SortButton/SortButton';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import PostCard from '@/components/organisms/PostCard/PostCard';
import { POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useDeleteUserPost from '@/hooks/api/member/useDeleteUserPosts';
import useGetUserPost from '@/hooks/api/member/useGetUserPost';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';
import { useAlertModalStore } from '@/stores/useModalStore';
import { SortType } from '@/types/member';
import { formatDayAsDashYYYYMMDD } from '@/utils/date/formatDay';

import * as S from './page.styled';

export default function Posts() {
  const router = useRouter();
  const { updateSearchParams, getSearchParam, getSearchParamAsDate, getSearchParamAsArray } = useUrlSearchParams();
  const { open } = useAlertModalStore();

  const [sort, setSort] = useState<SortType>('latest');
  const [currentPage, setCurrentPage] = useState(Number(getSearchParam('page') ?? 0));
  const [isEdit, setIsEdit] = useState(false);
  const [selectedPostIds, setSelectedPostIds] = useState<number[]>([]);
  const { mutate: deleteUserPost } = useDeleteUserPost(selectedPostIds);

  const { data: userPostsData, isLoading } = useGetUserPost({
    page: currentPage,
    sort,
    categoryId: getSearchParamAsArray('categoryId').map(Number) || undefined,
    keyword: getSearchParam('keyword') ?? '',
    startDate: formatDayAsDashYYYYMMDD(getSearchParamAsDate('startDate')),
    endDate: formatDayAsDashYYYYMMDD(getSearchParamAsDate('endDate')),
  });

  const totalPages = userPostsData?.totalPages ?? 1;
  const urlPageNum = Number(getSearchParam('page') ?? 0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateSearchParams({ page: page + 1 });
  };

  const handleSortChange = () => {
    const newSort = sort === 'latest' ? 'oldest' : 'latest';
    setSort(newSort);
    updateSearchParams({ sort: newSort });
  };

  const handleTogglePostSelection = (postId: number, checked: boolean) => {
    if (checked) {
      setSelectedPostIds((prev) => [...prev, postId]);
    } else {
      setSelectedPostIds((prev) => prev.filter((id) => id !== postId));
    }
  };

  const handleSelectAll = () => {
    const allPostIds = userPostsData?.data.map((post) => post.postId) || [];
    const allSelected = userPostsData?.data.every((post) => selectedPostIds.includes(post.postId)) || false;

    if (allSelected) {
      setSelectedPostIds([]);
    } else {
      setSelectedPostIds(allPostIds);
    }
  };

  const handleDeletePosts = () => {
    if (selectedPostIds.length === 0) {
      open('alert', { message: '삭제할 항목을 선택해주세요' });
      return;
    }
    deleteUserPost();
  };

  const handleGoToCommunity = () => {
    router.push('/community');
  };

  useEffect(() => {
    if (urlPageNum > 0) {
      setCurrentPage(urlPageNum - 1);
    }
  }, [urlPageNum]);

  if (isLoading) return <Loading />;

  return (
    <S.UserPost>
      <S.FilterHeader>
        <SearchFilter
          totalTitle='전체 글'
          total={userPostsData?.totalElements}
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
          {(userPostsData?.data?.length ?? 0) > 0 && (
            <>
              {!isEdit ? (
                <OutlinedButton
                  label='선택'
                  onClick={() => setIsEdit(true)}
                  color='primary'
                  size='sm'
                  interactionVariant='normal'
                />
              ) : (
                <S.ListSelectButtonWrapper>
                  {userPostsData?.data.length === selectedPostIds.length ? (
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

      {(userPostsData?.data?.length ?? 0) === 0 ? (
        <EmptyState
          icon={<MessageCircleX />}
          description='코그니어 커뮤니티에 첫 글을 써 보세요!'
          buttonLabel='커뮤니티 바로가기'
          buttonAction={handleGoToCommunity}
        />
      ) : (
        <>
          <S.PostList>
            {userPostsData?.data.map((post) => (
              <PostCard
                key={post.postId}
                post={post}
                isEdit={isEdit}
                isSelected={selectedPostIds.includes(post.postId)}
                onToggleSelect={(checked) => handleTogglePostSelection(post.postId, checked)}
              />
            ))}
          </S.PostList>

          <S.Pagination>
            <NumberPagination
              size='nm'
              currentPage={currentPage + 1}
              totalPages={totalPages}
              onPageChange={(page) => handlePageChange(page - 1)}
            />
          </S.Pagination>
        </>
      )}
    </S.UserPost>
  );
}
