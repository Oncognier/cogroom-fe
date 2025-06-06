'use client';

import { forwardRef, ComponentProps } from 'react';

import FormStatusMessage from '@/components/atoms/FormStatusMessage/FormStatusMessage';
import { FormStatusMessageStatus } from '@/components/atoms/FormStatusMessage/FormStatusMessage.styled';
import InputLabel from '@/components/atoms/InputLabel/InputLabel';

import S from './Textarea.styled';

interface TextareaProps extends ComponentProps<'textarea'> {
  label?: string;
  error?: string;
  isDisabled?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, required, isDisabled, error, ...props }, ref) => {
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
          disabled={isDisabled}
          isError={hasError}
          required={required}
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
