'use client';

import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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

export const Description = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

// 포트원 심사용
export const AdminLogin = styled.form`
  display: flex;
  gap: 1.2rem;
`;

export const AdminInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 18.9rem;
`;

export const AdminButton = styled.button`
  width: 8.5rem;
  height: 100%;
  ${({ theme }) => theme.typography.body1.semibold};
  background-color: ${({ theme }) => theme.semantic.primary.normal};
  border-radius: 1.2rem;
  color: ${({ theme }) => theme.semantic.static.white};
`;
// 여기까지 제거
