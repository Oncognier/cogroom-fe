import { useMemo } from 'react';

import InfiniteScrollSentinel from '@/components/atoms/InfiniteScrollSentinel/InfiniteScrollSentinel';
import CommentField from '@/components/molecules/CommentField/CommentField';
import CommentList from '@/components/molecules/CommentList/CommentList';
import { useGetComments } from '@/hooks/api/comment/useGetComments';
import useGetUserSummaryQuery from '@/hooks/api/member/useGetUserSummary';
import useScroll from '@/hooks/useScroll';

import * as S from './PostComments.styled';

interface PostCommentsProps {
  postId: string;
  commentCount: number;
  isPostAnonymous: boolean;
}

export default function PostComments({ postId, commentCount, isPostAnonymous }: PostCommentsProps) {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage, refetch } = useGetComments(postId);
  const { data: userSummary } = useGetUserSummaryQuery();

  const comments = useMemo(() => {
    const result =
      data?.pages.flatMap((page) => {
        return page.data;
      }) ?? [];

    // createdAt 기준 내림차순 처리함.
    return result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [data]);

  const { observerRef } = useScroll({
    nextPage: !!hasNextPage,
    fetchNext: fetchNextPage,
  });

  const handleCommentUpdated = () => {
    refetch();
  };

  return (
    <S.PostCommentsWrapper>
      <S.CommentsTopWrapper>
        <S.CommentsHeader>댓글 {commentCount}개</S.CommentsHeader>
        <CommentField
          postId={postId}
          onSuccess={handleCommentUpdated}
          showAnonymousCheckbox={isPostAnonymous}
        />
      </S.CommentsTopWrapper>

      <CommentList
        comments={comments}
        postId={postId}
        isLoading={isLoading && comments.length === 0}
        isAdmin={userSummary?.memberRole === 'ADMIN'}
        isPostAnonymous={isPostAnonymous}
        onCommentUpdated={handleCommentUpdated}
      />

      <InfiniteScrollSentinel
        observerRef={observerRef}
        hasNextPage={!!hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </S.PostCommentsWrapper>
  );
}
