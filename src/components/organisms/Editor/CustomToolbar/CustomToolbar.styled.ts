'use client';

import styled from '@emotion/styled';

import { getInteraction } from '@/styles/helpers/interaction';

type ButtonProps = {
  isActive?: boolean;
};

type ColorIndicatorProps = {
  color: string;
};

export const CustomToolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 0.6rem;
  gap: 0.8rem;
`;

export const ToolbarGroup = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InlineGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ParagraphGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const UtilitiesGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  width: 1px;
  height: 4.4rem;
  background-color: ${({ theme }) => theme.semantic.label.assistive};
  border-radius: 100%;
`;

export const ImageUpload = styled.button<ButtonProps>`
  width: 4.4rem;
  height: 4.4rem;
  padding: 1.2rem;
  border-radius: 1.2rem;
  color: ${({ theme }) => theme.semantic.label.normal};
  background-color: ${({ theme, isActive }) => (isActive ? theme.semantic.background.elevated.normal : 'transparent')};
  ${({ theme }) => getInteraction('strong', theme.semantic.background.elevated.alternative)(theme)};

  cursor: pointer;
`;

export const ToolbarButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.4rem;
  height: 4.4rem;
  padding: 1.2rem;
  border-radius: 1.2rem;
  color: ${({ theme }) => theme.semantic.label.normal};
  background-color: ${({ theme, isActive }) => (isActive ? theme.semantic.background.elevated.normal : 'transparent')};
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ theme }) => getInteraction('strong', theme.semantic.background.elevated.alternative)(theme)};
`;

export const DropdownButton = styled.button<ButtonProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  padding: 1rem 1.2rem;
  border-radius: 1.2rem;
  ${({ theme }) => theme.typography.body1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
  background-color: ${({ theme, isActive }) => (isActive ? theme.semantic.background.elevated.normal : 'transparent')};
  ${({ theme }) => getInteraction('strong', theme.semantic.background.elevated.alternative)(theme)};

  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    width: 2rem;
    height: 2rem;
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

export const ColorButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const ColorIndicator = styled.div<ColorIndicatorProps>`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 0.1rem solid ${({ theme }) => theme.semantic.line.normal};
  flex-shrink: 0;
`;
