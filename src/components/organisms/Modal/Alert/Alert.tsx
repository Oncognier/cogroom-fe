'use client';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './Alert.styled';

export interface AlertProps {
  message: string;
  type?: 'alert' | 'confirm';
  onConfirm?: () => void;
  confirmText?: string;
  onCancel?: () => void;
  cancelText?: string;
}

export default function Alert({
  message,
  type = 'alert',
  onConfirm,
  confirmText = '확인',
  onCancel,
  cancelText = '취소',
}: AlertProps) {
  const { close } = useAlertModalStore();

  const isConfirm = type === 'confirm';

  const handleConfirm = () => {
    close();
    onConfirm?.();
  };

  const handleCancel = () => {
    close();
    onCancel?.();
  };

  return (
    <S.Alert>
      <S.Title>{message}</S.Title>

      {isConfirm ? (
        <S.ButtonGroup>
          {onCancel && (
            <SolidButton
              label={cancelText}
              size='sm'
              color='primary'
              interactionVariant='normal'
              onClick={handleCancel}
            />
          )}
          <SolidButton
            label={confirmText}
            size='sm'
            color='primary'
            interactionVariant='normal'
            onClick={handleConfirm}
          />
        </S.ButtonGroup>
      ) : (
        <OutlinedButton
          label={confirmText}
          size='sm'
          color='assistive'
          interactionVariant='normal'
          onClick={handleConfirm}
          fillContainer
        />
      )}
    </S.Alert>
  );
}
