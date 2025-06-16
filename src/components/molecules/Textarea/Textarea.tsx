'use client';

import { forwardRef, ComponentProps } from 'react';

import FormStatusMessage from '@/components/atoms/FormStatusMessage/FormStatusMessage';
import { FormStatusMessageStatus } from '@/components/atoms/FormStatusMessage/FormStatusMessage.styled';
import InputLabel from '@/components/atoms/InputLabel/InputLabel';

import * as S from './Textarea.styled';
import type { TextareaStyleProps } from './Textarea.styled';

interface TextareaProps extends ComponentProps<'textarea'>, TextareaStyleProps {
  label?: string;
  error?: string;
  isDisabled?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, textareaSize, required, isDisabled, error, width, ...props }, ref) => {
    const hasError = !!error;
    const [errorType, errorContent] = error?.split(':') ?? [];

    const isNormalError = errorType === 'normal';
    const isStatusError =
      errorType === 'error' || errorType === 'warning' || errorType === 'success' || errorType === 'disable';

    return (
      <S.Container>
        {label && (
          <InputLabel
            label={label}
            required={required}
          />
        )}

        <S.Textarea
          ref={ref}
          textareaSize={textareaSize}
          disabled={isDisabled}
          isError={hasError}
          required={required}
          width={width}
          {...props}
        />

        {isNormalError && <S.Error>{errorContent}</S.Error>}

        {isStatusError && (
          <FormStatusMessage
            status={errorType as FormStatusMessageStatus}
            label={errorContent}
          />
        )}
      </S.Container>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
