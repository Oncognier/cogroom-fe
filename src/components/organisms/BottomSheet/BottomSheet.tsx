'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import * as S from './BottomSheet.styled';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function BottomSheet({ isOpen, onClose, children, title }: BottomSheetProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <S.BottomSheetOverlay onClick={onClose}>
      <S.BottomSheetContainer
        onClick={(e) => e.stopPropagation()}
        isOpen={isOpen}
      >
        <S.TitleSection>
          <S.HandleBar />
          <S.Title>{title || ''}</S.Title>
        </S.TitleSection>

        {children}
      </S.BottomSheetContainer>
    </S.BottomSheetOverlay>,
    document.body,
  );
}
