'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

type PopupContainerProps = {
  popupType?: string;
  variant?: 'top' | 'bottom';
};

export const PopupContainer = styled.div<PopupContainerProps>`
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  z-index: 9999;
  min-width: 16rem;
  background: ${({ theme }) => theme.semantic.background.normal.normal};
  border: 0.1rem solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadow.normal};

  ${mqMax.tablet} {
    ${({ popupType }) =>
      popupType === 'color' &&
      `
      left: 90%;
      transform: translateX(-90%);
    `}
  }
`;
