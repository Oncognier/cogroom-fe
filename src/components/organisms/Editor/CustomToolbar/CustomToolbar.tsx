'use client';

import type { Editor } from '@tiptap/react';
import { useState } from 'react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import ImageIcon from '@/assets/icons/image.svg';
import Link from '@/assets/icons/upload.svg';

import ColorPopup from './ColorPopup';
import * as S from './CustomToolbar.styled';
import FontPopup from './FontPopup';
import LinkPopup from './LinkPopup';
import PopupWrapper from './PopupWrapper';
import TypographyPopup from './TypographyPopup';

type CustomToolbarProps = {
  editor: Editor;
};

type PopupType = 'media' | 'typography' | 'color' | 'link' | 'font' | null;

export default function CustomToolbar({ editor }: CustomToolbarProps) {
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const [selectedFont, setSelectedFont] = useState<string>('기본서체');

  const togglePopup = (popup: PopupType) => {
    setActivePopup(activePopup === popup ? null : popup);
  };

  const closePopups = () => {
    setActivePopup(null);
  };

  const handleBold = () => {
    editor.chain().focus().toggleBold().run();
    closePopups();
  };

  const handleItalic = () => {
    editor.chain().focus().toggleItalic().run();
    closePopups();
  };

  const handleUnderline = () => {
    editor.chain().focus().toggleUnderline().run();
    closePopups();
  };

  const handleStrike = () => {
    editor.chain().focus().toggleStrike().run();
    closePopups();
  };

  const handleAlignLeft = () => {
    editor.chain().focus().setTextAlign('left').run();
    closePopups();
  };

  const handleAlignCenter = () => {
    editor.chain().focus().setTextAlign('center').run();
    closePopups();
  };

  const handleAlignRight = () => {
    editor.chain().focus().setTextAlign('right').run();
    closePopups();
  };

  const handleBulletList = () => {
    const { from, to } = editor.state.selection;
    const selectedText = editor.state.doc.textBetween(from, to);
    const currentNode = editor.state.selection.$from.parent;

    // 현재 텍스트 정렬 상태 저장
    const currentAlign = currentNode.attrs?.textAlign;

    editor.chain().focus().toggleBulletList().run();

    // 정렬 상태 복원
    if (currentAlign && currentAlign !== 'left') {
      editor.chain().focus().setTextAlign(currentAlign).run();
    }

    closePopups();
  };

  const handleOrderedList = () => {
    const { from, to } = editor.state.selection;
    const selectedText = editor.state.doc.textBetween(from, to);
    const currentNode = editor.state.selection.$from.parent;

    // 현재 텍스트 정렬 상태 저장
    const currentAlign = currentNode.attrs?.textAlign;

    editor.chain().focus().toggleOrderedList().run();

    // 정렬 상태 복원
    if (currentAlign && currentAlign !== 'left') {
      editor.chain().focus().setTextAlign(currentAlign).run();
    }

    closePopups();
  };

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
        };

        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            img.src = reader.result as string;
          }
        };
        reader.readAsDataURL(file);
      }
    };

    input.click();
  };

  return (
    <S.ToolbarWrapper>
      <S.Toolbar>
        <S.ToolbarGroup>
          <S.DropdownButton onClick={handleImageUpload}>
            <ImageIcon />
          </S.DropdownButton>
        </S.ToolbarGroup>

        <S.ToolbarGroup>
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
        </S.ToolbarGroup>

        <S.ToolbarGroup>
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
                onSelect={setSelectedFont}
              />
            </PopupWrapper>
          )}
        </S.ToolbarGroup>

        <S.ToolbarGroup>
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

        <S.ToolbarGroup>
          <S.ToolbarButton
            onClick={handleBold}
            isActive={editor.isActive('bold')}
          >
            <S.BoldText>B</S.BoldText>
          </S.ToolbarButton>
          <S.ToolbarButton
            onClick={handleItalic}
            isActive={editor.isActive('italic')}
          >
            <S.ItalicText>I</S.ItalicText>
          </S.ToolbarButton>
          <S.ToolbarButton
            onClick={handleUnderline}
            isActive={editor.isActive('underline')}
          >
            <S.UnderlineText>U</S.UnderlineText>
          </S.ToolbarButton>
          <S.ToolbarButton
            onClick={handleStrike}
            isActive={editor.isActive('strike')}
          >
            <S.StrikeText>S</S.StrikeText>
          </S.ToolbarButton>
        </S.ToolbarGroup>

        <S.ToolbarGroup>
          <S.ToolbarButton
            onClick={handleAlignLeft}
            isActive={editor.isActive({ textAlign: 'left' })}
          >
            <S.AlignIcon type='left' />
          </S.ToolbarButton>
          <S.ToolbarButton
            onClick={handleAlignCenter}
            isActive={editor.isActive({ textAlign: 'center' })}
          >
            <S.AlignIcon type='center' />
          </S.ToolbarButton>
          <S.ToolbarButton
            onClick={handleAlignRight}
            isActive={editor.isActive({ textAlign: 'right' })}
          >
            <S.AlignIcon type='right' />
          </S.ToolbarButton>
          <S.ToolbarButton
            onClick={handleBulletList}
            isActive={editor.isActive('bulletList')}
          >
            <S.ListIcon type='bullet' />
          </S.ToolbarButton>
          <S.ToolbarButton
            onClick={handleOrderedList}
            isActive={editor.isActive('orderedList')}
          >
            <S.ListIcon type='ordered' />
          </S.ToolbarButton>
        </S.ToolbarGroup>

        <S.ToolbarGroup>
          <S.ToolbarButton
            onClick={() => togglePopup('link')}
            isActive={activePopup === 'link'}
          >
            <Link />
          </S.ToolbarButton>
          {activePopup === 'link' && (
            <PopupWrapper onClose={closePopups}>
              <LinkPopup
                editor={editor}
                onClose={closePopups}
              />
            </PopupWrapper>
          )}
        </S.ToolbarGroup>
      </S.Toolbar>
    </S.ToolbarWrapper>
  );
}
