import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const LoadingIcon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  color: ${({ theme }) => theme.palette.blue[80]};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 100%;
    height: 100%;
    transform-origin: center;
    animation: ${spin} 1s linear infinite;
    will-change: transform;
  }
`;
