'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

export const Wrapper = styled.div`
  position: relative;
  max-width: 1060px;
  width: 100%;
  height: 24rem;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;
`;

export const CommunityImage = styled(Image)`
  object-fit: cover;
  z-index: -1;

  border-radius: ${({ theme }) => theme.radius[12]};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[24]};
  margin-left: 16rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing[8]};
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title2.bold}
  color: ${({ theme }) => theme.semantic.primary.normal};
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typography.body1.semibold}
  color: ${({ theme }) => theme.semantic.primary.normal};
`;

export const Content = styled.div`
  ${({ theme }) => theme.typography.body2.regular}
  color: ${({ theme }) => theme.semantic.label.neutral};
`;
