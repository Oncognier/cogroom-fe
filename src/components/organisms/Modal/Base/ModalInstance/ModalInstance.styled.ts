'use client';

import styled from '@emotion/styled';

export const ModalOverlay = styled.dialog<{ $zIndex: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ $zIndex }) => $zIndex};

  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.semantic.background.normal.normal};

  padding: 0;
  width: fit-content;
  height: fit-content;

  &::backdrop {
    background-color: ${({ theme }) => theme.semantic.fill.dimmer};
  }
`;
