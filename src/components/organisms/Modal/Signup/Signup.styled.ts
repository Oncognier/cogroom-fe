'use client';

import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[32]};

  width: 40.7rem;
  height: 45rem;
  padding: 0 6rem;
  background-color: ${({ theme }) => theme.semantic.background.normal.normal};
  border-radius: ${({ theme }) => theme.radius[8]};
`;

const Close = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

const S = {
  Container,
  Close,
};

export default S;
