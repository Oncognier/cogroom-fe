'use client';

import type { Editor } from '@tiptap/react';
import { useState, useEffect } from 'react';

import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import Input from '@/components/molecules/Input/Input';

import * as S from './PopupStyles.styled';

type LinkPopupProps = {
  editor: Editor;
  onClose: () => void;
};

export default function LinkPopup({ editor, onClose }: LinkPopupProps) {
  const [url, setUrl] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [openInNewTab, setOpenInNewTab] = useState(false);

  useEffect(() => {
    if (!editor?.state || !editor.getAttributes) return;

    setUrl('');
    setDisplayText('');
    setOpenInNewTab(false);

    const { from, to } = editor.state.selection;
    const selectedText = editor.state.doc.textBetween(from, to);

    if (selectedText) {
      setDisplayText(selectedText);
    }

    const linkAttributes = editor.getAttributes('customLink');
    if (linkAttributes?.href) {
      setUrl(linkAttributes.href);
      setOpenInNewTab(linkAttributes.target === '_blank');
    }
  }, [editor]);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleDisplayTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayText(event.target.value);
  };

  const handleApply = () => {
    if (!url.trim() || !editor) return;

    let finalUrl = url.trim();
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = 'https://' + finalUrl;
    }

    const linkAttributes: { href: string; target?: string } = { href: finalUrl };
    if (openInNewTab) {
      linkAttributes.target = '_blank';
    }

    if (displayText.trim()) {
      // 텍스트가 있는 경우, 텍스트를 먼저 삽입하고 링크 적용
      if (editor.state?.selection) {
        const { from, to } = editor.state.selection;
        if (from === to) {
          // 커서 위치에 텍스트 삽입 후 링크 적용
          editor.chain().focus().insertContent(displayText).run();
          setTimeout(() => {
            const currentPos = editor.state.selection.from;
            editor
              .chain()
              .focus()
              .setTextSelection({ from: currentPos - displayText.length, to: currentPos })
              .setCustomLink(linkAttributes)
              .run();
          }, 0);
        } else {
          // 이미 선택된 텍스트에 링크 적용
          editor.chain().focus().setCustomLink(linkAttributes).run();
        }
      } else {
        // state가 없는 경우 텍스트만 삽입
        editor.chain().focus().insertContent(displayText).run();
      }
    } else {
      // 텍스트가 없는 경우 선택된 영역에 링크만 적용
      editor.chain().focus().setCustomLink(linkAttributes).run();
    }

    onClose();
  };

  const handleRemoveLink = () => {
    if (!editor) return;
    editor.chain().focus().unsetCustomLink().run();
    onClose();
  };

  if (!editor) return null;

  return (
    <S.PopupContainer popupType="link">
      <S.LinkForm>
        <Input
          inputSize='sm'
          placeholder='URL'
          value={url}
          onChange={handleUrlChange}
        />

        <Input
          inputSize='sm'
          placeholder='대체 텍스트'
          value={displayText}
          onChange={handleDisplayTextChange}
        />

        <S.CheckboxGroup>
          <Checkbox
            size='nm'
            isChecked={openInNewTab}
            interactionVariant='normal'
            onToggle={setOpenInNewTab}
          />
          <span>새창으로 열기</span>
        </S.CheckboxGroup>

        <S.LinkButtonGroup>
          <SolidButton
            label='링크 해제'
            size='sm'
            interactionVariant='normal'
            onClick={handleRemoveLink}
          />
          <SolidButton
            label='확인'
            color='primary'
            size='sm'
            interactionVariant='normal'
            onClick={handleApply}
          />
        </S.LinkButtonGroup>
      </S.LinkForm>
    </S.PopupContainer>
  );
}
