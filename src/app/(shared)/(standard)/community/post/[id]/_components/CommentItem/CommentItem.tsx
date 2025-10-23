'use client';

import { useRef, useState } from 'react';

import CommentField from '@/app/(shared)/(standard)/community/post/[id]/_components/CommentField/CommentField';
import { useReplyConnectorHeight } from '@/app/(shared)/(standard)/community/post/[id]/_hooks/useReplyConnectorHeight';
import ChevronRight from '@/assets/icons/chevronright.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import { useSimpleModalStore } from '@/stores/useModalStore';
import { Comment } from '@/types/comment';

import * as S from './CommentItem.styled';
import CommentCard from '../CommentCard/CommentCard';

interface CommentItemProps {
  postId: string;
  comment: Comment;
}

export default function CommentItem({ comment, postId }: CommentItemProps) {
  const replyCount = comment.children?.length ?? 0;
  const hasMultipleReplies = replyCount > 1;

  const [showReplyList, setShowReplyList] = useState(!hasMultipleReplies);
  const [isReplying, setIsReplying] = useState(false);

  const { open: openSimpleModal } = useSimpleModalStore();

  const toggleChildren = () => setShowReplyList((v) => !v);
  const toggleReplyField = () => setIsReplying((v) => !v);

  const handleProfile = () => {
    if (!comment.author.isAnonymous) {
      openSimpleModal('userProfile', { memberId: comment.author.authorId.toString() });
    }
  };

  const leftAnchorRef = useRef<HTMLDivElement>(null); // 아바타 바로 아래 앵커
  const rightContainerRef = useRef<HTMLDivElement>(null); // data-reply-connector들을 포함하는 우측 컨테이너

  const blueHeight = useReplyConnectorHeight(rightContainerRef, leftAnchorRef);

  return (
    <S.CommentItem>
      <S.CommentItemLeft>
        {/* 아바타를 래핑해서 "앵커"로 삼는다 */}
        <div ref={leftAnchorRef}>
          <AvatarPerson
            type='icon'
            size='sm'
            src={comment.author.profileUrl || undefined}
            onClick={handleProfile}
          />
        </div>

        {/* 아바타 아래에서부터 마지막 data-reply-connector 까지의 라인 */}
        <S.BlueLine style={{ height: blueHeight }} />
      </S.CommentItemLeft>

      <S.CommentItemRight ref={rightContainerRef}>
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

        {replyCount > 0 && (
          <S.ShowReplyButton
            type='button'
            onClick={toggleChildren}
          >
            {!showReplyList && <S.ReplyTextConnector data-reply-connector />}
            <S.ShowReplyText>{showReplyList ? '답글 닫기' : `답글 ${replyCount}개`}</S.ShowReplyText>
            <S.ChevronIcon>{showReplyList ? <ChevronUp /> : <ChevronRight />}</S.ChevronIcon>
          </S.ShowReplyButton>
        )}

        {isReplying && comment.status === 'ACTIVE' && (
          <S.CommentFieldWrapper>
            <S.CommentFieldConnector data-reply-connector />
            <CommentField
              postId={postId}
              placeholder='댓글을 입력해주세요'
              parentId={comment.commentId}
              onSuccess={() => {
                setIsReplying(false);
                setShowReplyList(true);
              }}
            />
          </S.CommentFieldWrapper>
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
                isReply
              />
            ))}
          </S.ReplyList>
        )}
      </S.CommentItemRight>
    </S.CommentItem>
  );
}
