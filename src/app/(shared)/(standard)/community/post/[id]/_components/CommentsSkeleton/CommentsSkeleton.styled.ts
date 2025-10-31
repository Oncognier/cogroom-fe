import styled from '@emotion/styled';

export const CommentsContainer = styled.div`
  margin-top: 2rem;
`;

export const CommentHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const CommentInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding-top: 2.4rem;
`;

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  justify-content: space-between;
`;

export const CommentAuthorLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  align-items: center;
`;

export const CommentAuthorInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const CommentActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

export const LikeIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.semantic.line.normal};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const MenuIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  color: ${({ theme }) => theme.semantic.label.alternative};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CommentDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.semantic.line.normal};
  margin-top: 1.6rem;
`;
