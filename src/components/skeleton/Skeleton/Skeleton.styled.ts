import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Shimmer = styled.span`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.semantic.fill.normal} 25%,
    ${({ theme }) => theme.semantic.static.white} 37%,
    ${({ theme }) => theme.semantic.fill.normal} 63%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
  display: inline-block;
`;

export const SkeletonLine = styled(Shimmer)<{
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
}>`
  height: ${({ height }) => height || '1.5rem'};
  width: ${({ width }) => width || '100%'};
  margin: ${({ margin }) => margin || '0'};
  border-radius: ${({ borderRadius }) => borderRadius || '1rem'};
  display: inline-block;
`;
