import { Extension } from '@tiptap/core';

/**
 * 리스트 중첩 깊이를 1단계로 제한하는 Extension
 */
export const LimitListNesting = Extension.create({
  name: 'limitListNesting',

  addKeyboardShortcuts() {
    return {
      Tab: () => {
        const { state } = this.editor;
        const { selection } = state;
        const { $anchor } = selection;

        const currentDepth = $anchor.depth;
        let listDepth = 0;

        for (let i = currentDepth; i > 0; i--) {
          const nodeAtDepth = $anchor.node(i);
          if (nodeAtDepth.type.name === 'bulletList' || nodeAtDepth.type.name === 'orderedList') {
            listDepth++;
          }
        }

        if (listDepth >= 2) {
          return true;
        }

        return false;
      },
    };
  },
});
