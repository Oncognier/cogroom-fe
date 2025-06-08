import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[32]};

  width: 40.7rem;
  height: 45rem;
  padding: 0 6rem;
  background-color: ${({ theme }) => theme.semantic.background.normal.normal};
  border-radius: ${({ theme }) => theme.radius[8]};
`;

export const Close = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[16]};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
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

export const Description = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  text-align: center;
`;
