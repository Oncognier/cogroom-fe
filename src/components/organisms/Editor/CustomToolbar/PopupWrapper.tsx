'use client';

import { ReactNode, useEffect, useRef } from 'react';

type PopupWrapperProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function PopupWrapper({ children, onClose }: PopupWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return <div ref={ref}>{children}</div>;
}
