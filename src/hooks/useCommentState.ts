'use client';

import { useEffect, useRef, useState } from 'react';

import { Comment } from '@/types/comment';

interface UseCommentStateProps {
  comment: Comment;
}

export const useCommentState = ({ comment }: UseCommentStateProps) => {
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const [isLiked, setIsLiked] = useState(comment.isLiked);
  const [showReplyField, setShowReplyField] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showChildren, setShowChildren] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const childrenRefs = useRef<Array<HTMLDivElement | null>>([]);
  const replyCountButtonRef = useRef<HTMLButtonElement | null>(null);
  const commentWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (!contentRef.current) {
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

  const handleReplyClick = () => {
    setShowReplyField(!showReplyField);
  };

  const handleReplySuccess = () => {
    setShowReplyField(false);
  };

  const handleEditSuccess = () => {
    setIsEditing(false);
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

  return {
    // States
    likeCount,
    isLiked,
    showReplyField,
    isEditing,
    showChildren,
    showFullContent,
    isOverflowing,

    // Setters
    setLikeCount,
    setIsLiked,
    setShowReplyField,
    setIsEditing,

    // Refs
    contentRef,
    childrenRefs,
    replyCountButtonRef,
    commentWrapperRef,

    // Handlers
    handleReplyClick,
    handleReplySuccess,
    handleEditSuccess,
    handleEditCancel,
    handleToggleChildren,
    handleToggleFullContent,
  };
};
