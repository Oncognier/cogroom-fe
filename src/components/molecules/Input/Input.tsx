import { ComponentProps } from 'react';

import XCircle from '@/assets/icons/xcircle-fill.svg';
import FormStatusMessage from '@/components/atoms/FormStatusMessage/FormStatusMessage';
import { FormStatusMessageStatus } from '@/components/atoms/FormStatusMessage/FormStatusMessage.styled';
import InputLabel from '@/components/atoms/InputLabel/InputLabel';

import S, { InputStyleProps } from './Input.styled';

interface InputProps extends ComponentProps<'input'>, InputStyleProps {
  label?: string;
  errorMessage?: string;
  errorStatus?: FormStatusMessageStatus;
  error?: string;
  isDisabled?: boolean;
  onClear?: () => void;
}

export default function Input({
  label,
  value,
  onChange,
  inputSize,
  required,
  isDisabled,
  errorMessage,
  errorStatus,
  error,
  onClear,
  ...props
}: InputProps) {
  const hasError = !!error || !!errorMessage;
  const hasValue = Boolean(value);

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
          inputSize={inputSize}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          isError={hasError}
          required={required}
          {...props}
        />
        {hasError && (
          <S.RemoveButton
            type='button'
            onClick={onClear}
            aria-label='입력값 지우기'
          >
            <XCircle />
          </S.RemoveButton>
        )}
      </S.InputWrapper>

      {errorMessage && <S.Error>{errorMessage}</S.Error>}

      {error && (
        <FormStatusMessage
          status={errorStatus}
          label={error}
        />
      )}
    </S.Container>
  );
}
