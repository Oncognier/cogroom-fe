'use client';

import AlertCircleFill from '@/assets/icons/alertcircle-fill.svg';

import S, { FormStatusMessageStyleProps } from './FormStatusMessage.styled';

interface FormStatusMessageProp extends FormStatusMessageStyleProps {
  label: string;
}

export default function FormStatusMessage({ status, label }: FormStatusMessageProp) {
  return (
    <S.FormStatusMessage status={status}>
      <AlertCircleFill />
      {label}
    </S.FormStatusMessage>
  );
}
