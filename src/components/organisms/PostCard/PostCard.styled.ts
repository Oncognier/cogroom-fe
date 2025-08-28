'use client';

import styled from '@emotion/styled';

export const PostCard = styled.div`
  display: flex;
  gap: 2.2rem;

  width: 100%;
`;

export const ThumbnailWrapper = styled.div`
  flex-shrink: 0;

  width: 17.4rem;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-width: 0;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2.4rem;

  min-width: 0;
`;

export const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  min-width: 0;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const Nickname = styled.p`
  ${({ theme }) => theme.typography.caption2.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline2.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
  min-width: 0;
  max-width: 36.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  padding-bottom: 0.6rem;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex-shrink: 0;
`;

export const SideMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
`;

export const MetaText = styled.div`
  ${({ theme }) => theme.typography.caption1.regular};
  color: ${({ theme }) => theme.semantic.interaction.inactive};
`;
