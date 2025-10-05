'use client';

import ChevronRightIcon from '@/assets/icons/chevronright.svg';
import HeartFill from '@/assets/icons/heart-fill.svg';
import Heart from '@/assets/icons/heart.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import CommentField from '@/components/molecules/CommentField/CommentField';
import { useDeleteCommentLike } from '@/hooks/api/comment/useDeleteCommentLike';
import { useToggleCommentLike } from '@/hooks/api/comment/useToggleCommentLike';
import { useBlueLineHeight } from '@/hooks/useBlueLineHeight';
import { useCommentState } from '@/hooks/useCommentState';
import { useSimpleModalStore } from '@/stores/useModalStore';
import { Comment } from '@/types/comment';
import { formatRelativeKorean } from '@/utils/date/formatDay';
import { formatCountPlus, getDisplayName } from '@/utils/formatText';

import { BlueLineElement, StaticBlueLine } from './_components/BlueLineElement';
import CommentContent from './_components/CommentContent';
import CommentDropdown from './_components/CommentDropdown';
import * as S from './CommentItem.styled';

interface CommentItemProps {
  comment: Comment;
  postId: string;
  isAdmin?: boolean;
  isMine?: boolean;
  isChild?: boolean;
  parentShowReplyField?: boolean;
  isPostAnonymous?: boolean;
  onCommentUpdated?: () => void;
}

export default function CommentItem({
  comment,
  postId,
  isMine = false,
  isAdmin = false,
  isChild = false,
  parentShowReplyField = false,
  isPostAnonymous = false,
  onCommentUpdated,
}: CommentItemProps) {
  const {
    likeCount,
    isLiked,
    showReplyField,
    isEditing,
    showChildren,
    showFullContent,
    isOverflowing,
    setLikeCount,
    setIsLiked,
    setIsEditing,
    contentRef,
    childrenRefs,
    replyCountButtonRef,
    commentWrapperRef,
    handleReplyClick,
    handleReplySuccess,
    handleEditSuccess,
    handleEditCancel,
    handleToggleChildren,
    handleToggleFullContent,
  } = useCommentState({ comment });

  const { lineHeight, replyFieldHeight, getReplyCountButtonHeight } = useBlueLineHeight({
    showChildren,
    showReplyField,
    comment,
    showFullContent,
    commentWrapperRef,
    childrenRefs,
    replyCountButtonRef,
  });

  const { open: openSimpleModal } = useSimpleModalStore();

  const toggleCommentLikeMutation = useToggleCommentLike();
  const deleteCommentLikeMutation = useDeleteCommentLike();

  const handleAvatarClick = () => {
    if (!comment.author.isAnonymous) {
      openSimpleModal('userProfile', {
        memberId: comment.author.authorId.toString(),
      });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleLikeClick = () => {
    const originalIsLiked = isLiked;
    const originalLikeCount = likeCount;
    const newIsLiked = !isLiked;
    const newLikeCount = newIsLiked ? likeCount + 1 : likeCount - 1;

    const mutation = originalIsLiked ? deleteCommentLikeMutation : toggleCommentLikeMutation;

    setIsLiked(newIsLiked);
    setLikeCount(newLikeCount);

    mutation.mutate(comment.commentId.toString(), {
      onError: () => {
        setIsLiked(originalIsLiked);
        setLikeCount(originalLikeCount);
      },
    });
  };

  const handleReplySuccessWithUpdate = () => {
    handleReplySuccess();
    onCommentUpdated?.();
  };

  const handleEditSuccessWithUpdate = () => {
    handleEditSuccess();
    onCommentUpdated?.();
  };

  const getAuthorName = () => {
    switch (comment.status) {
      case 'ACTIVE':
        return getDisplayName(comment.author.displayName, comment.author.isAnonymous);
      case 'DELETED_BY_USER':
      case 'DELETED_BY_ADMIN':
        return '삭제된 댓글';
      case 'USER_WITHDRAWN':
        return '탈퇴한 코그니어';
      default:
        return getDisplayName(comment.author.displayName, comment.author.isAnonymous);
    }
  };

  return (
    <S.CommentItemWrapper
      $isChild={isChild}
      ref={commentWrapperRef}
    >
      <S.CommentWrapper>
        <S.CommentFirstBox>
          {!isChild && comment.children && comment.children.length > 0 && !showChildren && (
            <StaticBlueLine style={{ height: `${getReplyCountButtonHeight()}px` }} />
          )}

          {!isChild && showReplyField && <StaticBlueLine style={{ height: `${replyFieldHeight}px` }} />}

          {!isChild && comment.children && comment.children.length > 0 && showChildren && !showReplyField && (
            <BlueLineElement style={{ height: `${lineHeight - 60}px` }} />
          )}

          <S.AvatarWrapper
            onClick={handleAvatarClick}
            $isClickable={!comment.author.isAnonymous}
            $isChild={isChild}
            $showReplyField={parentShowReplyField}
          >
            <AvatarPerson
              type='icon'
              size='sm'
              src={comment.author.profileUrl || undefined}
            />
          </S.AvatarWrapper>
        </S.CommentFirstBox>

        <S.CommentSecondBox>
          <S.AuthorInfoBox>
            <S.NameBox>
              <S.AuthorName
                $isActive={comment.status === 'ACTIVE'}
                $isClickable={!comment.author.isAnonymous}
                onClick={handleAvatarClick}
              >
                {getAuthorName()}
              </S.AuthorName>
              {comment.status === 'ACTIVE' && <S.CommentTime>{formatRelativeKorean(comment.createdAt)}</S.CommentTime>}
            </S.NameBox>

            {comment.status === 'ACTIVE' && (
              <CommentDropdown
                commentId={comment.commentId}
                isMine={isMine}
                isAdmin={isAdmin}
                onEdit={handleEdit}
                onCommentUpdated={onCommentUpdated}
              />
            )}
          </S.AuthorInfoBox>

          <CommentContent
            comment={comment}
            postId={postId}
            isChild={isChild}
            isEditing={isEditing}
            showFullContent={showFullContent}
            isOverflowing={isOverflowing}
            contentRef={contentRef}
            onEditSuccess={handleEditSuccessWithUpdate}
            onEditCancel={handleEditCancel}
            onToggleFullContent={handleToggleFullContent}
          />

          <S.LikesWithReplyBox>
            {comment.status === 'ACTIVE' && (
              <S.LikeButton onClick={handleLikeClick}>
                <S.LikeIcon $isLiked={isLiked}>{isLiked ? <HeartFill /> : <Heart />}</S.LikeIcon>
                <S.LikeCount>{formatCountPlus(likeCount)}</S.LikeCount>
              </S.LikeButton>
            )}

            {!isChild && !isEditing && comment.status === 'ACTIVE' && (
              <S.FooterButton onClick={handleReplyClick}>{showReplyField ? '취소하기' : '답글 달기'}</S.FooterButton>
            )}
          </S.LikesWithReplyBox>

          {!isChild && comment.children && comment.children.length > 0 && (
            <S.ReplyCountButton
              ref={replyCountButtonRef}
              onClick={handleToggleChildren}
            >
              {showChildren ? '답글 닫기' : `답글 ${comment.children.length}개`}
              <S.ChevronIcon $isExpanded={showChildren}>
                <ChevronRightIcon />
              </S.ChevronIcon>
            </S.ReplyCountButton>
          )}

          {showReplyField && !isEditing && comment.status === 'ACTIVE' && (
            <S.ReplyFieldContainer data-reply-field>
              <CommentField
                postId={postId}
                placeholder='댓글을 입력해주세요'
                parentId={comment.commentId}
                showAnonymousCheckbox={isPostAnonymous}
                onSuccess={handleReplySuccessWithUpdate}
              />
            </S.ReplyFieldContainer>
          )}

          {comment.children && comment.children.length > 0 && showChildren && (
            <S.ChilrenWrpper>
              {comment.children.map((childComment, index) => (
                <S.ChildrenContainer
                  key={childComment.commentId}
                  ref={(el) => {
                    childrenRefs.current[index] = el;
                  }}
                >
                  <CommentItem
                    key={childComment.commentId}
                    comment={childComment}
                    postId={postId}
                    isMine={childComment.isMine}
                    isAdmin={isAdmin}
                    isChild={true}
                    parentShowReplyField={showReplyField}
                    isPostAnonymous={isPostAnonymous}
                    onCommentUpdated={onCommentUpdated}
                  />
                </S.ChildrenContainer>
              ))}
            </S.ChilrenWrpper>
          )}
        </S.CommentSecondBox>
      </S.CommentWrapper>
    </S.CommentItemWrapper>
  );
}
