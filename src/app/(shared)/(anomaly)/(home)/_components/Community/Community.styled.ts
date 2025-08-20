'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 1060px;
  width: 100%;
  height: 24rem;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;
`;

export const CommunityImage = styled(Image)`
  object-fit: cover;
  object-position: left center;
  z-index: -1;

  border-radius: 1.2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title2.bold}
  color: ${({ theme }) => theme.semantic.primary.normal};

  text-align: center;
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typography.body1.semibold}
  color: ${({ theme }) => theme.semantic.primary.normal};

  text-align: center;
`;

export const Content = styled.div`
  ${({ theme }) => theme.typography.body2.regular}
  color: ${({ theme }) => theme.semantic.label.neutral};

  text-align: center;
`;
