'use client';

import styled from '@emotion/styled';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};

  padding-bottom: ${({ theme }) => theme.spacing[4]};
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
  gap: ${({ theme }) => theme.spacing[8]};

  width: 100%;
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[32]};
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
  gap: ${({ theme }) => theme.spacing[8]};
`;
