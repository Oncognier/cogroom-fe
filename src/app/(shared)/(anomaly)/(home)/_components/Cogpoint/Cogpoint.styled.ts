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
  align-items: center;

  border-radius: ${({ theme }) => theme.radius[12]};
  ${({ theme }) => theme.shadow.emphasize};

  transition:
    transform 0.3s ease,
    z-index 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.07);
    z-index: 10;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};

  padding: 4.8rem 3rem 3rem;
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
`;

export const Content = styled.p`
  ${({ theme }) => theme.typography.label1.regular}
  color: ${({ theme }) => theme.semantic.label.alternative};
`;
