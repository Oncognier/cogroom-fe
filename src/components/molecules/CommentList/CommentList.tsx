'use client';

import LoadingSpinner from '@/components/atoms/LoadingSpinner/LoadingSpinner';
import CommentItem from '@/components/molecules/CommentItem/CommentItem';
import { Comment } from '@/types/comment';

import * as S from './CommentList.styled';

interface CommentListProps {
  comments: Comment[];
  postId: string;
  isLoading?: boolean;
  isAdmin?: boolean;
  isPostAnonymous?: boolean;
  onCommentUpdated?: () => void;
}

export default function CommentList({
  comments,
  postId,
  isLoading = false,
  isAdmin = false,
  isPostAnonymous = false,
  onCommentUpdated,
}: CommentListProps) {
  if (isLoading) {
    return (
      <S.LoadingWrapper>
        <LoadingSpinner />
      </S.LoadingWrapper>
    );
  }

  if (!comments || comments.length === 0) return null;

  return (
    <S.CommentListWrapper>
      {comments
        .filter((comment) => comment)
        .map((comment) => (
          <CommentItem
            key={comment.commentId}
            comment={comment}
            postId={postId}
            isPostAnonymous={isPostAnonymous}
          />
        ))}
    </S.CommentListWrapper>
  );
}
