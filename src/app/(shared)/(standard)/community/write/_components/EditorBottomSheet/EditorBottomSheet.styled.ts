'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Description = styled.p`
  margin: 0;
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.semantic.label.assistive};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const OptionButton = styled.button`
  padding: 0.8rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.palette.blue[80]};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.semantic.static.white};
  color: ${({ theme }) => theme.semantic.label.neutral};
  cursor: pointer;
  transition: all 0.2s ease;
  ${({ theme }) => theme.typography.body2.medium};

  &:hover {
    background-color: ${({ theme }) => theme.palette.blue[95]};
    border-color: ${({ theme }) => theme.palette.blue[70]};
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.blue[90]};
  }
`;

export const ColorGroup = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const ColorSwatch = styled.div<{ color?: string; isActive?: boolean }>`
  width: 3rem;
  height: 3rem;
  background-color: ${({ color }) => color || '#000000'};
  border-radius: 0.4rem;
  cursor: pointer;
  border: 2px solid ${({ isActive, theme }) => (isActive ? theme.palette.blue[50] : 'transparent')};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.palette.blue[70]};
  }
`;

export const TypographyButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const TypographyButton = styled.button<{ isActive?: boolean }>`
  padding: 0.8rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.palette.blue[80]};
  border-radius: 0.4rem;
  background-color: ${({ theme, isActive }) => (isActive ? theme.palette.blue[50] : theme.semantic.static.white)};
  color: ${({ theme, isActive }) => (isActive ? theme.semantic.static.white : theme.semantic.label.neutral)};
  cursor: pointer;
  transition: all 0.2s ease;
  ${({ theme }) => theme.typography.body2.medium};

  &:hover {
    background-color: ${({ theme, isActive }) => (isActive ? theme.palette.blue[40] : theme.palette.blue[95])};
    border-color: ${({ theme }) => theme.palette.blue[70]};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.semantic.line.normal};
`;

export const ToolbarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem 0;
`;

export const ToolbarRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
`;

export const ToolbarButton = styled.button<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 0.8rem;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.semantic.primary.normal : theme.semantic.background.normal.normal};
  color: ${({ theme, isActive }) => (isActive ? theme.semantic.static.white : theme.semantic.label.normal)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.semantic.primary.strong : theme.semantic.background.normal.alternative};
  }

  &:active {
    transform: scale(0.95);
  }
`;
