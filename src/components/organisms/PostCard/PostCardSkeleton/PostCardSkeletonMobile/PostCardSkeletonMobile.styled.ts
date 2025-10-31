import styled from '@emotion/styled';

export const PostCardSkeletonMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.common[0]};
`;

export const Body = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    width: 2rem !important;
    height: 2rem !important;
    color: ${({ theme }) => theme.semantic.line.normal};
  }
`;
