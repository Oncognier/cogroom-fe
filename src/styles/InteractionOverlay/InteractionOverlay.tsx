'use client';

import React from 'react';

import S, { InteractionVariant } from './InteractionOverlay.styled';

interface InteractionOverlayProps {
  children: React.ReactNode;
  variant?: InteractionVariant;
}

export const InteractionOverlay = ({ children, variant = 'normal' }: InteractionOverlayProps) => {
  return <S.Interaction variant={variant}>{children}</S.Interaction>;
};
