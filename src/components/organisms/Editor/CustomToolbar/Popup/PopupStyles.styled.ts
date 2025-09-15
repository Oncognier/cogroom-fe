'use client';

import styled from '@emotion/styled';

type MediaItemProps = {
  isActive?: boolean;
};

type TypographyItemProps = {
  isActive?: boolean;
};

type TypographyTextProps = {
  size: 'h1' | 'h2' | 'h3' | 'p';
};

type ColorCircleProps = {
  color: string;
};

type CustomColorInputProps = {
  color: string;
};

type MediaIconProps = {
  type: 'image' | 'file' | 'video';
};

type FontItemProps = {
  isActive?: boolean;
  fontFamily?: string;
};

type FontPreviewProps = {
  fontFamily: string;
};

export const PopupContainer = styled.div`
  position: absolute;
  top: calc(100% + 1.5rem);
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  z-index: 9999;
  min-width: 16rem;
  background: ${({ theme }) => theme.semantic.background.normal.normal};
  border: 0.1rem solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadow.normal};
`;

export const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
`;

export const MediaItem = styled.button<MediaItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 0.8rem;
  background: ${({ theme, isActive }) =>
    isActive ? theme.semantic.primary.normal : theme.semantic.background.normal.normal};
  color: ${({ theme, isActive }) => (isActive ? theme.semantic.static.white : theme.semantic.label.normal)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme, isActive }) =>
      isActive ? theme.semantic.primary.strong : theme.semantic.background.normal.alternative};
  }
`;

export const MediaIcon = styled.div<MediaIconProps>`
  width: 2.4rem;
  height: 2.4rem;
  background: currentColor;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  mask-image: ${({ type }) => {
    switch (type) {
      case 'image':
        return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' d='m21 16-4-4-6 6-4-4-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11z'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3C/svg%3E\")";
      case 'file':
        return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z'/%3E%3Cpath stroke='currentColor' stroke-width='2' d='M14 2v6h6'/%3E%3C/svg%3E\")";
      case 'video':
        return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' d='M23 7l-7 5 7 5V7zM14 5H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z'/%3E%3C/svg%3E\")";
      default:
        return '';
    }
  }};
`;

export const MediaLabel = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const TypographyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const TypographyItem = styled.button<TypographyItemProps>`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 0.6rem;
  background: ${({ theme, isActive }) => (isActive ? theme.semantic.background.elevated.normal : 'transparent')};
  color: ${({ theme }) => theme.semantic.label.normal};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme, isActive }) =>
      isActive ? theme.semantic.primary.strong : theme.semantic.background.normal.alternative};
  }
`;

export const TypographyText = styled.span<TypographyTextProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'h1':
        return '2.4rem';
      case 'h2':
        return '2rem';
      case 'h3':
        return '1.6rem';
      case 'p':
        return '1.4rem';
      default:
        return '1.4rem';
    }
  }};
  font-weight: ${({ size }) => (size.startsWith('h') ? 'bold' : 'normal')};
  line-height: 1.4;
`;

export const ColorGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;

export const ColorRow = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-start;
`;

export const ColorCircle = styled.button<ColorCircleProps>`
  width: 2.8rem;
  height: 2.8rem;
  border: 0.1rem solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 50%;
  background-color: ${({ color }) => (color === 'transparent' ? '#FFFFFF' : color)};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

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
`;

export const CustomColorInput = styled.input<CustomColorInputProps>`
  width: 2.8rem;
  height: 2.8rem;
  border: 0.1rem solid ${({ theme }) => theme.semantic.line.normal};
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

export const LinkForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 36.7rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    ${({ theme }) => theme.typography.label2.semibold};
    color: ${({ theme }) => theme.semantic.static.black};
  }
`;

export const LinkInput = styled.input`
  padding: 1rem 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 0.4rem;
  font-size: 1.4rem;
  background: ${({ theme }) => theme.semantic.background.normal.normal};
  color: ${({ theme }) => theme.semantic.label.normal};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.semantic.primary.normal};
  }

  &::placeholder {
    color: ${({ theme }) => theme.semantic.label.assistive};
  }
`;

export const LinkButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`;

export const ApplyButton = styled.button`
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.semantic.primary.normal};
  color: ${({ theme }) => theme.semantic.static.white};
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.semantic.primary.strong};
  }

  &:disabled {
    background: ${({ theme }) => theme.semantic.background.elevated.alternative};
    color: ${({ theme }) => theme.semantic.label.assistive};
    cursor: not-allowed;
  }
`;

export const RemoveButton = styled.button`
  padding: 0.6rem 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.semantic.status.destructive};
  border-radius: 0.4rem;
  background: transparent;
  color: ${({ theme }) => theme.semantic.status.destructive};
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.semantic.status.destructive};
    color: ${({ theme }) => theme.semantic.static.white};
  }
`;

export const FontList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const FontItem = styled.button<FontItemProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 1.2rem;

  background: ${({ theme, isActive }) => (isActive ? theme.semantic.background.elevated.normal : 'transparent')};
  color: ${({ theme }) => theme.semantic.label.normal};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.semantic.background.elevated.normal};
  }
`;

export const FontPreview = styled.span<FontPreviewProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: 1.4rem;
`;
