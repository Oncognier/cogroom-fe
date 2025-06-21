'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  bottom: 3.4rem;
  left: 50%;
  transform: translateX(-50%);

  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[40]} 2rem 0;

  z-index: 99;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};

  padding: 0 7rem;
  width: 100%;
  height: 8.5rem;

  background-color: ${({ theme }) => theme.semantic.primary.normal};
  border-radius: ${({ theme }) => theme.radius[20]};
`;

export const TextWrapper = styled.div`
  ${({ theme }) => theme.typography.body1.semibold}
  color: ${({ theme }) => theme.semantic.static.white};
`;

export const ButtonWrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 1.1rem 2.3rem;

  border-radius: ${({ theme }) => theme.radius[12]};
  border: 1px solid ${({ theme }) => theme.semantic.label.assistive};
  background-color: ${({ theme }) => theme.semantic.static.white};
  color: ${({ theme }) => theme.semantic.label.normal};

  ${({ theme }) => theme.typography.body2.semibold};

  &:focus {
    outline: none;
  }

  &:disabled {
    border-color: ${({ theme }) => theme.semantic.label.assistive};
    color: ${({ theme }) => theme.semantic.label.assistive};
    cursor: default;
    pointer-events: none;
  }
`;
