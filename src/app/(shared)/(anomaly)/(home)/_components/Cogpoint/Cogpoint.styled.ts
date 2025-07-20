'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const CardList = styled.section`
  display: flex;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing[16]};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.4rem;

  width: 30rem;
  height: 30rem;
  border-radius: 4rem;
  ${({ theme }) => theme.shadow.emphasize};

  background-color: ${({ theme }) => theme.semantic.background.elevated.normal};

  transition:
    transform 0.3s ease,
    z-index 0.3s ease;
  position: relative;

  padding: 3.2rem;

  &:hover {
    transform: scale(1.07);
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
`;

export const Icon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  color: ${({ theme }) => theme.semantic.primary.normal};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.label1.semibold}
  color: ${({ theme }) => theme.semantic.primary.normal};
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline2.semibold}
  color: ${({ theme }) => theme.semantic.static.black};

  white-space: pre-line;
`;

export const Content = styled.p`
  ${({ theme }) => theme.typography.label1.regular}
  color: ${({ theme }) => theme.semantic.label.alternative};

  white-space: pre-line;
`;
