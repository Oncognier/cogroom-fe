'use client';

import styled from '@emotion/styled';

const EmailForm = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing[16]};

  width: 100%;
`;

const ButtonWrapper = styled.div`
  margin: 0.3rem 0;
`;

const S = {
  EmailForm,
  ButtonWrapper,
};

export default S;
