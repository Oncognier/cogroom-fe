'use client';

import styled from '@emotion/styled';

type ButtonProps = {
  isActive?: boolean;
};

type ColorPreviewProps = {
  color: string;
};

type AlignIconProps = {
  type: 'left' | 'center' | 'right';
};

type ListIconProps = {
  type: 'bullet' | 'ordered';
};

export const ToolbarWrapper = styled.div`
  position: relative;
  border-bottom: 0.1rem solid ${({ theme }) => theme.semantic.line.neutral};
  background: ${({ theme }) => theme.semantic.background.normal.normal};
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

export const ToolbarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  position: relative;
  min-width: fit-content;
  padding: 0 0.4rem;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.1rem;
    height: 2rem;
    background: ${({ theme }) => theme.semantic.label.assistive};
    border-radius: 0.05rem;
  }
`;

export const ToolbarButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  border-radius: 0.4rem;
  background: ${({ theme, isActive }) => (isActive ? theme.semantic.interaction.inactive : 'transparent')};
  color: ${({ theme }) => theme.semantic.label.normal};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme, isActive }) =>
      isActive ? theme.semantic.interaction.inactive : theme.semantic.background.normal.alternative};
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const DropdownButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1rem;
  height: 3.2rem;
  border: none;
  border-radius: 0.4rem;
  background: ${({ theme, isActive }) =>
    isActive ? theme.semantic.background.normal.alternative : theme.semantic.background.normal.normal};
  color: ${({ theme }) => theme.semantic.label.normal};
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: transparent;
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: transform 0.2s ease;
    transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const MediaIcon = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background: ${({ theme }) => theme.semantic.label.normal};
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' d='m21 16-4-4-6 6-4-4-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11z'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3C/svg%3E")
    center/contain no-repeat;
`;

export const BoldText = styled.span`
  font-weight: bold;
  font-size: 2rem;
`;

export const ItalicText = styled.span`
  font-style: italic;
  font-size: 2rem;
`;

export const UnderlineText = styled.span`
  text-decoration: underline;
  font-size: 2rem;
`;

export const StrikeText = styled.span`
  text-decoration: line-through;
  font-size: 2rem;
`;

export const AlignIcon = styled.div<AlignIconProps>`
  width: 2.4rem;
  height: 2.4rem;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: currentColor;
    mask-image: ${({ type }) => {
      switch (type) {
        case 'left':
          return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M3 6h18M3 12h12M3 18h18'/%3E%3C/svg%3E\")";
        case 'center':
          return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M3 6h18M6 12h12M3 18h18'/%3E%3C/svg%3E\")";
        case 'right':
          return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M3 6h18M9 12h12M3 18h18'/%3E%3C/svg%3E\")";
        default:
          return '';
      }
    }};
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
  }
`;

export const ListIcon = styled.div<ListIconProps>`
  width: 2.4rem;
  height: 2.4rem;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: currentColor;
    mask-image: ${({ type }) => {
      switch (type) {
        case 'bullet':
          return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01'/%3E%3C/svg%3E\")";
        case 'ordered':
          return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M10 6h11M10 12h11M10 18h11M4 6h1v4M4 10v2h2M6 10H4M4 18v-2h2'/%3E%3C/svg%3E\")";
        default:
          return '';
      }
    }};
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
  }
`;
