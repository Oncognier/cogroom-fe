'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

type ColorCircleProps = {
  color: string;
  isSelected?: boolean;
  needsBorder?: boolean;
};

type CustomColorInputProps = {
  color: string;
};

export const ColorGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;

  ${mqMax.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0.5rem 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ColorRow = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-start;
  flex-shrink: 0;

  ${mqMax.tablet} {
    gap: 0.8rem;
  }
`;

export const ColorCircle = styled.button<ColorCircleProps>`
  width: 2.8rem;
  height: 2.8rem;
  border: ${({ theme, isSelected, needsBorder }) => {
    if (isSelected) return `0.2rem solid ${theme.semantic.primary.normal}`;
    if (needsBorder) return `0.1rem solid ${theme.semantic.line.normal}`;
    return 'none';
  }};
  border-radius: 50%;
  background-color: ${({ color }) => (color === 'transparent' ? '#FFFFFF' : color)};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  transform: ${({ isSelected }) => (isSelected ? 'scale(1.1)' : 'scale(1)')};

  &:hover {
    transform: scale(1.1);
  }

  ${({ color }) =>
    color === 'transparent' &&
    `
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 10%;
      right: 10%;
      height: 0.2rem;
      background: #FF0000;
      transform: translateY(-50%) rotate(-45deg);
    }
  `}
`;

export const CustomColorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 2rem;
  padding-top: 1.6rem;
  border-top: 0.1rem solid ${({ theme }) => theme.semantic.line.neutral};
  position: relative;

  ${mqMax.tablet} {
    display: none;
  }
`;

export const CustomColorInput = styled.input<CustomColorInputProps>`
  width: 2.8rem;
  height: 2.8rem;
  border: ${({ theme, color }) => {
    if (color === 'transparent' || color === '#FFFFFF') return `0.1rem solid ${theme.semantic.line.normal}`;
    return 'none';
  }};
  cursor: pointer;
  background-color: ${({ color, theme }) => (color ? color : theme.semantic.static.black)};
  border-radius: 50%;
  padding: 0;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
    border-radius: 50%;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
  }

  &::-moz-color-swatch {
    border: none;
    border-radius: 50%;
  }
`;

export const CustomColorValue = styled.span`
  font-family: monospace;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.semantic.label.normal};
  min-width: 6rem;
`;

export const HexInput = styled.input`
  ${({ theme }) => theme.typography.label1.medium};
  color: ${({ theme }) => theme.semantic.label.normal};
  background: transparent;
  border: none;
  padding: 0;
  width: 6.5rem;
  text-align: center;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.semantic.label.assistive};
  }
`;
