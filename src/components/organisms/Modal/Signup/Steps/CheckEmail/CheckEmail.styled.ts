'use client';

import { Theme, css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding-bottom: 0.4rem;
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typography.body1.medium};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title3.bold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const EmailWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;

  width: 100%;
  padding: 0.8rem 3.2rem;
  border: 1px solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 1000px;
`;

const providerStyles: Record<string, (theme: Theme) => SerializedStyles> = {
  KAKAO: (theme) => css`
    background-color: ${theme.brandColors.kakao};
    padding: 0.6rem;
  `,
  NAVER: (theme) => css`
    background-color: ${theme.brandColors.naver};
    padding: 0.6rem;
  `,
  GOOGLE: (theme) => css`
    background-color: ${theme.semantic.static.white};
    border: 1px solid ${theme.brandColors.google};
    padding: 0.5rem;
  `,
};

export const BrandIcon = styled.div<{ provider: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  ${({ theme, provider }) => providerStyles[provider]?.(theme)};
`;

export const Email = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
