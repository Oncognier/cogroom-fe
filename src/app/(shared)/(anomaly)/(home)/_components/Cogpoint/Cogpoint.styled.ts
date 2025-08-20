'use client';

import styled from '@emotion/styled';

import { mqMax, mqMin } from '@/styles/foundation';

export const Wrapper = styled.div`
  ${mqMin.tablet} {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

export const CardList = styled.section`
  display: none;
  justify-content: center;

  gap: 1.6rem;

  ${mqMin.tablet} {
    display: flex;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.6rem;

  width: 100%;
  height: 30rem;
  border-radius: 4rem;
  ${({ theme }) => theme.shadow.emphasize};

  background-color: ${({ theme }) => theme.semantic.background.elevated.normal};

  transition:
    transform 0.3s ease,
    z-index 0.3s ease;
  position: relative;

  padding: 3.2rem 4rem;

  &:hover {
    transform: scale(1.07);
  }

  ${mqMax.desktop} {
    gap: 0.9rem;
    width: 19.2rem;
    height: 16.7rem;
    padding: 1.8rem 2.2rem;
    border-radius: 2.2rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6rem;
  height: 6rem;

  padding: 1.6rem;

  box-shadow:
    0px 0px 1px rgba(0, 0, 0, 0.08),
    0px 1px 4px rgba(0, 0, 0, 0.08),
    0px 2px 8px rgba(232, 241, 255, 1);

  border-radius: 50%;
  background-color: ${({ theme }) => theme.semantic.background.normal.normal};

  ${mqMax.desktop} {
    width: 3.4rem;
    height: 3.4rem;
    padding: 0.6rem;
  }
`;

export const Icon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  color: ${({ theme }) => theme.semantic.primary.normal};

  ${mqMax.desktop} {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${mqMax.desktop} {
    gap: 0.7rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  ${mqMax.desktop} {
    gap: 0.2rem;
  }
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.primary.normal};

  ${mqMax.desktop} {
    ${({ theme }) => theme.typography.mini1.semibold};
  }
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline2.semibold};
  color: ${({ theme }) => theme.semantic.static.black};

  white-space: pre-line;

  ${mqMax.desktop} {
    ${({ theme }) => theme.typography.caption2.semibold};
  }
`;

export const Content = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  white-space: pre-line;

  ${mqMax.desktop} {
    ${({ theme }) => theme.typography.mini2.regular};
  }
`;
