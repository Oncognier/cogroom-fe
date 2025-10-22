'use client';

import { useMutation } from '@tanstack/react-query';

import { commentApi } from '@/api/commentApis';
import DotsVerticalIcon from '@/assets/icons/dots-vertical.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { DropdownList } from '@/components/molecules/DropdownList/DropdownList';
import { useDropdown } from '@/hooks/useDropdown';
import { useAlertModalStore } from '@/stores/useModalStore';
import { DropdownOption } from '@/types/common';

import * as S from './CommentDropdown.styled';

interface CommentDropdownProps {
  commentId: number;
  isMine: boolean;
  isAdmin: boolean;
  onEdit: () => void;
  onCommentUpdated?: () => void;
}

export default function CommentDropdown({
  commentId,
  isMine,
  isAdmin,
  onEdit,
  onCommentUpdated,
}: CommentDropdownProps) {
  const { open: openAlert } = useAlertModalStore();
  const { isOpen, toggle, close, handleBlur, dropdownRef } = useDropdown();

  const forceDeleteMutation = useMutation({
    mutationFn: commentApi.deleteComment,
    onSuccess: () => {
      openAlert('alert', { message: '댓글이 삭제되었습니다.' });
      onCommentUpdated?.();
    },
    onError: () => {
      openAlert('alert', { message: '댓글 삭제에 실패했습니다.' });
    },
  });

  const getDropdownOptions = (): DropdownOption[] => {
    const options: DropdownOption[] = [];

    if (isMine) {
      options.push({ label: '수정하기', value: 'EDIT', color: 'default' });
      options.push({ label: '삭제하기', value: 'DELETE', color: 'default' });
    } else if (isAdmin) {
      options.push({ label: '강제로 삭제', value: 'FORCE_DELETE', color: 'red' });
    }

    return options;
  };

  const handleDropdownSelect = (values: Array<string | number>) => {
    const value = values[0];

    if (value === 'EDIT') {
      onEdit();
    } else if (value === 'DELETE') {
      openAlert('communityDelete', {
        type: 'comment',
        id: commentId,
        onConfirm: onCommentUpdated,
      });
    } else if (value === 'FORCE_DELETE') {
      forceDeleteMutation.mutate({ commentId: commentId.toString() });
    }

    close();
  };

  const shouldShowMenu = isMine || isAdmin;

  if (!shouldShowMenu) {
    return null;
  }

  return (
    <S.MenuContainer
      ref={dropdownRef}
      onBlur={handleBlur}
      tabIndex={-1}
    >
      <IconButton
        size='3.6rem'
        variant='normal'
        interactionVariant='normal'
        onClick={toggle}
        aria-label='더보기'
        aria-haspopup='menu'
        aria-expanded={isOpen}
      >
        <S.DotsIcon>
          <DotsVerticalIcon />
        </S.DotsIcon>
      </IconButton>

      {isOpen && (
        <S.MenuDropdownWrapper>
          <DropdownList
            options={getDropdownOptions()}
            selectedValues={[]}
            onSelect={handleDropdownSelect}
          />
        </S.MenuDropdownWrapper>
      )}
    </S.MenuContainer>
  );
}
