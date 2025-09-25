'use client';

import { useEffect, useState } from 'react';

import { Comment } from '@/types/comment';

interface UseBlueLineHeightProps {
  showChildren: boolean;
  showReplyField: boolean;
  comment: Comment;
  showFullContent: boolean;
  commentWrapperRef: React.RefObject<HTMLDivElement | null>;
  childrenRefs: React.RefObject<Array<HTMLDivElement | null>>;
  replyCountButtonRef: React.RefObject<HTMLButtonElement | null>;
}

export const useBlueLineHeight = ({
  showChildren,
  showReplyField,
  comment,
  showFullContent,
  commentWrapperRef,
  childrenRefs,
  replyCountButtonRef,
}: UseBlueLineHeightProps) => {
  const [lineHeight, setLineHeight] = useState(0);
  const [replyFieldHeight, setReplyFieldHeight] = useState(14);
  const [commentWrapperHeight, setCommentWrapperHeight] = useState(0);

  // CommentItemWrapper 높이를 측정하여 파란색 선의 높이를 계산
  useEffect(() => {
    const measureHeight = () => {
      if (commentWrapperRef.current) {
        const rect = commentWrapperRef.current.getBoundingClientRect();
        setCommentWrapperHeight(rect.height);
      }
    };

    measureHeight();

    // 댓글 내용이 변경되거나 답글 상태가 변경될 때마다 다시 측정
    const observer = new ResizeObserver(measureHeight);
    if (commentWrapperRef.current) {
      observer.observe(commentWrapperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [comment.content, showReplyField, showChildren, showFullContent]);

  // 자식 댓글들의 아바타 위치를 기준으로 높이 계산
  useEffect(() => {
    if (childrenRefs.current.length === 0) return;

    // 마지막 자식 댓글의 아바타 위치를 기준으로 높이 계산
    const lastChildRef = childrenRefs.current[childrenRefs.current.length - 1];
    if (lastChildRef && commentWrapperRef.current) {
      const containerRect = commentWrapperRef.current.getBoundingClientRect();
      const lastChildRect = lastChildRef.getBoundingClientRect();

      // 마지막 자식 댓글의 아바타 위치 계산 (자식 댓글 시작 지점 + 아바타 위치)
      const relativeTop = lastChildRect.top - containerRect.top;
      const avatarOffset = 32; // 아바타 위치 조정값

      setLineHeight(Math.max(relativeTop + avatarOffset, 50));
    } else {
      let totalHeight = 0;
      childrenRefs.current.forEach((el) => {
        if (el) totalHeight += el.offsetHeight;
      });
      setLineHeight(totalHeight);
    }
  }, [comment.children, showChildren, commentWrapperHeight]);

  // 답글 n개 버튼 위치 변경 감지를 위한 useEffect
  useEffect(() => {
    const updateButtonPosition = () => {
      // 강제로 리렌더링을 트리거하여 파란색 선 높이를 업데이트
      if (!showChildren && comment.children && comment.children.length > 0) {
        // state를 업데이트하여 리렌더링 트리거 (실제로는 값이 변경되지 않을 수 있음)
        setCommentWrapperHeight((prev) => prev);
      }
    };

    // 댓글 내용이 변경되었을 때 약간의 지연 후 업데이트
    const timeoutId = setTimeout(updateButtonPosition, 50);
    return () => clearTimeout(timeoutId);
  }, [comment.content, showFullContent, showChildren, comment.children]);

  // 답글 필드 높이 계산
  useEffect(() => {
    const updateReplyFieldHeight = () => {
      if (showReplyField && commentWrapperRef.current) {
        // 답글 입력 필드의 위치를 고려한 파란색 선 높이 계산
        const replyFieldContainer = commentWrapperRef.current.querySelector('[data-reply-field]');
        if (replyFieldContainer) {
          const containerRect = commentWrapperRef.current.getBoundingClientRect();
          const replyFieldRect = (replyFieldContainer as HTMLElement).getBoundingClientRect();
          const relativeTop = replyFieldRect.top - containerRect.top;
          const calculatedHeight = Math.max(relativeTop, 100); // 답글 필드 위치 + 여백
          setReplyFieldHeight(calculatedHeight);
        } else {
          // 답글 필드가 아직 렌더링되지 않은 경우 기본값 사용
          const calculatedHeight = Math.max(commentWrapperHeight - 50, 100);
          setReplyFieldHeight(calculatedHeight);
        }
      }
    };

    updateReplyFieldHeight();

    // showReplyField가 변경된 후 약간의 지연을 두고 다시 계산 (DOM 업데이트 대기)
    if (showReplyField) {
      const timeoutId = setTimeout(updateReplyFieldHeight, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [showReplyField, comment.content, showFullContent, commentWrapperHeight]);

  // 답글 n개 버튼까지의 높이 계산
  const getReplyCountButtonHeight = () => {
    if (replyCountButtonRef.current && commentWrapperRef.current) {
      const containerRect = commentWrapperRef.current.getBoundingClientRect();
      const buttonRect = replyCountButtonRef.current.getBoundingClientRect();
      const relativeTop = buttonRect.top - containerRect.top;
      return Math.max(relativeTop - 15, 100);
    }

    return Math.max(commentWrapperHeight - 50, 100);
  };

  return {
    lineHeight,
    replyFieldHeight,
    commentWrapperHeight,
    getReplyCountButtonHeight,
  };
};
