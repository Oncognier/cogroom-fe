'use client';

import { Node, mergeAttributes, CommandProps } from '@tiptap/core';
import { Node as ProseMirrorNode } from '@tiptap/pm/model';
import { ReactNodeViewRenderer, NodeViewWrapper, Editor } from '@tiptap/react';

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
          initialWidth={node.attrs.width || 300}
          initialHeight={node.attrs.height || 200}
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
        default: 300,
      },
      height: {
        default: 200,
      },
      align: {
        default: 'left',
        renderHTML: (attributes) => ({
          'data-align': attributes.align,
        }),
        parseHTML: (element) => element.getAttribute('data-align') || 'left',
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
        ({ state, tr }) => {
          state.doc.descendants((node, pos) => {
            if (node.type.name === 'customImage') {
              tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                align,
              });
            }
          });

          if (tr.docChanged) {
            state.apply(tr);
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
