'use client';

import styled from '@emotion/styled';

export const CommunityListRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8.1rem;

  width: 100%;
  padding: 2.4rem 3.2rem;
`;

export const UniqueId = styled.p`
  width: 8rem;
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Title = styled.p<{ $destructive?: boolean }>`
  ${({ theme }) => theme.typography.body2.medium};
  color: ${({ theme, $destructive }) =>
    $destructive ? theme.semantic.status.destructive : theme.semantic.label.normal};

  max-width: 36.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Icon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const PostTitle = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  max-width: 36.7rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MetaInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const MemberInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;

  width: 10rem;
`;

export const Nickname = styled.p`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const CreatedAt = styled.p`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.normal};

  width: 10rem;
  text-align: center;
`;
