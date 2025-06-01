import { ComponentProps } from 'react';

import FormStatusMessage from '@/components/atoms/FormStatusMessage/FormStatusMessage';
import { FormStatusMessageStatus } from '@/components/atoms/FormStatusMessage/FormStatusMessage.styled';
import InputLabel from '@/components/atoms/InputLabel/InputLabel';

import S from './Textarea.styled';

interface TextareaProps extends ComponentProps<'textarea'> {
  label?: string;
  errorMessage?: string;
  errorStatus?: FormStatusMessageStatus;
  error?: string;
  isDisabled?: boolean;
  onClear?: () => void;
}

export default function Textarea({
  label,
  value,
  onChange,
  required,
  isDisabled,
  errorMessage,
  errorStatus,
  error,
  ...props
}: TextareaProps) {
  const hasError = !!error || !!errorMessage;

  return (
    <S.Container>
      {label && (
        <InputLabel
          label={label}
          required={required}
        />
      )}

      <S.Textarea
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        isError={hasError}
        required={required}
        {...props}
      />

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
