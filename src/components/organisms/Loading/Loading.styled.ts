'use client';

import styled from '@emotion/styled';

interface LoadingStyledProps {
  frame: number;
  image: string;
  frameWidth: number;
}

export const Loading = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Sprite = styled.div<LoadingStyledProps>`
  width: ${({ frameWidth }) => frameWidth}px;
  height: ${({ frameWidth }) => frameWidth}px;

  background-color: transparent;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-position: ${({ frame, frameWidth }) => `-${frame * frameWidth}px 0`};
  background-size: ${({ frameWidth }) => `${frameWidth * 9}px auto`};
`;

export const Text = styled.p`
  position: absolute;
  top: 55%;
  color: ${({ theme }) => theme.semantic.label.neutral};
  ${({ theme }) => theme.typography.label1.regular};
`;
