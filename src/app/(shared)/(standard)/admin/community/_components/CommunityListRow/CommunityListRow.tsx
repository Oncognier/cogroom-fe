'use client';

import ArrowTurnDownRight from '@/assets/icons/arrowturndownright.svg';
import DotsVertical from '@/assets/icons/dots-vertical.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import { DropdownList } from '@/components/molecules/DropdownList/DropdownList';
import { POST_CATEGORY_META } from '@/constants/common';
import { useDropdown } from '@/hooks/useDropdown';
import { useAlertModalStore } from '@/stores/useModalStore';
import { Comment, CommentStatus } from '@/types/comment';
import { DropdownOption } from '@/types/common';
import { Post, PostStatus } from '@/types/post';
import { formatDayAsSlashYYMMDD, formatTimeAsHHmm } from '@/utils/date/formatDay';
import { formatToDigits, getDisplayName } from '@/utils/formatText';

import * as S from './CommunityListRow.styled';

export type CommunityListRowProps = { type: 'post'; post: Post } | { type: 'comment'; comment: Comment };

const DROPDOWN_OPTIONS: DropdownOption[] = [{ label: '삭제하기', value: 'DELETE', color: 'default' }];

export default function CommunityListRow(props: CommunityListRowProps) {
  const { open } = useAlertModalStore();

  const isPost = props.type === 'post';

  const id = isPost ? props.post.postId : props.comment.commentId;
  const mainTitle = isPost ? props.post.title : props.comment.comment;
  const status = isPost ? props.post.status : props.comment.status;
  const category = isPost ? props.post.category : props.comment.category;
  const createdAt = isPost ? props.post.createdAt : props.comment.createdAt;
  const author = isPost ? props.post.author : props.comment.author;
  const parentTitle = !isPost ? props.comment.post.title : undefined;

  const meta = POST_CATEGORY_META?.[category.name as keyof typeof POST_CATEGORY_META];
  const tagColor = meta?.color;
  const tagLabel = meta?.label ?? category.name;

  const isDestructiveStatus = (s?: PostStatus | CommentStatus) =>
    s === 'DELETED_BY_USER' || s === 'DELETED_BY_ADMIN' || s === 'USER_WITHDRAWN';

  const getStatusPrefix = (s?: PostStatus | CommentStatus) =>
    s === 'DELETED_BY_USER' || s === 'DELETED_BY_ADMIN' ? '(삭제됨) ' : s === 'USER_WITHDRAWN' ? '(탈퇴함) ' : '';

  const destructive = isDestructiveStatus(status);
  const prefix = getStatusPrefix(status);

  const { isOpen, toggle, close, handleBlur, dropdownRef } = useDropdown();

  const handleDropdownSelect = (values: Array<string | number>) => {
    const v = values[0];
    if (v === 'DELETE') {
      if (destructive) {
        if (isPost) open('alert', { message: '이미 삭제된 게시글입니다.' });
        else open('alert', { message: '이미 삭제된 댓글입니다.' });
        return;
      }
      const targetType = isPost ? 'post' : 'comment';
      open('communityDelete', { type: targetType, id });
    }

    close();
  };

  return (
    <S.CommunityListRow>
      <S.UniqueId>{formatToDigits(id, 6)}</S.UniqueId>

      <S.ContentWrapper>
        <S.TitleWrapper>
          <S.Title $destructive={destructive}>
            {prefix}
            {mainTitle}
          </S.Title>

          {parentTitle && (
            <S.PostContent>
              <S.Icon>
                <ArrowTurnDownRight />
              </S.Icon>
              <S.PostTitle>{parentTitle}</S.PostTitle>
            </S.PostContent>
          )}
        </S.TitleWrapper>

        <SolidTag
          color={tagColor}
          label={tagLabel}
          round
        />
      </S.ContentWrapper>

      <S.MetaInfoWrapper>
        <S.MemberInfoWrapper>
          <AvatarPerson
            type='image'
            size='xsm'
            src={author?.profileUrl || undefined}
          />
          <S.Nickname>{getDisplayName(author?.displayName || '', author?.isAnonymous || false)}</S.Nickname>
        </S.MemberInfoWrapper>

        <S.CreatedAt>
          {formatDayAsSlashYYMMDD(createdAt)}
          <br />
          {formatTimeAsHHmm(createdAt)}
        </S.CreatedAt>

        <S.DropdownContainer
          ref={dropdownRef}
          onBlur={handleBlur}
          tabIndex={-1}
        >
          <IconButton
            size='3rem'
            variant='normal'
            interactionVariant='normal'
            aria-label='더보기'
            aria-haspopup='menu'
            aria-expanded={isOpen}
            onClick={toggle}
          >
            <DotsVertical />
          </IconButton>

          <S.DropdownWrapper>
            {isOpen && (
              <DropdownList
                options={DROPDOWN_OPTIONS}
                selectedValues={[]}
                onSelect={handleDropdownSelect}
              />
            )}
          </S.DropdownWrapper>
        </S.DropdownContainer>
      </S.MetaInfoWrapper>
    </S.CommunityListRow>
  );
}
