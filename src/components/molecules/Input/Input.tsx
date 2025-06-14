'use client';

import { forwardRef } from 'react';

import XCircle from '@/assets/icons/xcircle-fill.svg';
import FormStatusMessage from '@/components/atoms/FormStatusMessage/FormStatusMessage';
import { FormStatusMessageStatus } from '@/components/atoms/FormStatusMessage/FormStatusMessage.styled';
import InputLabel from '@/components/atoms/InputLabel/InputLabel';

import * as S from './Input.styled';
import type { InputStyleProps } from './Input.styled';

interface InputProps extends InputStyleProps {
  label?: string;
  error?: string;
  isDisabled?: boolean;
  onClear?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ label, inputSize, required, isDisabled, error, onClear, width, ...props }, ref) => {
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

        <S.InputWrapper>
          <S.Input
            ref={ref}
            inputSize={inputSize}
            width={width}
            disabled={isDisabled}
            isError={hasError}
            required={required}
            {...props}
          />

          {hasError && onClear && (
            <S.RemoveButton
              type='button'
              onClick={onClear}
              aria-label='입력값 지우기'
            >
              <XCircle />
            </S.RemoveButton>
          )}
        </S.InputWrapper>

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

Input.displayName = 'Input';

export default Input;
