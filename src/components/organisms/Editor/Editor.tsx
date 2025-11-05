'use client';

import { EditorContent } from '@tiptap/react';
import parse, { domToReact, Element, DOMNode } from 'html-react-parser';
import { useState } from 'react';

import EditorFloatingButton from '@/components/atoms/EditorFloatingButton/EditorFloatingButton';
import { useCustomEditor } from '@/hooks/useCustomEditor';

import CustomToolbar from './CustomToolbar/CustomToolbar';
import * as S from './Editor.styled';
import EditorBottomSheet from './EditorBottomSheet/EditorBottomSheet';

export type EditorProps = {
  value?: string;
  onChange?: (value: string) => void;
  content?: string;
  placeholder?: string;
  height?: number;
  readonly?: boolean;
  className?: string;
};

export default function Editor({
  value,
  onChange,
  content,
  placeholder = '내용을 입력해주세요...',
  height = 400,
  readonly = false,
  className,
}: EditorProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const editor = useCustomEditor({
    value: value || '',
    onChange: onChange || (() => {}),
    placeholder,
    readonly,
  });

  const openBottomSheet = () => setIsBottomSheetOpen(true);
  const closeBottomSheet = () => setIsBottomSheetOpen(false);

  if (readonly && content) {
    return (
      <S.EditorWrapper className={className}>
        <S.EditorContent
          height={height}
          readonly={readonly}
        >
          <div className='readonly-content'>
            {parse(content, {
              replace: (domNode) => {
                const element = domNode as Element;
                if (element.type === 'tag' && element.name === 'a') {
                  const { class: className, target, ...rest } = element.attribs;

                  return (
                    <a
                      {...rest}
                      className={className}
                      target={target}
                    >
                      {domToReact(element.children as DOMNode[])}
                    </a>
                  );
                }
              },
            })}
          </div>
        </S.EditorContent>
      </S.EditorWrapper>
    );
  }

  if (!editor) return null;

  return (
    <>
      <S.EditorWrapper className={className}>
        {!readonly && <CustomToolbar editor={editor} />}
        <S.EditorContent
          height={height}
          readonly={readonly}
        >
          <EditorContent editor={editor} />
        </S.EditorContent>
      </S.EditorWrapper>

      {!readonly && (
        <>
          <S.FloatingButtonWrapper>
            <EditorFloatingButton onClick={openBottomSheet} />
          </S.FloatingButtonWrapper>

          <EditorBottomSheet
            isOpen={isBottomSheetOpen}
            onClose={closeBottomSheet}
          />
        </>
      )}
    </>
  );
}
