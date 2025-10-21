'use client';

import styled from '@emotion/styled';

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;

  padding-bottom: 1.6rem;
`;

export const CommentFirstBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  position: relative;
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export const DotsIcon = styled.svg`
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const MenuDropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  width: 15rem;
`;

export const CommentContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  align-items: center;
`;

export const FooterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.palette.coolNeutral[40]};

  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  &:hover {
    color: ${({ theme }) => theme.semantic.label.normal};
  }
`;

export const ReplyFieldContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 2.4rem;
`;

export const LikeButton = styled.div`
  display: flex;
  flex-direction: row;
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

export const ChilrenWrpper = styled.div`
  width: 100%;
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  padding-top: 1.6rem;
`;

export const EditFieldWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.59rem;
  align-items: start;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  align-items: center;

  width: 100%;
`;

export const CommentSecondBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
`;

export const AuthorInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 3.7rem;
`;

export const LikesWithReplyBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ReplyCountButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.static.black};

  background: none;
  border: none;
  cursor: pointer;
  padding-top: 2.4rem;
`;

export const ChevronIcon = styled.div<{ $isExpanded: boolean }>`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.semantic.static.black};
  transform: ${({ $isExpanded }) => ($isExpanded ? 'rotate(90deg)' : 'rotate(0deg)')};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CollapseButton = styled.button`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.palette.coolNeutral[40]};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme.semantic.label.normal};
  }
`;

export const ShowMoreButton = styled.button`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.interaction.inactive};

  cursor: pointer;
  float: right;
`;
