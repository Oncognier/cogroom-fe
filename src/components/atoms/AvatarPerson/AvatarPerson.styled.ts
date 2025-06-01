import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

export type AvatarPersonType = 'icon' | 'image';
export type AvatarPersonSize = 'xsm' | 'sm' | 'md' | 'lg' | 'xlg' | 'fillContainer';

export interface AvatarPersonStyleProps {
  type: AvatarPersonType;
  size: AvatarPersonSize;
}

const sizeStyles: Record<AvatarPersonSize, SerializedStyles> = {
  xsm: css`
    height: 2.4rem;
  `,
  sm: css`
    height: 3.6rem;
  `,
  md: css`
    height: 4rem;
  `,
  lg: css`
    height: 4.8rem;
  `,
  xlg: css`
    height: 5.6rem;
  `,
  fillContainer: css`
    height: 100%;
  `,  
};

const typeStyles: Record<AvatarPersonType, SerializedStyles> = {
  icon: css``,
  image: css`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border: 1px solid rgba(112, 115, 124, 0.08);
      border-radius: 50%;
      pointer-events: none;
      box-sizing: border-box;
    }
  `,
};

const AvatarPerson = styled.div<AvatarPersonStyleProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ size }) => sizeStyles[size]};
  ${({ type }) => typeStyles[type]};

  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
`;

const S = {
  AvatarPerson,
};

export default S;
