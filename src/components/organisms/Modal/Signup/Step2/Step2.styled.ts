'use client';

import styled from '@emotion/styled';

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

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

const S = {
  TitleWrapper,
  SubTitle,
  Title,
  EmailForm,
};

export default S;
