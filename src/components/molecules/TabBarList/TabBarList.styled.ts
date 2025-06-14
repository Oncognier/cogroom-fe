'use client';

import styled from '@emotion/styled';

export const Container = styled.div<{ fillContainer?: boolean }>`
  display: flex;
  ${({ fillContainer }) => fillContainer && 'width: 100%;'}
  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.neutral};
`;
