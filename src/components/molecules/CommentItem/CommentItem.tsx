'use client';

import { useMutation } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

import { commentApi } from '@/api/commentApis';
import ChevronRightIcon from '@/assets/icons/chevronright.svg';
import DotsVerticalIcon from '@/assets/icons/dots-vertical.svg';
import HeartFill from '@/assets/icons/heart-fill.svg';
import Heart from '@/assets/icons/heart.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import CommentField from '@/components/molecules/CommentField/CommentField';
import { DropdownList } from '@/components/molecules/DropdownList/DropdownList';
import { useDeleteCommentLike } from '@/hooks/api/comment/useDeleteCommentLike';
import { useToggleCommentLike } from '@/hooks/api/comment/useToggleCommentLike';
import { useDropdown } from '@/hooks/useDropdown';
import { useAlertModalStore, useSimpleModalStore } from '@/stores/useModalStore';
import { Comment } from '@/types/comment';
import { DropdownOption } from '@/types/common';
import { formatRelativeKorean } from '@/utils/date/formatDay';
import { formatCountPlus, getDisplayName } from '@/utils/formatText';

import * as S from './CommentItem.styled';

interface CommentItemProps {
  comment: Comment;
  postId: string;
  isAdmin?: boolean;
  isMine?: boolean;
  isChild?: boolean;
  isPostAnonymous?: boolean;
  onCommentUpdated?: () => void;
}

export default function CommentItem({
  comment,
  postId,
  isMine = false,
  isAdmin = false,
  isChild = false,
  isPostAnonymous = false,
  onCommentUpdated,
}: CommentItemProps) {
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const [isLiked, setIsLiked] = useState(comment.isLiked);
  const [showReplyField, setShowReplyField] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showChildren, setShowChildren] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const { open: openAlert } = useAlertModalStore();
  const { open: openSimpleModal } = useSimpleModalStore();
  const { isOpen, toggle, close, handleBlur, dropdownRef } = useDropdown();

  const toggleCommentLikeMutation = useToggleCommentLike();
  const deleteCommentLikeMutation = useDeleteCommentLike();

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
      setIsEditing(true);
      setShowReplyField(false);
    } else if (value === 'DELETE') {
      openAlert('communityDelete', {
        type: 'comment',
        id: comment.commentId,
        onConfirm: onCommentUpdated,
      });
    } else if (value === 'FORCE_DELETE') {
      forceDeleteMutation.mutate({ commentId: comment.commentId.toString() });
    }

    close();
  };

  const handleAvatarClick = () => {
    if (!comment.author.isAnonymous) {
      openSimpleModal('userProfile', {
        memberId: comment.author.authorId.toString(),
      });
    }
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

  const handleReplyClick = () => {
    setShowReplyField(!showReplyField);
  };

  const handleReplySuccess = () => {
    setShowReplyField(false);
    onCommentUpdated?.();
  };

  const handleEditSuccess = () => {
    setIsEditing(false);
    onCommentUpdated?.();
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleToggleChildren = () => {
    setShowChildren(!showChildren);
  };

  const handleToggleFullContent = () => {
    setShowFullContent(!showFullContent);
  };

  useEffect(() => {
    const checkOverflow = () => {
      if (!contentRef.current || window.innerWidth > 768) {
        setIsOverflowing(false);
        return;
      }

      const element = contentRef.current;
      setIsOverflowing(element.scrollHeight > element.clientHeight);
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [comment.content, showFullContent]);

  const shouldShowMenu = isMine || isAdmin;

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
    <S.CommentItemWrapper $isChild={isChild}>
      <S.CommentWrapper>
        <S.CommentFirstBox>
          <S.AvatarWrapper
            onClick={handleAvatarClick}
            $isClickable={!comment.author.isAnonymous}
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

            {shouldShowMenu && comment.status === 'ACTIVE' && (
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
            )}
          </S.AuthorInfoBox>

          <S.CommentContentWrapper>
            {isEditing ? (
              <S.EditFieldWrapper>
                <CommentField
                  postId={postId}
                  placeholder='댓글을 수정해주세요'
                  isEdit={true}
                  commentId={comment.commentId.toString()}
                  initialContent={comment.content}
                  onSuccess={handleEditSuccess}
                  onCancel={handleEditCancel}
                />
              </S.EditFieldWrapper>
            ) : (
              <>
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
                    <S.ShowMoreButton onClick={handleToggleFullContent}>자세히 보기</S.ShowMoreButton>
                  )}
                </S.CommentCotent>
              </>
            )}
          </S.CommentContentWrapper>

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
            <S.ReplyCountButton onClick={handleToggleChildren}>
              답글 {comment.children.length}개
              <S.ChevronIcon $isExpanded={showChildren}>
                <ChevronRightIcon />
              </S.ChevronIcon>
            </S.ReplyCountButton>
          )}

          {showReplyField && !isEditing && comment.status === 'ACTIVE' && (
            <S.ReplyFieldContainer>
              <CommentField
                postId={postId}
                placeholder='댓글을 입력해주세요'
                parentId={comment.commentId}
                showAnonymousCheckbox={isPostAnonymous}
                onSuccess={handleReplySuccess}
              />
            </S.ReplyFieldContainer>
          )}

          {comment.children && comment.children.length > 0 && showChildren && (
            <S.ChilrenWrpper>
              {comment.children.map((childComment) => (
                <S.ChildrenContainer key={childComment.commentId}>
                  <CommentItem
                    key={childComment.commentId}
                    comment={childComment}
                    postId={postId}
                    isMine={childComment.isMine}
                    isAdmin={isAdmin}
                    isChild={true}
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
