import styled from '@emotion/styled';

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const AuthorSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.semantic.line.normal};
`;

export const ContentSection = styled.div`
  margin-bottom: 2rem;
`;

export const DailyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const LikesSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  gap: 1.6rem;
`;
