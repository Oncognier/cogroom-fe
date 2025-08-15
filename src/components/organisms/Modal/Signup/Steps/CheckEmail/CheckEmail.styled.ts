'use client';

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

export const KakaoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 0.6rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.brandColors.kakao};
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
