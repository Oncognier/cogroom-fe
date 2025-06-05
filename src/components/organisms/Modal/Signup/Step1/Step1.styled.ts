'use client';

import styled from '@emotion/styled';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]};
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};

  padding-bottom: ${({ theme }) => theme.spacing[4]};
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.typography.body1.medium};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.typography.title3.bold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

const EmailWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[8]};

  width: 100%;
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[32]};
  border: 1px solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 1000px;
`;

const KakaoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 0.6rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.brandColors.kakao};
`;

const Email = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const S = {
  TextWrapper,
  TitleWrapper,
  SubTitle,
  Title,
  EmailWrapper,
  KakaoIcon,
  Email,
  ButtonWrapper,
};

export default S;
