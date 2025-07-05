'use client';

import { useState, useRef } from 'react';

export function useDropdown(onBlurCallback?: () => void) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!dropdownRef.current?.contains(event.relatedTarget)) {
      setIsOpen(false);
      onBlurCallback?.();
    }
  };

  return { isOpen, toggle, close, handleBlur, dropdownRef };
}
