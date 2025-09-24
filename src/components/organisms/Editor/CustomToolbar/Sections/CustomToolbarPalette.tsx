'use client';

import type { Editor } from '@tiptap/react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import ImageIcon from '@/assets/icons/image.svg';
import { useUploadFileToS3Mutation } from '@/hooks/api/file/useUploadFileToS3';

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
  const currentColor = editor.getAttributes('textStyle').color;

  const { uploadToS3 } = useUploadFileToS3Mutation({
    onSuccess: (accessUrls) => {
      editor
        .chain()
        .focus()
        .setCustomImage({
          src: accessUrls[0],
          width: 300,
          height: 200,
        })
        .run();
      closePopups();
    },
  });

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) return;

      uploadToS3({ files: [file] });
    };

    input.click();
  };

  return (
    <S.ToolbarGroup>
      {/* 이미지 업로드 */}
      <S.ImageUpload
        type='button'
        onClick={handleImageUpload}
      >
        <ImageIcon />
      </S.ImageUpload>

      <S.Divider />

      {/* 본문/타이포 */}
      <S.DropdownWrapper>
        <S.DropdownButton
          type='button'
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
      </S.DropdownWrapper>

      <S.Divider />

      {/* 폰트 */}
      <S.DropdownWrapper>
        <S.DropdownButton
          type='button'
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

            <ChevronDown />
          </S.ColorButtonContent>
        </S.DropdownButton>
        {activePopup === 'color' && (
          <PopupWrapper onClose={closePopups}>
            <ColorPopup
              editor={editor}
              onClose={closePopups}
              currentColor={currentColor}
            />
          </PopupWrapper>
        )}
      </S.DropdownWrapper>
    </S.ToolbarGroup>
  );
}
