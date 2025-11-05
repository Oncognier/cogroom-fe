'use client';

import type { Editor } from '@tiptap/react';

import * as S from './FontPopup.styled';

type FontPopupProps = {
  editor: Editor;
  onClose: () => void;
  onSelect: (name: string) => void;
  variant?: 'popup' | 'inline';
};

const fonts = [
  {
    name: '기본서체',
    value: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  {
    name: '프리텐다드',
    value: 'Pretendard Variable, Pretendard, sans-serif',
  },
  {
    name: '본고딕',
    value: 'Noto Sans KR, sans-serif',
  },
  {
    name: '나눔고딕',
    value: 'NanumGothic, sans-serif',
  },
  {
    name: '나눔명조',
    value: 'NanumMyeongjo, serif',
  },
];

export default function FontPopup({ editor, onClose, onSelect, variant = 'popup' }: FontPopupProps) {
  const handleFontSelect = (fontFamily: string, fontName: string) => {
    editor.chain().focus().setFontFamily(fontFamily).run();
    onSelect(fontName);
    onClose();
  };

  const currentFontFamily = editor.getAttributes('textStyle').fontFamily || fonts[0].value;

  return (
    <S.FontList>
      {fonts.map((font) => (
        <S.FontItem
          key={font.value}
          onClick={() => handleFontSelect(font.value, font.name)}
          isActive={currentFontFamily === font.value}
        >
          <S.FontPreview fontFamily={font.value}>{font.name}</S.FontPreview>
        </S.FontItem>
      ))}
    </S.FontList>
  );
}
