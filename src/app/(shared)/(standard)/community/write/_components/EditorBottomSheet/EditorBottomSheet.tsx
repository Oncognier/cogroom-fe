'use client';

import type { Editor } from '@tiptap/react';
import { useState } from 'react';

import Accordion from '@/components/molecules/Accordion/Accordion';
import AccordionGroup from '@/components/molecules/AccordionGroup/AccordionGroup';
import BottomSheet from '@/components/organisms/BottomSheet/BottomSheet';
import type { PopupType } from '@/components/organisms/Editor/CustomToolbar/CustomToolbar';
import ColorPopup from '@/components/organisms/Editor/CustomToolbar/Popup/ColorPopup';
import FontPopup from '@/components/organisms/Editor/CustomToolbar/Popup/FontPopup';
import LinkPopup from '@/components/organisms/Editor/CustomToolbar/Popup/LinkPopup';
import TypographyPopup from '@/components/organisms/Editor/CustomToolbar/Popup/TypographyPopup';
import CustomToolbarAlignment from '@/components/organisms/Editor/CustomToolbar/Sections/CustomToolbarAlignment';
import CustomToolbarInline from '@/components/organisms/Editor/CustomToolbar/Sections/CustomToolbarInline';
import CustomToolbarList from '@/components/organisms/Editor/CustomToolbar/Sections/CustomToolbarList';
import { CustomToolbarUploader } from '@/components/organisms/Editor/CustomToolbar/Sections/CustomToolbarUploader';
import CustomToolbarUtilities from '@/components/organisms/Editor/CustomToolbar/Sections/CustomToolbarUtilities';
import { cogroom } from '@/styles/color';

import * as S from './EditorBottomSheet.styled';

interface EditorBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    currentEditor?: Editor;
  }
}

export default function EditorBottomSheet({ isOpen, onClose }: EditorBottomSheetProps) {
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const editor = typeof window !== 'undefined' ? window.currentEditor : null;

  const togglePopup = (popup: PopupType) => {
    if (popup === 'link') {
      setIsLinkModalOpen(true);
    } else {
      setActivePopup((prev) => (prev === popup ? null : popup));
    }
  };

  const handleClose = () => {
    setActivePopup(null);
    onClose();
  };

  const closeLinkModal = () => {
    setIsLinkModalOpen(false);
  };

  if (!editor) {
    return null;
  }

  return (
    <>
      <BottomSheet
        title='에디터'
        isOpen={isOpen}
        onClose={handleClose}
      >
        <S.Container>
          <AccordionGroup exclusive>
            <Accordion
              id='size'
              title='크기'
            >
              <S.AccordionContent>
                <TypographyPopup
                  editor={editor}
                  onClose={onClose}
                  variant='inline'
                />
              </S.AccordionContent>
            </Accordion>

            <S.Divider />

            <Accordion
              id='font'
              title='서체'
            >
              <S.AccordionContent>
                <FontPopup
                  editor={editor}
                  onClose={onClose}
                  onSelect={() => {}}
                  variant='inline'
                />
              </S.AccordionContent>
            </Accordion>

            <S.Divider />

            <Accordion
              id='color'
              title='색상'
            >
              <S.AccordionContent>
                <ColorPopup
                  editor={editor}
                  onClose={onClose}
                  currentColor={editor.getAttributes('textStyle').color || cogroom.black}
                  variant='inline'
                />
              </S.AccordionContent>
            </Accordion>
          </AccordionGroup>

          <S.Divider />

          <S.ToolbarSection>
            <S.ToolbarRow>
              <CustomToolbarUploader
                editor={editor}
                closePopups={onClose}
              />
              <CustomToolbarInline
                editor={editor}
                closePopups={onClose}
              />
              <CustomToolbarUtilities
                variant='top'
                editor={editor}
                activePopup={activePopup}
                togglePopup={togglePopup}
                closePopups={handleClose}
              />
              <CustomToolbarAlignment
                editor={editor}
                closePopups={onClose}
              />
              <CustomToolbarList
                editor={editor}
                closePopups={onClose}
              />
            </S.ToolbarRow>
          </S.ToolbarSection>
        </S.Container>
      </BottomSheet>

      {isLinkModalOpen && (
        <S.LinkModalOverlay onClick={closeLinkModal}>
          <S.LinkModalContainer onClick={(e) => e.stopPropagation()}>
            <LinkPopup
              editor={editor}
              onClose={closeLinkModal}
            />
          </S.LinkModalContainer>
        </S.LinkModalOverlay>
      )}
    </>
  );
}
