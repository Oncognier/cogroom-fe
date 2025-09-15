'use client';

import type { Editor } from '@tiptap/react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import ImageIcon from '@/assets/icons/image.svg';

import type { PopupType } from '../CustomToolbar';
import * as S from '../CustomToolbar.styled';
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
  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (file.type.startsWith('image/')) {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d')!;

          const maxWidth = 800;
          const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
          canvas.width = img.width * ratio;
          canvas.height = img.height * ratio;

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          const resizedDataUrl = canvas.toDataURL('image/jpeg', 1.0);

          editor
            .chain()
            .focus()
            .setCustomImage({
              src: resizedDataUrl,
              width: canvas.width,
              height: canvas.height,
            })
            .run();

          closePopups();
        };

        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) img.src = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    };

    input.click();
  };

  return (
    <S.ToolbarGroup>
      {/* 이미지 업로드 */}
      <S.ImageUpload onClick={handleImageUpload}>
        <ImageIcon />
      </S.ImageUpload>

      <S.Divider />

      {/* 본문/타이포 */}
      <S.DropdownButton
        onClick={() => togglePopup('typography')}
        isActive={activePopup === 'typography'}
      >
        본문 <ChevronDown />
      </S.DropdownButton>
      {activePopup === 'typography' && (
        <PopupWrapper onClose={closePopups}>
          <TypographyPopup
            editor={editor}
            onClose={closePopups}
          />
        </PopupWrapper>
      )}

      <S.Divider />

      {/* 폰트 */}
      <S.DropdownButton
        onClick={() => togglePopup('font')}
        isActive={activePopup === 'font'}
      >
        {selectedFont} <ChevronDown />
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

      <S.Divider />

      {/* 색상 */}
      <S.DropdownButton
        onClick={() => togglePopup('color')}
        isActive={activePopup === 'color'}
      >
        색상 <ChevronDown />
      </S.DropdownButton>
      {activePopup === 'color' && (
        <PopupWrapper onClose={closePopups}>
          <ColorPopup
            editor={editor}
            onClose={closePopups}
          />
        </PopupWrapper>
      )}
    </S.ToolbarGroup>
  );
}
