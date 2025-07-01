'use client';

import styled from '@emotion/styled';

export const ChangeRole = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.semantic.label.neutral};

  text-align: center;
`;

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
  padding: 1.6rem 6rem;
  border: 1px solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 1.2rem;
`;

export const RadioRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const RoleLabel = styled.p`
  ${({ theme }) => theme.typography.label2.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  width: 100%;
`;
