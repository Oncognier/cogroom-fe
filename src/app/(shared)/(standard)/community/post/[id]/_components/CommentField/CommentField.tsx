'use client';

import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { useCreateComment } from '@/hooks/api/comment/useCreateComment';
import { useUpdateComment } from '@/hooks/api/comment/useUpdateComment';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './CommentField.styled';

interface CommentFieldProps {
  postId: string;
  placeholder?: string;
  maxLength?: number;
  isAnonymous?: boolean;
  parentId?: number;
  mentionedList?: number[];
  disabled?: boolean;
  // 수정 모드용 props
  isEdit?: boolean;
  commentId?: string;
  initialContent?: string;
  onCancel?: () => void;
  /** 작성/수정 성공 시 부모에게 알림 */
  onSuccess?: () => void;
}

export default function CommentField({
  postId,
  placeholder = '생각을 나눠주세요 •••',
  maxLength = 1000,
  isAnonymous = false,
  parentId,
  mentionedList = [],
  disabled = false,
  isEdit = false,
  commentId,
  initialContent = '',
  onCancel,
  onSuccess,
}: CommentFieldProps) {
  const [content, setContent] = useState(initialContent);
  const [localIsAnonymous, setLocalIsAnonymous] = useState(isAnonymous);

  const { createComment, isLoading: createLoading } = useCreateComment(postId);
  const { updateComment, isLoading: updateLoading } = useUpdateComment(postId);
  const { open } = useAppModalStore();
  const isAuth = useAuthStore((s) => s.isAuth());

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  useEffect(() => {
    setLocalIsAnonymous(isAnonymous ?? false);
  }, [isAnonymous]);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setContent(value);
    }
  };

  const afterSuccess = () => {
    // 공통 후처리: 입력창 비우기, 취소/성공 콜백 호출
    setContent('');
    onCancel?.();
    onSuccess?.();
  };

  const handleSubmit = () => {
    const trimmed = content.trim();
    if (!trimmed) return;

    if (!isAuth) {
      open('login');
      return;
    }

    if (isEdit && commentId) {
      updateComment(
        {
          commentId,
          data: {
            content: trimmed,
            isAnonymous: localIsAnonymous,
            mentionedList,
          },
        },
        {
          onSuccess: afterSuccess,
        },
      );
    } else {
      createComment(
        {
          content: trimmed,
          isAnonymous: localIsAnonymous,
          parentId,
          mentionedList,
        },
        {
          onSuccess: afterSuccess,
        },
      );
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter' || e.shiftKey) return;
    // IME 조합 중이거나 키 반복이면 무시
    if ((e as any).nativeEvent?.isComposing) return;
    if (e.repeat) return;

    e.preventDefault();
    if (!isSubmitDisabled) handleSubmit();
  };

  const isLoading = isEdit ? updateLoading : createLoading;
  const isSubmitDisabled = disabled || isLoading || !content.trim();

  return (
    <S.CommentField>
      <S.Textarea
        value={content}
        onChange={handleContentChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled || isLoading}
        maxLength={maxLength}
      />

      <S.BottomSection>
        <S.CounterWrapper>
          <S.CharCurrentCounter>{content.length} /</S.CharCurrentCounter>
          <S.CharTotalCounter>{maxLength.toLocaleString()}</S.CharTotalCounter>
        </S.CounterWrapper>

        <S.ButtonWrapper>
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

          {isEdit && onCancel && (
            <SolidButton
              label='취소'
              size='sm'
              color='assistive'
              interactionVariant='normal'
              onClick={onCancel}
            />
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
    </S.CommentField>
  );
}
