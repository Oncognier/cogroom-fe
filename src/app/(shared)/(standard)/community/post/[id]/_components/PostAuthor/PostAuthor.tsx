import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import DotsVerticalIcon from '@/assets/icons/dots-vertical.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { useAlertModalStore, useSimpleModalStore } from '@/stores/useModalStore';
import { getDisplayName } from '@/utils/formatText';

import * as S from './PostAuthor.styled';

interface PostAuthorProps {
  author: {
    authorId: number;
    profileUrl: string | null;
    displayName: string;
    isAnonymous: boolean;
  };
  postId: string;
  isMine?: boolean;
  isAdmin?: boolean;
}

export default function PostAuthor({ author, postId, isMine = false, isAdmin = false }: PostAuthorProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { open: openAlert } = useAlertModalStore();
  const { open: openSimpleModal } = useSimpleModalStore();

  const canEdit = isMine && !author.isAnonymous; // 익명 게시글은 수정 불가
  const canDelete = isMine || isAdmin;

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEdit = () => {
    setIsMenuOpen(false);
    router.push(`/community/write?edit=${postId}`);
  };

  const handleDelete = () => {
    setIsMenuOpen(false);

    if (isAdmin) {
      deletePost();
    } else {
      openAlert('alert', {
        message: '글을 지울까요?',
        type: 'confirm',
        onConfirm: deletePost,
        onCancel: () => {},
        confirmText: '지우기',
        cancelText: '안 지울래요',
      });
    }
  };

  const deletePost = () => {
    // TODO: 삭제 API 호출
    // console.log('게시글 삭제:', postId);

    openAlert('alert', {
      message: '글이 삭제되었습니다.',
      type: 'alert',
      onConfirm: () => router.push('/community'),
    });
  };

  const handleAvatarClick = () => {
    if (!author.isAnonymous) {
      openSimpleModal('userProfile', {
        memberId: author.authorId.toString(),
      });
    }
  };

  // 메뉴 표시 조건: 수정 가능하거나 삭제 가능한 경우
  const shouldShowMenu = canEdit || canDelete;

  return (
    <S.PostAuthorWrapper>
      <S.AuthorInfo>
        <S.AvatarWrapper
          onClick={handleAvatarClick}
          $isClickable={!author.isAnonymous}
        >
          <AvatarPerson
            type='icon'
            size='md'
            src={author.profileUrl || undefined}
          />
        </S.AvatarWrapper>
        <S.PostUserName>{getDisplayName(author.displayName, author.isAnonymous)}</S.PostUserName>
      </S.AuthorInfo>

      {/* 일시 히든처리, 공용 컴포넌트 업로드 시 변경 예정 */}
      {/* {shouldShowMenu && (
        <S.MenuContainer ref={menuRef}>
          <IconButton
            size='4rem'
            variant='normal'
            interactionVariant='normal'
            onClick={handleMenuClick}
          >
            <S.DotsIcon>
              <DotsVerticalIcon />
            </S.DotsIcon>
          </IconButton>

          {isMenuOpen && (
            <S.Menu>
              {canEdit && <S.MenuItem onClick={handleEdit}>수정하기</S.MenuItem>}
              {canDelete && <S.MenuItem onClick={handleDelete}>삭제하기</S.MenuItem>}
            </S.Menu>
          )}
        </S.MenuContainer>
      )} */}
    </S.PostAuthorWrapper>
  );
}
