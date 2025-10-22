'use client';

import { useRef, useState } from 'react';

import CommentField from '@/app/(shared)/(standard)/community/post/[id]/_components/CommentField/CommentField';
import ChevronRight from '@/assets/icons/chevronright.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import { useBlueLineHeight } from '@/hooks/useBlueLineHeight';
import { useSimpleModalStore } from '@/stores/useModalStore';
import { BlueLineElement, StaticBlueLine } from '@/styles/helpers/blueLine';
import { Comment } from '@/types/comment';

import * as S from './CommentItem.styled';
import CommentCard from '../CommentCard/CommentCard';

interface CommentItemProps {
  postId: string;
  comment: Comment;
}

export default function CommentItem({ comment, postId }: CommentItemProps) {
  const replyCount = comment.children?.length ?? 0;
  const hasReplies = replyCount > 0;

  const [showReplyList, setShowReplyList] = useState(!hasReplies); // 답글 없으면 기본 펼침
  const [isReplying, setIsReplying] = useState(false);

  const { open: openSimpleModal } = useSimpleModalStore();

  const commentWrapperRef = useRef<HTMLDivElement | null>(null);
  const replyCountButtonRef = useRef<HTMLButtonElement | null>(null);
  const childrenRefs = useRef<HTMLDivElement[]>([]);

  const toggleChildren = () => setShowReplyList((v) => !v);
  const toggleReplyField = () => setIsReplying((v) => !v);

  const handleProfile = () => {
    if (!comment.author.isAnonymous) {
      openSimpleModal('userProfile', { memberId: comment.author.authorId.toString() });
    }
  };

  const { lineHeight, replyFieldHeight, getReplyCountButtonHeight } = useBlueLineHeight({
    showChildren: showReplyList,
    showReplyField: isReplying,
    comment,
    commentWrapperRef,
    childrenRefs,
    replyCountButtonRef,
  });

  return (
    <S.CommentItem ref={commentWrapperRef}>
      <S.CommentItemLeft>
        {/* 답글 버튼만 보일 때의 고정 라인 */}
        {hasReplies && !showReplyList && <StaticBlueLine style={{ height: `${getReplyCountButtonHeight()}px` }} />}

        {/* 답글 입력창 열렸을 때 */}
        {isReplying && <StaticBlueLine style={{ height: `${replyFieldHeight}px` }} />}

        {/* 답글 리스트 펼침 & 입력창 닫힘 → 연결 라인 */}
        {hasReplies && showReplyList && !isReplying && lineHeight > 0 && (
          <BlueLineElement style={{ height: `${Math.max(0, lineHeight - 60)}px` }} />
        )}

        <AvatarPerson
          type='icon'
          size='sm'
          src={comment.author.profileUrl || undefined}
          onClick={handleProfile}
        />
      </S.CommentItemLeft>

      <S.CommentItemRight>
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
            ref={replyCountButtonRef}
            type='button'
            onClick={toggleChildren}
          >
            <S.ShowReplyText>{showReplyList ? '답글 닫기' : `답글 ${replyCount}개`}</S.ShowReplyText>
            <S.ChevronIcon>{showReplyList ? <ChevronUp /> : <ChevronRight />}</S.ChevronIcon>
          </S.ShowReplyButton>
        )}

        {isReplying && comment.status === 'ACTIVE' && (
          <div data-reply-field>
            <CommentField
              postId={postId}
              placeholder='댓글을 입력해주세요'
              parentId={comment.commentId}
              onSuccess={() => {
                setIsReplying(false);
                setShowReplyList(true);
              }}
            />
          </div>
        )}

        {replyCount > 0 && showReplyList && (
          <S.ReplyList>
            {comment.children!.map((child, idx) => (
              <div
                key={child.commentId}
                ref={(el) => {
                  if (el) childrenRefs.current[idx] = el;
                }}
              >
                <CommentCard
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
              </div>
            ))}
          </S.ReplyList>
        )}
      </S.CommentItemRight>
    </S.CommentItem>
  );
}
