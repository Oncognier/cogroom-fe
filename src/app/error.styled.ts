'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

export const ErrorContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const Bubble = styled(Image)`
  position: absolute;
  top: 25%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ErrorCode = styled.p`
  ${({ theme }) => theme.typography.display1.bold};
  color: ${({ theme }) => theme.semantic.interaction.inactive};

  text-align: center;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title1.bold};
  color: ${({ theme }) => theme.semantic.static.white};

  text-align: center;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.static.white};

  text-align: center;
`;

export const Home = styled.button`
  position: absolute;
  right: 10%;
  bottom: 10%;

  ${({ theme }) => theme.typography.heading2.semibold};
  color: ${({ theme }) => theme.semantic.static.white};
  text-decoration: underline;
`;
