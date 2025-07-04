'use client';

import styled from '@emotion/styled';

type ThumbnailRatio = '1_1' | '5_4' | '4_3' | '3_2' | '16_10' | '16_9' | '2_1' | '21_9';

export interface ThumbnailStyleProps {
  ratio: ThumbnailRatio;
  portrait?: boolean;
  border?: boolean;
  radius?: boolean;
}

export const Thumbnail = styled.div<ThumbnailStyleProps>`
  position: relative;
  width: ${({ portrait }) => (portrait ? 'auto' : '100%')};
  height: ${({ portrait }) => (portrait ? '100%' : 'auto')};
  aspect-ratio: ${({ theme, ratio }) => theme.ratio[ratio]};
  overflow: hidden;

  border: ${({ border, theme }) => (border ? `1px solid ${theme.semantic.line.normal}` : 'none')};
  border-radius: ${({ radius, theme }) => (radius ? theme.radius[12] : '0')};
`;
