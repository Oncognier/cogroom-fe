'use client';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { useDeleteCommentMutation } from '@/hooks/api/comment/useDeleteComment';
import { useDeletePostMutation } from '@/hooks/api/post/useDeletePost';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './CommunityDelete.styled';

export interface CommunityDeleteProps {
  type: 'post' | 'comment';
  id: number;
}

export default function CommunityDelete({ type, id }: CommunityDeleteProps) {
  const { close } = useAlertModalStore();
  const { deletePost } = useDeletePostMutation();
  const { deleteComment } = useDeleteCommentMutation();

  const isPost = type === 'post';

  const handleConfirm = () => {
    if (isPost) {
      deletePost({ postId: String(id) });
    } else {
      deleteComment({ commentId: String(id) });
    }
    close();
  };

  const handleCancel = () => {
    close();
  };

  return (
    <S.CommunityDelete>
      <S.Title>{isPost ? '글을 삭제하시겠습니까?' : '댓글을 삭제하시겠습니까?'}</S.Title>

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
