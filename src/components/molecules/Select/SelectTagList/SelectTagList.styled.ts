'use client';

import styled from '@emotion/styled';

export const SelectTagList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
