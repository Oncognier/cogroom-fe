'use client';

import ArrowTurnDownRight from '@/assets/icons/arrowturndownright.svg';
import DotsVertical from '@/assets/icons/dots-vertical.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import { POST_CATEGORY_META } from '@/constants/common';
import { Comment, CommentStatus } from '@/types/comment';
import { Post, PostStatus } from '@/types/post';
import { formatDayAsSlashYYMMDD, formatTimeAsHHmm } from '@/utils/date/formatDay';
import { formatToDigits, getDisplayName } from '@/utils/formatText';

import * as S from './CommunityListRow.styled';

export type CommunityListRowProps = { type: 'post'; post: Post } | { type: 'comment'; comment: Comment };

export default function CommunityListRow(props: CommunityListRowProps) {
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

  const isDestructiveStatus = (s: PostStatus | CommentStatus) => {
    if (s === 'DELETED_BY_USER' || s === 'DELETED_BY_ADMIN' || s === 'USER_WITHDRAWN') return true;
    return false;
  };

  const getStatusPrefix = (s: PostStatus | CommentStatus) => {
    if (s === 'DELETED_BY_USER' || s === 'DELETED_BY_ADMIN') return '(삭제됨) ';
    if (s === 'USER_WITHDRAWN') return '(탈퇴함) ';
    return '';
  };

  const destructive = isDestructiveStatus(status);
  const prefix = getStatusPrefix(status);

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

        <IconButton
          size='3rem'
          variant='normal'
          interactionVariant='normal'
          aria-label='더보기'
        >
          <DotsVertical />
        </IconButton>
      </S.MetaInfoWrapper>
    </S.CommunityListRow>
  );
}
