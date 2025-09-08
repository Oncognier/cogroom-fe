'use client';

import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react';

import ResizableImage from './ResizableImage';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    customImage: {
      setCustomImage: (attributes: { src: string; alt?: string; width?: number; height?: number }) => ReturnType;
    };
  }
}

export interface CustomImageOptions {
  inline: boolean;
  allowBase64: boolean;
  HTMLAttributes: Record<string, unknown>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomImageComponent = ({ node, updateAttributes, editor, getPos }: any) => {
  const handleResize = (width: number, height: number) => {
    updateAttributes({ width, height });
  };

  // Get current text alignment
  const getCurrentTextAlign = () => {
    const { from } = editor.state.selection;
    const resolvedPos = editor.state.doc.resolve(getPos());
    const attrs = resolvedPos.parent?.attrs;
    return attrs?.textAlign || 'left';
  };

  return (
    <NodeViewWrapper
      as='div'
      style={{
        textAlign: 'inherit',
        display: 'block',
        width: '100%',
      }}
    >
      <div style={{ textAlign: 'inherit' }}>
        <ResizableImage
          src={node.attrs.src}
          alt={node.attrs.alt || ''}
          initialWidth={node.attrs.width || 300}
          initialHeight={node.attrs.height || 200}
          textAlign={getCurrentTextAlign()}
          onResize={handleResize}
        />
      </div>
    </NodeViewWrapper>
  );
};

export const CustomImage = Node.create({
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
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs,
          });
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(CustomImageComponent);
  },
});
