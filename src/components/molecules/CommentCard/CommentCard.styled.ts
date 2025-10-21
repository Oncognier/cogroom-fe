'use client';

import styled from '@emotion/styled';

export const CommentCard = styled.div`
  display: flex;
  gap: 1rem;

  width: 100%;
`;

export const CommentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 3.6rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const Nickname = styled.p<{ $isActive: boolean }>`
  ${({ theme, $isActive }) => ($isActive ? theme.typography.label1.semibold : theme.typography.label2.semibold)};
  color: ${({ theme, $isActive }) => ($isActive ? theme.semantic.label.normal : theme.semantic.label.alternative)};
`;

export const MetaText = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.interaction.inactive};
`;

export const CommentBody = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  width: 100%;
  padding: 2rem 1.4rem;
  border-radius: 2rem;
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.palette.blue[99] : theme.palette.coolNeutral[99])};
`;

export const Content = styled.p<{ $isActive: boolean; $showFullContent?: boolean }>`
  ${({ theme }) => theme.typography.body1.regular};
  color: ${({ theme, $isActive }) => ($isActive ? theme.semantic.label.normal : theme.palette.coolNeutral[70])};
  white-space: pre-wrap;
  word-wrap: break-word;

  ${({ $showFullContent }) =>
    !$showFullContent &&
    `
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; 
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const LikeButton = styled.div`
  display: flex;
  align-items: center;

  gap: 0.4rem;
  cursor: pointer;
`;

export const LikeIcon = styled.div<{ $isLiked: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme, $isLiked }) =>
    $isLiked ? theme.semantic.background.elevated.alternative : theme.palette.coolNeutral[80]};
`;

export const LikeCount = styled.span`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.interaction.inactive};
`;

export const ReplyButton = styled.button`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.palette.coolNeutral[40]};

  &:hover {
    color: ${({ theme }) => theme.semantic.label.normal};
  }
`;

export const ShowMoreButton = styled.button`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.interaction.inactive};

  float: right;
  cursor: pointer;
`;
