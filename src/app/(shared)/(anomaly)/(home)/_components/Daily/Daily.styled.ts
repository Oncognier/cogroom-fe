'use client';

import styled from '@emotion/styled';

export const DailyHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const DailyTitle = styled.p`
  ${({ theme }) => theme.typography.title2.bold}
`;

export const DailySubTitle = styled.p`
  ${({ theme }) => theme.typography.body1.regular}
`;

export const Wrapper = styled.div`
  position: relative;
  height: 50rem;
`;

export const Video = styled.video`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const DimmedOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.semantic.background.dimmer.normal};
  z-index: 0;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;

  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;

  padding: ${({ theme }) => theme.spacing[40]} 2rem;
  gap: ${({ theme }) => theme.spacing[40]};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
  width: 100%;

  color: ${({ theme }) => theme.semantic.static.white};
  z-index: 1;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.title1.bold}
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typography.headline1.regular}
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[24]};
  justify-content: center;

  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  color: ${({ theme }) => theme.semantic.static.white};
  z-index: 1;
`;

export const Question = styled.p`
  display: flex;
  padding: ${({ theme }) => theme.spacing[24]} ${({ theme }) => theme.spacing[32]};
  width: fit-content;
  align-items: center;

  ${({ theme }) => theme.typography.headline2.semibold}
  color: ${({ theme }) => theme.semantic.primary.heavy};

  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 24px 0px rgba(61, 97, 149, 0.2);
  backdrop-filter: blur(15px);
`;

export const LeftQuestion = styled.div`
  display: flex;
  justify-content: start;
`;

export const RightQuestion = styled.div`
  display: flex;
  justify-content: end;
`;

export const CenterQuestion = styled.div`
  display: flex;
  justify-content: end;
  text-align: center;

  max-width: 760px;
  width: 100%;
  margin: 0 auto;
`;
