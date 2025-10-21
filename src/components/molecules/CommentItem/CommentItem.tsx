'use client';

import { useState } from 'react';
import ChevronRight from '@/assets/icons/chevronright.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import CommentField from '@/components/molecules/CommentField/CommentField';
import { Comment } from '@/types/comment';
import * as S from './CommentItem.styled';
import CommentCard from '../CommentCard/CommentCard';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import { useSimpleModalStore } from '@/stores/useModalStore';

interface CommentItemProps {
  postId: string;
  comment: Comment;
  isPostAnonymous?: boolean;
}

export default function CommentItem({ comment, postId, isPostAnonymous = false }: CommentItemProps) {
  const replyCount = comment.children?.length ?? 0;
  const hasManyReplies = replyCount > 0;

  const [showReplyList, setShowReplyList] = useState(!hasManyReplies);
  const [isReplying, setIsReplying] = useState(false);
  const { open: openSimpleModal } = useSimpleModalStore();

  const toggleChildren = () => setShowReplyList((v) => !v);
  const toggleReplyField = () => setIsReplying((v) => !v);

  const handleProfile = () => {
    if (!comment.author.isAnonymous) {
      openSimpleModal('userProfile', {
        memberId: comment.author.authorId.toString(),
      });
    }
  };

  return (
    <S.CommentItem>
      <S.CommentFirstBox>
        <AvatarPerson
          type='icon'
          size='sm'
          src={comment.author.profileUrl || undefined}
          onClick={handleProfile}
        />
      </S.CommentFirstBox>

      <S.CommentSecondBox>
        <CommentCard
          commentId={comment.commentId}
          postId={postId}
          content={comment.content}
          author={comment.author}
          isLiked={comment.isLiked}
          isMine={comment.isMine}
          likeCount={comment.likeCount}
          status={comment.status}
          createdAt={comment.createdAt}
          updatedAt={comment.updatedAt}
          onReplyClick={toggleReplyField}
          isReplying={isReplying}
        />

        {isReplying && comment.status === 'ACTIVE' && (
          <CommentField
            postId={postId}
            placeholder='댓글을 입력해주세요'
            parentId={comment.commentId}
            showAnonymousCheckbox={isPostAnonymous}
          />
        )}

        {replyCount > 0 && (
          <S.ShowReplyButton
            type='button'
            onClick={toggleChildren}
          >
            <S.ShowReplyText>{showReplyList ? '답글 닫기' : `답글 ${replyCount}개`}</S.ShowReplyText>
            <S.ChevronIcon>{showReplyList ? <ChevronUp /> : <ChevronRight />}</S.ChevronIcon>
          </S.ShowReplyButton>
        )}

        {replyCount > 0 && showReplyList && (
          <S.ReplyList>
            {comment.children!.map((child) => (
              <CommentCard
                key={child.commentId}
                commentId={child.commentId}
                postId={postId}
                content={child.content}
                author={child.author}
                isLiked={child.isLiked}
                isMine={child.isMine}
                likeCount={child.likeCount}
                status={child.status}
                createdAt={child.createdAt}
                updatedAt={child.updatedAt}
                defaultExpanded={false}
                isReply
              />
            ))}
          </S.ReplyList>
        )}
      </S.CommentSecondBox>
    </S.CommentItem>
  );
}
