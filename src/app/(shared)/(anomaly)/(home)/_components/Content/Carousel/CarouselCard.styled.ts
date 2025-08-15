'use client';

import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

export type GradientColor = 'black' | 'primary';

export interface CarouselCardStyleProps {
  gradientColor?: GradientColor;
}

export const CarouselCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2.4rem;
  width: 34rem;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  position: relative;

  width: 34rem;
  height: 17rem;
  padding: 2rem;
  border-radius: 1.2rem;
  overflow: hidden;
`;

const gradientStyles: Record<GradientColor, () => SerializedStyles> = {
  black: () => css`
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  `,
  primary: () => css`
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(70, 119, 200, 1) 100%);
  `,
};

export const Overlay = styled.div<{ gradientColor?: GradientColor }>`
  position: absolute;
  inset: 0;
  z-index: 1;

  ${({ gradientColor = 'black' }) => gradientStyles[gradientColor]()};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  width: 100%;
`;

export const HeroTitle = styled.p`
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  z-index: 2;

  ${({ theme }) => theme.typography.title2.bold};
  color: ${({ theme }) => theme.semantic.static.white};

  text-align: center;
  white-space: pre-line;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline2.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Content = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const Badge = styled.span`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  z-index: 2;

  padding: 0.4rem 1.2rem;
  ${({ theme }) => theme.typography.label2.regular};
  border: 1px solid ${({ theme }) => theme.semantic.primary.normal};
  border-radius: 999px;
  background-color: ${({ theme }) => theme.semantic.background.normal.normal};
  color: ${({ theme }) => theme.semantic.primary.normal};
`;
