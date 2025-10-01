'use client';

import { useState, useCallback, ChangeEvent, KeyboardEvent } from 'react';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { useCreateComment } from '@/hooks/api/comment/useCreateComment';
import { useUpdateComment } from '@/hooks/api/comment/useUpdateComment';

import * as S from './CommentField.styled';

interface CommentFieldProps {
  postId: string;
  placeholder?: string;
  maxLength?: number;
  isAnonymous?: boolean;
  parentId?: number;
  mentionedList?: number[];
  disabled?: boolean;
  onSuccess?: () => void;
  showAnonymousCheckbox?: boolean;
  // 수정 모드용 props
  isEdit?: boolean;
  commentId?: string;
  initialContent?: string;
  onCancel?: () => void;
}

export default function CommentField({
  postId,
  placeholder = '댓글을 입력해주세요',
  maxLength = 1000,
  isAnonymous,
  parentId,
  mentionedList = [],
  disabled = false,
  onSuccess,
  showAnonymousCheckbox = false,
  isEdit = false,
  commentId,
  initialContent = '',
  onCancel,
}: CommentFieldProps) {
  const [content, setContent] = useState(initialContent);
  const [localIsAnonymous, setLocalIsAnonymous] = useState(false);
  const { createComment, isLoading: createLoading } = useCreateComment(postId);
  const updateCommentMutation = useUpdateComment();

  const handleContentChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      if (value.length <= maxLength) {
        setContent(value);
      }
    },
    [maxLength],
  );

  const handleSubmit = useCallback(() => {
    if (content.trim()) {
      if (isEdit && commentId) {
        updateCommentMutation.mutate(
          {
            commentId,
            data: {
              content: content.trim(),
              isAnonymous: localIsAnonymous,
              mentionedList,
            },
          },
          {
            onSuccess: () => {
              setContent('');
              onSuccess?.();
            },
          },
        );
      } else {
        createComment(
          {
            content: content.trim(),
            isAnonymous: localIsAnonymous,
            parentId,
            mentionedList,
          },
          {
            onSuccess: () => {
              setContent('');
              onSuccess?.();
            },
          },
        );
      }
    }
  }, [
    content,
    isEdit,
    commentId,
    updateCommentMutation,
    createComment,
    localIsAnonymous,
    parentId,
    mentionedList,
    onSuccess,
  ]);

  const isLoading = isEdit ? updateCommentMutation.isPending : createLoading;
  const isSubmitDisabled = disabled || isLoading || !content.trim();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        if (e.nativeEvent?.isComposing) return;
        if (e.repeat) return;
        e.preventDefault();
        if (!isSubmitDisabled) {
          handleSubmit();
        }
      }
    },
    [handleSubmit, isSubmitDisabled],
  );

  return (
    <S.Wrapper>
      <S.TextareaContainer>
        <S.Textarea
          value={content}
          onChange={handleContentChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || isLoading}
        />
      </S.TextareaContainer>

      <S.BottomSection>
        <S.CounterWrapper>
          <S.CharCurrentCounter>{content.length} /</S.CharCurrentCounter>
          <S.CharTotalCounter>{maxLength.toLocaleString()}</S.CharTotalCounter>
        </S.CounterWrapper>

        <S.ButtonWrapper>
          {isEdit && onCancel && (
            <SolidButton
              label='취소'
              size='sm'
              color='assistive'
              interactionVariant='normal'
              onClick={onCancel}
            />
          )}
          {showAnonymousCheckbox && (
            <S.CheckboxWrapper>
              <Checkbox
                size='nm'
                isChecked={localIsAnonymous}
                onToggle={setLocalIsAnonymous}
                interactionVariant='normal'
                name='commentAnonymous'
              />
              <S.CheckboxLabel>익명</S.CheckboxLabel>
            </S.CheckboxWrapper>
          )}
          <SolidButton
            label={isEdit ? '수정하기' : '입력'}
            size='sm'
            interactionVariant='normal'
            onClick={handleSubmit}
            isDisabled={isSubmitDisabled}
          />
        </S.ButtonWrapper>
      </S.BottomSection>
    </S.Wrapper>
  );
}
