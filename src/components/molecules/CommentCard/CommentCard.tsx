'use client';

import { useState } from 'react';

import HeartFill from '@/assets/icons/heart-fill.svg';
import Heart from '@/assets/icons/heart.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import CommentField from '@/components/molecules/CommentField/CommentField';
import { useLikeComment } from '@/hooks/api/comment/useLikeComment';
import { useAuthStore } from '@/stores/useAuthStore';
import { useSimpleModalStore } from '@/stores/useModalStore';
import { CommentAuthor, CommentStatus } from '@/types/comment';
import { formatRelativeKorean } from '@/utils/date/formatDay';
import { formatCountPlus, getDisplayName } from '@/utils/formatText';

import * as S from './CommentCard.styled';
import CommentDropdown from '../CommentItem/_components/CommentDropdown';

interface CommentCardProps {
  commentId: number;
  postId: string;
  content: string;
  author: CommentAuthor;
  isLiked: boolean;
  isMine: boolean;
  likeCount: number;
  status: CommentStatus;
  createdAt: string;
  updatedAt: string;
  defaultExpanded?: boolean;
  onReplyClick?: () => void;
  isReplying?: boolean;
  isReply?: boolean;
}

export default function CommentCard({
  commentId,
  postId,
  content,
  author,
  isLiked,
  isMine,
  likeCount,
  status,
  createdAt,
  updatedAt,
  defaultExpanded = false,
  onReplyClick,
  isReplying = false,
  isReply = false,
}: CommentCardProps) {
  const { open: openSimpleModal } = useSimpleModalStore();
  const isAdmin = useAuthStore((s) => s.isAdmin());
  const { likeComment } = useLikeComment();

  const [showFullContent, setShowFullContent] = useState<boolean>(defaultExpanded);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleProfile = () => {
    if (!author.isAnonymous) {
      openSimpleModal('userProfile', {
        memberId: author.authorId.toString(),
      });
    }
  };

  const handleLike = () => {
    likeComment({ commentId: String(commentId), isLiked });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const getCommentContent = (status: CommentStatus, content: string): string => {
    if (status === 'ACTIVE') return content;
    if (status === 'DELETED_BY_USER' || status === 'DELETED_BY_ADMIN') return '삭제된 댓글이에요';
    if (status === 'USER_WITHDRAWN') return '댓글을 볼 수 없어요';
    return '댓글을 불러올 수 없습니다.';
  };

  const isEdited = new Date(updatedAt).getTime() > new Date(createdAt).getTime();

  return (
    <S.CommentCard>
      {isReply && (
        <AvatarPerson
          type='icon'
          size='sm'
          src={author.profileUrl || undefined}
          onClick={handleProfile}
        />
      )}

      <S.CommentRight>
        <S.CommentHeader>
          <S.AuthorInfo>
            <S.Nickname $isActive={status === 'ACTIVE'}>
              {getDisplayName(
                author.displayName,
                author.isAnonymous,
                status === 'DELETED_BY_USER' || status === 'DELETED_BY_ADMIN',
              )}
            </S.Nickname>
            {status === 'ACTIVE' && (
              <>
                <S.MetaText>{formatRelativeKorean(createdAt)}</S.MetaText>
                {isEdited && <S.MetaText>(수정됨)</S.MetaText>}
              </>
            )}
          </S.AuthorInfo>

          {status === 'ACTIVE' && (
            <CommentDropdown
              commentId={commentId}
              isMine={isMine}
              isAdmin={isAdmin}
              onEdit={handleEdit}
            />
          )}
        </S.CommentHeader>

        {isEditing ? (
          <CommentField
            postId={postId}
            placeholder='댓글을 수정해주세요'
            commentId={String(commentId)}
            initialContent={content}
            isAnonymous={author.isAnonymous}
            onCancel={handleCancelEdit}
            isEdit
          />
        ) : (
          <S.CommentBody $isActive={status === 'ACTIVE'}>
            <S.Content
              $isActive={status === 'ACTIVE'}
              $showFullContent={showFullContent}
            >
              {getCommentContent(status, content)}
            </S.Content>

            {status === 'ACTIVE' && showFullContent && (
              <S.ShowMoreButton
                type='button'
                onClick={() => setShowFullContent(true)}
              >
                자세히 보기
              </S.ShowMoreButton>
            )}
          </S.CommentBody>
        )}

        <S.CommentFooter>
          {status === 'ACTIVE' && (
            <S.LikeButton onClick={handleLike}>
              <S.LikeIcon $isLiked={isLiked}>{isLiked ? <HeartFill /> : <Heart />}</S.LikeIcon>
              <S.LikeCount>{formatCountPlus(likeCount)}</S.LikeCount>
            </S.LikeButton>
          )}

          {status === 'ACTIVE' && !isReply && (
            <S.ReplyButton
              type='button'
              onClick={onReplyClick}
            >
              {isReplying ? '취소하기' : '답글 달기'}
            </S.ReplyButton>
          )}
        </S.CommentFooter>
      </S.CommentRight>
    </S.CommentCard>
  );
}
