'use client';

import CommentField from '@/components/molecules/CommentField/CommentField';
import { Comment } from '@/types/comment';

import * as S from '../CommentItem.styled';

interface CommentContentProps {
  comment: Comment;
  postId: string;
  isChild: boolean;
  isEditing: boolean;
  showFullContent: boolean;
  isOverflowing: boolean;
  contentRef: React.RefObject<HTMLDivElement | null>;
  onEditSuccess: () => void;
  onEditCancel: () => void;
  onToggleFullContent: () => void;
}

export default function CommentContent({
  comment,
  postId,
  isChild,
  isEditing,
  showFullContent,
  isOverflowing,
  contentRef,
  onEditSuccess,
  onEditCancel,
  onToggleFullContent,
}: CommentContentProps) {
  const getCommentContent = () => {
    switch (comment.status) {
      case 'ACTIVE':
        return comment.content;
      case 'DELETED_BY_USER':
      case 'DELETED_BY_ADMIN':
        return '삭제된 댓글이에요';
      case 'USER_WITHDRAWN':
        return '댓글을 볼 수 없어요';
      default:
        return '댓글을 볼 수 없어요';
    }
  };

  if (isEditing) {
    return (
      <S.CommentContentWrapper>
        <S.EditFieldWrapper>
          <CommentField
            postId={postId}
            placeholder='댓글을 수정해주세요'
            isEdit={true}
            commentId={comment.commentId.toString()}
            initialContent={comment.content}
            onSuccess={onEditSuccess}
            onCancel={onEditCancel}
          />
        </S.EditFieldWrapper>
      </S.CommentContentWrapper>
    );
  }

  return (
    <S.CommentContentWrapper>
      <S.CommentCotent
        $isChild={isChild}
        $isActive={comment.status === 'ACTIVE'}
        $showFullContent={showFullContent}
      >
        <S.CommentInner
          ref={contentRef}
          $isChild={isChild}
          $isActive={comment.status === 'ACTIVE'}
          $showFullContent={showFullContent}
        >
          {getCommentContent()}
        </S.CommentInner>
        {comment.status === 'ACTIVE' && !showFullContent && isOverflowing && (
          <S.ShowMoreButton onClick={onToggleFullContent}>자세히 보기</S.ShowMoreButton>
        )}
      </S.CommentCotent>
    </S.CommentContentWrapper>
  );
}
