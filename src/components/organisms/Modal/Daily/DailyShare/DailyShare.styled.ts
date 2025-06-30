'use client';

import styled from '@emotion/styled';

export const DailyShare = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 18.2rem;

  border-radius: 1.2rem;
  overflow: hidden;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title3.regular};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const Highlight = styled.span`
  ${({ theme }) => theme.typography.title3.bold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  width: 100%;
`;

export const KakaoShareButton = styled.button`
  width: 3.78rem;
  height: 3.78rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.brandColors.kakao};
  padding: 0.65rem 0.53rem;
`;
