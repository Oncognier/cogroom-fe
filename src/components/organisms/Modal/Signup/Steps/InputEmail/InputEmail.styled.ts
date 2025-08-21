'use client';

import styled from '@emotion/styled';

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

export const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
