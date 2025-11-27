import styled from '@emotion/styled';

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 3rem;

  height: 4.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};

  &:last-child {
    border-bottom: none;
  }
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const StatusText = styled.span<{ isError: boolean }>`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ isError, theme }) => (isError ? theme.semantic.status.destructive : theme.semantic.label.normal)};
`;

export const Box = styled.div`
  height: 100%;
  width: 1.5rem;
`;
