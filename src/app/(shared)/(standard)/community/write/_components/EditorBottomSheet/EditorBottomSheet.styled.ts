'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.semantic.line.normal};
`;

export const ToolbarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem 0;
`;

export const ToolbarRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
`;

export const LinkModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

export const LinkModalContainer = styled.div`
  background: ${({ theme }) => theme.semantic.background.normal.normal};
  border-radius: 1.2rem;
  padding: 2rem;
  margin: 2rem;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
`;
