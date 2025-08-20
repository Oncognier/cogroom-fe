'use client';

import { mqMax } from '@/styles/foundation';
import styled from '@emotion/styled';
import Image from 'next/image';

export const Wrapper = styled.div`
  position: relative;
  height: 50rem;
  margin-top: 6.8rem;
`;

export const DailyImage = styled(Image)`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title1.bold}
  color: ${({ theme }) => theme.semantic.static.white};

  text-align: center;
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typography.headline1.regular};
  color: ${({ theme }) => theme.semantic.static.white};

  text-align: center;
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  gap: 2.4rem;
`;

export const Question = styled.p`
  width: fit-content;
  text-align: center;

  border-radius: 999px;
  padding: 2.4rem 3.2rem;
  background-color: rgba(255, 255, 255, 0.8);
  ${({ theme }) => theme.typography.headline2.semibold}
  color: ${({ theme }) => theme.semantic.primary.heavy};
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: end;
`;

export const CenterSide = styled.div`
  display: flex;
  justify-content: end;

  margin-right: 12rem;

  ${mqMax.tablet} {
    display: none;
  }
`;
