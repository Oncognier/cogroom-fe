'use client';

import { forwardRef, useEffect, useRef, ComponentProps } from 'react';

import InputLabel from '@/components/atoms/InputLabel/InputLabel';

import * as S from './Textarea.styled';
import type { TextareaStyleProps } from './Textarea.styled';

interface TextareaProps extends ComponentProps<'textarea'>, TextareaStyleProps {
  label?: string;
  error?: string;
  isDisabled?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, textareaSize, required, isDisabled, error, width, minHeight, autoResize, isResizable, ...props }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const hasError = !!error;

    useEffect(() => {
      if (autoResize && textareaRef.current) {
        const el = textareaRef.current;
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight}px`;
      }
    }, [props.value, autoResize]);

    return (
      <S.Container>
        {label && (
          <InputLabel
            label={label}
            required={required}
          />
        )}

        <S.Textarea
          ref={(node) => {
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
            textareaRef.current = node;
          }}
          textareaSize={textareaSize}
          disabled={isDisabled}
          isError={hasError}
          required={required}
          width={width}
          minHeight={minHeight}
          autoResize={autoResize}
          isResizable={isResizable}
          {...props}
        />

        {hasError && <S.Error>{error}</S.Error>}
      </S.Container>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
