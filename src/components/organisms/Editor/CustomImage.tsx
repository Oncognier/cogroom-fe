'use client';

import { Node, mergeAttributes, CommandProps } from '@tiptap/core';
import { Node as ProseMirrorNode } from '@tiptap/pm/model';
import { ReactNodeViewRenderer, NodeViewWrapper, Editor } from '@tiptap/react';

import { EDITOR_IMAGE_DEFAULTS } from '@/constants/editorImageDefaults';

import ResizableImage from './ResizableImage';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    customImage: {
      setCustomImage: (attributes: {
        src: string;
        alt?: string;
        width?: number;
        height?: number;
        align?: 'left' | 'center' | 'right';
        'data-original-filename'?: string;
      }) => ReturnType;

      setImageAlign: (align: 'left' | 'center' | 'right') => ReturnType;
    };
  }
}

export interface CustomImageOptions {
  inline: boolean;
  allowBase64: boolean;
  HTMLAttributes: Record<string, unknown>;
}

interface CustomImageComponentProps {
  node: ProseMirrorNode;
  updateAttributes: (attributes: Record<string, unknown>) => void;
  editor: Editor;
  getPos: () => number | undefined;
}

const CustomImageComponent = ({ node, updateAttributes }: CustomImageComponentProps) => {
  const handleResize = (width: number, height: number) => {
    updateAttributes({ width, height });
  };

  const getCurrentAlign = (): 'left' | 'center' | 'right' => {
    return (node.attrs.align as 'left' | 'center' | 'right') || 'center';
  };

  return (
    <NodeViewWrapper
      as='div'
      style={{
        textAlign: getCurrentAlign(),
        display: 'block',
        width: '100%',
      }}
    >
      <div style={{ textAlign: getCurrentAlign() }}>
        <ResizableImage
          src={node.attrs.src}
          alt={node.attrs.alt || ''}
          initialWidth={node.attrs.width || EDITOR_IMAGE_DEFAULTS.width}
          initialHeight={node.attrs.height || EDITOR_IMAGE_DEFAULTS.height}
          textAlign={getCurrentAlign()}
          onResize={handleResize}
        />
      </div>
    </NodeViewWrapper>
  );
};

export const CustomImage = Node.create<CustomImageOptions>({
  name: 'customImage',

  group: 'block',

  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      width: {
        default: EDITOR_IMAGE_DEFAULTS.width,
      },
      height: {
        default: EDITOR_IMAGE_DEFAULTS.height,
      },
      align: {
        default: 'left',
        renderHTML: (attributes) => ({
          'data-align': attributes.align,
        }),
        parseHTML: (element) => element.getAttribute('data-align') || 'left',
      },
      'data-original-filename': {
        default: null,
        renderHTML: (attributes) => ({
          'data-original-filename': attributes['data-original-filename'],
        }),
        parseHTML: (element) => element.getAttribute('data-original-filename'),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['img', mergeAttributes(HTMLAttributes)];
  },

  addCommands() {
    return {
      setCustomImage:
        (attrs) =>
        ({ commands }: CommandProps) => {
          return commands.insertContent({
            type: this.name,
            attrs,
          });
        },

      setImageAlign:
        (align: 'left' | 'center' | 'right') =>
        ({ state, tr, dispatch }) => {
          const { selection } = state;
          const imageNodes: { node: ProseMirrorNode; pos: number }[] = [];

          // 선택 영역에서 모든 이미지 노드 찾기
          state.doc.nodesBetween(selection.from, selection.to, (node, pos) => {
            if (node.type.name === 'customImage') {
              imageNodes.push({ node, pos });
            }
          });

          // 선택된 이미지가 없으면 커서 위치 주변 확인
          if (imageNodes.length === 0) {
            const resolvedPos = state.doc.resolve(selection.from);
            if (resolvedPos.parent.type.name === 'customImage') {
              const parentPos = selection.from - resolvedPos.parentOffset - 1;
              imageNodes.push({ node: resolvedPos.parent, pos: parentPos });
            }
          }

          // 모든 이미지에 정렬 적용
          if (imageNodes.length > 0) {
            imageNodes.forEach(({ node, pos }) => {
              tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                align,
              });
            });

            if (dispatch) dispatch(tr);
            return true;
          }

          return false;
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(CustomImageComponent);
  },
});
