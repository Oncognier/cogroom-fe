'use client';

import { forwardRef, useEffect, useRef, ComponentProps } from 'react';

import FormStatusMessage from '@/components/atoms/FormStatusMessage/FormStatusMessage';
import { FormStatusMessageStatus } from '@/components/atoms/FormStatusMessage/FormStatusMessage.styled';
import InputLabel from '@/components/atoms/InputLabel/InputLabel';
import { VALIDATION_TYPE } from '@/constants/validationMessages';
import { parseErrorMessage } from '@/utils/parseErrorMessage';

import * as S from './Textarea.styled';
import type { TextareaStyleProps } from './Textarea.styled';

interface TextareaProps extends ComponentProps<'textarea'>, TextareaStyleProps {
  label?: string;
  error?: string;
  isDisabled?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, textareaSize, required, isDisabled, error, width, minHeight, autoResize, ...props }, ref) => {
    const { type: errorType, message: errorMessage } = parseErrorMessage(error);
    const hasError = !!errorType;

    const showNormalError = errorType === VALIDATION_TYPE.NORMAL && errorMessage;
    const showStatusMessage =
      errorMessage &&
      errorType &&
      errorType !== VALIDATION_TYPE.NORMAL &&
      Object.values(VALIDATION_TYPE).includes(errorType);

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      if (autoResize && textareaRef.current) {
        const el = textareaRef.current;
        el.style.height = 'auto'; // reset height
        el.style.height = `${el.scrollHeight}px`; // set new height
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
