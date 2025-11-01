import styled from '@emotion/styled';

export const PostCardSkeletonDesktop = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 1.6rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 2.2rem;
`;

export const ThumbnailWrapper = styled.div`
  flex-shrink: 0;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  padding: 0.44rem 0;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2.4rem;
`;

export const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-bottom: 0.2rem;
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

export const Aside = styled.div`
  height: 7.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.4rem;
`;

export const SideMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
`;
