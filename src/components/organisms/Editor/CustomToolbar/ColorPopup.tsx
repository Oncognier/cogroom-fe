'use client';

import type { Editor } from '@tiptap/react';
import { useState } from 'react';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { palette, semantic } from '@/styles/color';

import * as S from './PopupStyles.styled';

type ColorPopupProps = {
  editor: Editor;
  onClose: () => void;
};

const colorPalette = [
  ['transparent', '#FFFFFF', '#F4F4F5'],
  [palette.neutral[98], palette.neutral[95], palette.neutral[80], palette.neutral[60], palette.neutral[40]],
  [palette.red[90], palette.red[70], palette.red[50], palette.red[30], palette.red[10]],
  [palette.blue[90], palette.blue[70], palette.blue[50], palette.blue[30], palette.blue[10]],
  [palette.green[90], palette.green[70], palette.green[50], palette.green[30], palette.green[10]],
  [
    semantic.accent.lightBlue,
    semantic.accent.cyan,
    semantic.accent.pink,
    semantic.accent.purple,
    semantic.accent.violet,
  ],
];

export default function ColorPopup({ editor, onClose }: ColorPopupProps) {
  const [customColor, setCustomColor] = useState('#000000');

  const handleColorSelect = (color: string) => {
    if (color === 'transparent') {
      editor.chain().focus().unsetColor().run();
    } else {
      editor.chain().focus().setColor(color).run();
    }
    onClose();
  };

  const handleCustomColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(event.target.value);
  };

  const handleCustomColorApply = () => {
    editor.chain().focus().setColor(customColor).run();
    onClose();
  };

  return (
    <S.PopupContainer>
      <S.ColorGrid>
        {colorPalette.map((row, rowIndex) => (
          <S.ColorRow key={rowIndex}>
            {row.filter(Boolean).map((color) => (
              <S.ColorCircle
                key={color}
                color={color as string}
                onClick={() => handleColorSelect(color as string)}
              />
            ))}
          </S.ColorRow>
        ))}
      </S.ColorGrid>

      <S.CustomColorSection>
        <S.CustomColorInput
          color={customColor}
          type='color'
          value={customColor}
          onChange={handleCustomColorChange}
        />
        <S.CustomColorValue>{customColor.toUpperCase()}</S.CustomColorValue>
        <SolidButton
          label='선택'
          color='primary'
          size='sm'
          interactionVariant='normal'
          onClick={handleCustomColorApply}
        />
      </S.CustomColorSection>
    </S.PopupContainer>
  );
}
