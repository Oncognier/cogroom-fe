'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';
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
  flex-wrap: wrap;

  padding: 0 0.6rem;

  ${mqMax.tablet} {
    display: none;
  }
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

export const AlignmentGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ListGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
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
  flex-shrink: 0;

  ${mqMax.tablet} {
    display: none;
  }
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

  ${mqMax.tablet} {
    width: 4.4rem;
    height: 4.4rem;
    padding: 1rem;
  }
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

  ${mqMax.tablet} {
    padding: 1rem;
  }
`;

export const DropdownIcon = styled.div<ButtonProps>`
  width: 2rem;
  height: 2rem;
  transition: transform 0.2s ease;
  transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
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
