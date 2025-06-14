'use client';

import { forwardRef, ComponentProps } from 'react';

import FormStatusMessage from '@/components/atoms/FormStatusMessage/FormStatusMessage';
import { FormStatusMessageStatus } from '@/components/atoms/FormStatusMessage/FormStatusMessage.styled';
import InputLabel from '@/components/atoms/InputLabel/InputLabel';
import { VALIDATION_TYPE } from '@/constants/validationMessages';
import { parseErrorMessage } from '@/utils/parseErrorMessage';

import S from './Textarea.styled';

interface TextareaProps extends ComponentProps<'textarea'> {
  label?: string;
  error?: string;
  isDisabled?: boolean;
  width?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, required, isDisabled, error, width, ...props }, ref) => {
    const { type: errorType, message: errorMessage } = parseErrorMessage(error);
    const hasError = !!errorType;

    const showNormalError = errorType === VALIDATION_TYPE.NORMAL && errorMessage;
    const showStatusMessage =
      errorMessage &&
      errorType &&
      errorType !== VALIDATION_TYPE.NORMAL &&
      Object.values(VALIDATION_TYPE).includes(errorType);

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
          width={width}
          {...props}
        />

        {showNormalError && <S.Error>{errorMessage}</S.Error>}

        {showStatusMessage && (
          <FormStatusMessage
            status={errorType as FormStatusMessageStatus}
            label={errorMessage}
          />
        )}
      </S.Container>
    );
  },
);

Textarea.displayName = 'Textarea';

export default Textarea;
