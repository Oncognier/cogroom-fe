'use client';

import styled from '@emotion/styled';

export const PostAuthorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
  align-items: center;
`;

export const AvatarWrapper = styled.div<{ $isClickable: boolean }>`
  * {
    cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')} !important;
  }
`;

export const PostUserName = styled.span`
  ${({ theme }) => theme.typography.label2.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const DotsIcon = styled.svg`
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 15rem;
  background: ${({ theme }) => theme.semantic.background.normal};
  border: 1px solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;
`;

export const MenuDropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;

  width: 15rem;
`;
