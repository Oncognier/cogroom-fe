'use client';

import type { Editor } from '@tiptap/react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import { cogroom } from '@/styles/color';

import type { PopupType } from '../CustomToolbar';
import * as S from '../CustomToolbar.styled';
import { CustomToolbarUploader } from './CustomToolbarUploader';
import ColorPopup from '../Popup/ColorPopup';
import FontPopup from '../Popup/FontPopup';
import PopupWrapper from '../Popup/PopupWrapper';
import TypographyPopup from '../Popup/TypographyPopup';

type Props = {
  editor: Editor;
  activePopup: PopupType;
  togglePopup: (p: PopupType) => void;
  closePopups: () => void;
  selectedFont: string;
  onSelectFont: (font: string) => void;
};

export default function CustomToolbarPalette({
  editor,
  activePopup,
  togglePopup,
  closePopups,
  selectedFont,
  onSelectFont,
}: Props) {
  const currentColor = editor.getAttributes('textStyle').color;

  const getCurrentTextType = () => {
    if (editor.isActive('heading', { level: 1 })) return '제목 1';
    if (editor.isActive('heading', { level: 2 })) return '제목 2';
    if (editor.isActive('heading', { level: 3 })) return '제목 3';
    return '본문';
  };

  return (
    <S.ToolbarGroup>
      {/* 이미지 업로드 */}

      <CustomToolbarUploader
        editor={editor}
        closePopups={closePopups}
      />

      <S.Divider />

      {/* 본문/타이포 */}
      <S.DropdownWrapper>
        <S.DropdownButton
          type='button'
          onClick={() => togglePopup('typography')}
          isActive={activePopup === 'typography'}
        >
          {getCurrentTextType()}
          <S.DropdownIcon isActive={activePopup === 'typography'}>
            <ChevronDown />
          </S.DropdownIcon>
        </S.DropdownButton>
        {activePopup === 'typography' && (
          <PopupWrapper onClose={closePopups}>
            <TypographyPopup
              editor={editor}
              onClose={closePopups}
            />
          </PopupWrapper>
        )}
      </S.DropdownWrapper>

      <S.Divider />

      {/* 폰트 */}
      <S.DropdownWrapper>
        <S.DropdownButton
          type='button'
          onClick={() => togglePopup('font')}
          isActive={activePopup === 'font'}
        >
          {selectedFont}{' '}
          <S.DropdownIcon isActive={activePopup === 'font'}>
            <ChevronDown />
          </S.DropdownIcon>
        </S.DropdownButton>
        {activePopup === 'font' && (
          <PopupWrapper onClose={closePopups}>
            <FontPopup
              editor={editor}
              onClose={closePopups}
              onSelect={onSelectFont}
            />
          </PopupWrapper>
        )}
      </S.DropdownWrapper>

      <S.Divider />

      {/* 색상 */}
      <S.DropdownWrapper>
        <S.DropdownButton
          type='button'
          onClick={() => togglePopup('color')}
          isActive={activePopup === 'color'}
        >
          <S.ColorButtonContent>
            {currentColor ? <S.ColorIndicator color={currentColor} /> : '색상'}
            <S.DropdownIcon isActive={activePopup === 'color'}>
              <ChevronDown />
            </S.DropdownIcon>
          </S.ColorButtonContent>
        </S.DropdownButton>
        {activePopup === 'color' && (
          <PopupWrapper
            onClose={closePopups}
            popupType='color'
          >
            <ColorPopup
              editor={editor}
              onClose={closePopups}
              currentColor={currentColor ?? cogroom.black}
            />
          </PopupWrapper>
        )}
      </S.DropdownWrapper>
    </S.ToolbarGroup>
  );
}
