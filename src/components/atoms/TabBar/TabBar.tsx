'use client';

import { TabBarStyleProps } from './TabBar.styled';
import * as S from './TabBar.styled';

interface TabBarProps extends TabBarStyleProps {
  label: string;
  onChange: () => void;
}

export default function TabBar({ size, state, fillContainer, label, interactionVariant, onChange }: TabBarProps) {
  return (
    <S.TabBar
      size={size}
      state={state}
      fillContainer={fillContainer}
      interactionVariant={interactionVariant}
      onClick={onChange}
    >
      {label}
    </S.TabBar>
  );
}
