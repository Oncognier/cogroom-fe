'use client';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { useDeleteCommentMutation } from '@/hooks/api/comment/useDeleteComment';
import { useDeletePostMutation } from '@/hooks/api/post/useDeletePost';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './CommunityDelete.styled';

export interface CommunityDeleteProps {
  type: 'post' | 'comment';
  postId: string;
  commentId?: string;
  onConfirm?: () => void;
}

export default function CommunityDelete({ type, postId, commentId, onConfirm }: CommunityDeleteProps) {
  const { close } = useAlertModalStore();

  const { deletePost } = useDeletePostMutation(onConfirm);
  const { deleteComment } = useDeleteCommentMutation(postId);

  const isPost = type === 'post';

  const handleConfirm = () => {
    if (isPost) {
      deletePost({ postId });
    } else {
      if (commentId) deleteComment({ commentId });
    }
    close();
  };

  const handleCancel = () => {
    close();
  };

  return (
    <S.CommunityDelete>
      <S.Title>{isPost ? '글을 지울까요?' : '댓글을 삭제하시겠어요?'}</S.Title>

      <S.ButtonWrapper>
        <OutlinedButton
          label='취소'
          size='sm'
          color='assistive'
          interactionVariant='normal'
          onClick={handleCancel}
          fillContainer
        />
        <SolidButton
          label='확인'
          size='sm'
          color='primary'
          interactionVariant='normal'
          onClick={handleConfirm}
          fillContainer
        />
      </S.ButtonWrapper>
    </S.CommunityDelete>
  );
}
