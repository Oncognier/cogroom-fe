import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { postApi } from '@/api/postApis';
import DotsVerticalIcon from '@/assets/icons/dots-vertical.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { DropdownList } from '@/components/molecules/DropdownList/DropdownList';
import { useDropdown } from '@/hooks/useDropdown';
import { useAlertModalStore, useSimpleModalStore } from '@/stores/useModalStore';
import { DropdownOption } from '@/types/common';
import { getDisplayName } from '@/utils/formatText';

import * as S from './PostAuthor.styled';

interface PostAuthorProps {
  author?: {
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
  const router = useRouter();
  const { open: openAlert } = useAlertModalStore();
  const { open: openSimpleModal } = useSimpleModalStore();

  const { isOpen, toggle, close, handleBlur, dropdownRef } = useDropdown();

  const forceDeleteMutation = useMutation({
    mutationFn: postApi.deletePost,
    onSuccess: () => {
      openAlert('alert', {
        message: '글이 삭제되었습니다.',
        onConfirm: () => router.push('/community'),
      });
    },
    onError: () => {
      openAlert('alert', { message: '글 삭제에 실패했습니다.' });
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
      router.push(`/community/write?edit=${postId}`);
    } else if (value === 'DELETE') {
      openAlert('communityDelete', {
        type: 'post',
        id: Number(postId),
        onConfirm: () => router.push('/community'),
      });
    } else if (value === 'FORCE_DELETE') {
      forceDeleteMutation.mutate({ postId });
    }

    close();
  };

  const handleAvatarClick = () => {
    if (author && !author?.isAnonymous) {
      openSimpleModal('userProfile', {
        memberId: author?.authorId.toString(),
      });
    }
  };

  // 메뉴 표시 조건: 작성자 본인이거나 관리자인 경우
  const shouldShowMenu = isMine || isAdmin;

  return (
    <S.PostAuthorWrapper>
      <S.AuthorInfo
        onClick={handleAvatarClick}
        $isClickable={!author?.isAnonymous}
      >
        <AvatarPerson
          type='icon'
          size='md'
          src={author?.profileUrl || undefined}
        />
        <S.PostUserName>{getDisplayName(author?.displayName || null, author?.isAnonymous || false)}</S.PostUserName>
      </S.AuthorInfo>

      {shouldShowMenu && (
        <S.MenuContainer
          ref={dropdownRef}
          onBlur={handleBlur}
          tabIndex={-1}
        >
          <IconButton
            size='4rem'
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
      )}
    </S.PostAuthorWrapper>
  );
}
