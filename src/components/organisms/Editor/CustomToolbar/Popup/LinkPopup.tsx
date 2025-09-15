'use client';

import type { Editor } from '@tiptap/react';
import { useState, useEffect } from 'react';

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
    const { from, to } = editor.state.selection;
    const selectedText = editor.state.doc.textBetween(from, to);

    if (selectedText) {
      setDisplayText(selectedText);
    }

    const linkAttributes = editor.getAttributes('link');
    if (linkAttributes.href) {
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
    if (!url.trim()) return;

    let finalUrl = url.trim();
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = 'https://' + finalUrl;
    }

    if (displayText.trim()) {
      const targetAttr = openInNewTab ? ' target="_blank"' : '';
      editor.chain().focus().insertContent(`<a href="${finalUrl}"${targetAttr}>${displayText}</a>`).run();
    } else {
      editor.chain().focus().unsetLink().run();

      const linkAttributes: { href: string; target?: string } = { href: finalUrl };
      if (openInNewTab) {
        linkAttributes.target = '_blank';
      }

      editor.chain().focus().setLink(linkAttributes).run();
    }

    onClose();
  };

  const handleRemoveLink = () => {
    editor.chain().focus().unsetLink().run();
    onClose();
  };

  return (
    <S.PopupContainer>
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

        {/* <S.CheckboxGroup>
          <Checkbox
            size='nm'
            isChecked={openInNewTab}
            interactionVariant='normal'
            onToggle={setOpenInNewTab}
          />
          <span>새창으로 열기</span>
        </S.CheckboxGroup> */}

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
