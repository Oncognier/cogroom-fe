import styled from '@emotion/styled';

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 2.4rem 3.2rem;

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

  text-align: center;

  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.normal};

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CheckboxCell = styled.div`
  width: 2.5rem;
`;

export const DayCell = styled(Cell)`
  display: flex;
  flex-direction: column;
`;

export const OtherCell = styled(Cell)`
  width: 11rem;
  flex: none;
`;

export const CountCell = styled(Cell)`
  width: 4rem;
  flex: none;
`;

export const ButtonCell = styled(Cell)`
  display: flex;
  justify-content: center;
`;
