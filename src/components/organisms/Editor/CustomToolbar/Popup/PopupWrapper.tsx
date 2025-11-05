'use client';

import { ReactNode } from 'react';

import { useDropdown } from '@/hooks/useDropdown';

import { PopupContainer } from './PopupWrapper.styled';

type PopupWrapperProps = {
  children: ReactNode;
  onClose: () => void;
  popupType?: string;
  variant?: 'top' | 'bottom';
};

export default function PopupWrapper({ children, onClose, popupType, variant }: PopupWrapperProps) {
  const { dropdownRef, handleBlur } = useDropdown(onClose);

  return (
    <PopupContainer
      ref={dropdownRef}
      onBlur={handleBlur}
      tabIndex={-1}
      popupType={popupType}
      variant={variant}
    >
      {children}
    </PopupContainer>
  );
}
