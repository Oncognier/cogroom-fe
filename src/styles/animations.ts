import { css, keyframes } from '@emotion/react';

export const shake = keyframes`
  0% { transform: translateX(0); }
  12.5% { transform: translateX(-2px); }
  25% { transform: translateX(0); }
  37.5% { transform: translateX(2px); }
  50% { transform: translateX(0); }
  62.5% { transform: translateX(-2px); }
  75% { transform: translateX(0); }
  87.5% { transform: translateX(2px); }
  100% { transform: translateX(0); }
`;

export const shakeAnimation = css`
  animation: ${shake} 0.3s ease-in-out;
`;
