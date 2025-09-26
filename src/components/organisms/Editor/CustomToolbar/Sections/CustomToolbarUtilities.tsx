'use client';

import type { Editor } from '@tiptap/react';

import LinkIcon from '@/assets/icons/link.svg';

import type { PopupType } from '../CustomToolbar';
import * as S from '../CustomToolbar.styled';
import LinkPopup from '../Popup/LinkPopup';
import PopupWrapper from '../Popup/PopupWrapper';

type Props = {
  editor: Editor;
  activePopup: PopupType;
  togglePopup: (p: PopupType) => void;
  closePopups: () => void;
};

export default function CustomToolbarUtilities({ editor, activePopup, togglePopup, closePopups }: Props) {
  return (
    <S.UtilitiesGroup>
      <S.DropdownWrapper>
        <S.ToolbarButton
          type='button'
          onClick={() => togglePopup('link')}
          isActive={activePopup === 'link'}
        >
          <LinkIcon />
        </S.ToolbarButton>

        {activePopup === 'link' && (
          <PopupWrapper
            onClose={closePopups}
            popupType='link'
          >
            <LinkPopup
              editor={editor}
              onClose={closePopups}
            />
          </PopupWrapper>
        )}
      </S.DropdownWrapper>
    </S.UtilitiesGroup>
  );
}
