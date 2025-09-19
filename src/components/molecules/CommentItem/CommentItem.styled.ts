'use client';

import styled from '@emotion/styled';

export const CommentItemWrapper = styled.div<{ $isChild?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;

  padding-bottom: 1.6rem;
  border-bottom: ${({ $isChild, theme }) => ($isChild ? 'none' : `1px solid ${theme.semantic.line.normal}`)};
`;

export const CommentCotent = styled.div<{ $isChild: boolean; $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: ${({ $isActive }) => ($isActive ? 'flex-start' : 'center')};
  align-items: ${({ $isActive }) => ($isActive ? 'flex-start' : 'center')};

  width: ${({ $isChild, $isActive }) => (!$isActive ? '100%' : $isChild ? '69.7rem' : '74.6rem')};
  height: 100%;
  padding: 2rem 1.4rem;

  ${({ theme }) => theme.typography.body1.regular};
  background-color: ${({ theme, $isActive }) => ($isActive ? theme.palette.blue[99] : theme.palette.coolNeutral[99])};
  color: ${({ theme, $isActive }) => ($isActive ? theme.semantic.label.normal : theme.palette.coolNeutral[70])};
  white-space: pre-wrap;
  word-wrap: break-word;

  border-radius: 2rem;
`;

export const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.8rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const AvatarWrapper = styled.div<{ $isClickable: boolean }>`
  * {
    cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')} !important;
  }
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
`;

export const AuthorName = styled.span<{ $isActive: boolean; $isClickable?: boolean }>`
  ${({ theme }) => theme.typography.label2.semibold};
  color: ${({ theme, $isActive }) => ($isActive ? theme.semantic.label.normal : theme.semantic.label.alternative)};
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};
`;

export const CommentTime = styled.span`
  ${({ theme }) => theme.typography.caption1.regular};
  color: ${({ theme }) => theme.semantic.interaction.inactive};
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

export const CommentFooter = styled.div`
  width: 100%;
`;

export const FooterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.interaction.inactive};

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
  align-items: start;
  gap: 2.4rem;

  margin-top: 0.8rem;
`;

export const LikeButton = styled.div`
  display: flex;
  flex-direction: column;
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

export const ArrowIcon = styled.div`
  color: ${({ theme }) => theme.palette.blue[80]};

  svg {
    color: ${({ theme }) => theme.palette.blue[80]};
    width: 2.4rem;
    height: 2.4rem;
  }
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
