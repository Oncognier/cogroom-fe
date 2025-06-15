import AlertCircleFill from '@/assets/icons/alertcircle-fill.svg';

import * as S from './FormStatusMessage.styled';
import type { FormStatusMessageStyleProps } from './FormStatusMessage.styled';

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
