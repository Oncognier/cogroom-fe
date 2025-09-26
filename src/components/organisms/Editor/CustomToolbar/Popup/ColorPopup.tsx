'use client';

import type { Editor } from '@tiptap/react';
import { useState } from 'react';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { palette, semantic } from '@/styles/color';

import * as S from './PopupStyles.styled';

type ColorPopupProps = {
  editor: Editor;
  onClose: () => void;
  currentColor?: string;
};

const colorPalette = [
  ['transparent', semantic.static.white, semantic.static.black],
  [palette.neutral[98], palette.neutral[95], palette.neutral[80], palette.neutral[60], palette.neutral[40]],
  [palette.blue[90], palette.blue[70], palette.blue[50], palette.blue[30], palette.blue[10]],
  [palette.green[90], palette.green[70], palette.green[50], palette.green[30], palette.green[10]],
  [palette.red[90], palette.red[70], palette.red[50], palette.red[30], palette.red[10]],
  [palette.orange[90], palette.orange[70], palette.orange[50], palette.orange[30], palette.orange[10]],
];

export default function ColorPopup({ editor, onClose, currentColor = '#000000' }: ColorPopupProps) {
  const [customColor, setCustomColor] = useState(currentColor);

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

  const handleHexInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if (!value.startsWith('#')) {
      value = '#' + value.replace('#', '');
    }

    if (value.length > 7) {
      value = value.slice(0, 7);
    }

    const hexPart = value.slice(1);
    const hexPattern = /^[0-9A-Fa-f]*$/;
    if (hexPattern.test(hexPart)) {
      setCustomColor(value);
    }
  };

  const handleCustomColorApply = () => {
    const isValidHex = /^#[0-9A-Fa-f]{6}$/.test(customColor);

    if (isValidHex) {
      editor.chain().focus().setColor(customColor).run();
      onClose();
    } else {
      setCustomColor('#000000');
    }
  };

  return (
    <S.PopupContainer popupType="color">
      <S.ColorGrid>
        {colorPalette.map((row, rowIndex) => (
          <S.ColorRow key={rowIndex}>
            {row.filter(Boolean).map((color, colorIndex) => (
              <S.ColorCircle
                key={color}
                color={color as string}
                isSelected={currentColor === color}
                needsBorder={rowIndex === 0 && (colorIndex === 0 || colorIndex === 1)}
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
        <S.HexInput
          type='text'
          value={customColor.toUpperCase()}
          onChange={handleHexInputChange}
          placeholder='#000000'
          maxLength={7}
          onKeyDown={(e) => {
            if (e.key === 'Backspace' && e.currentTarget.selectionStart === 1) {
              e.preventDefault();
            }
            if (e.key === 'Enter') {
              handleCustomColorApply();
            }
          }}
          onClick={(e) => {
            if (e.currentTarget.selectionStart === 0) {
              e.currentTarget.setSelectionRange(1, 1);
            }
          }}
        />
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
