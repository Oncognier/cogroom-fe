import { Mark, mergeAttributes } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';

export interface CustomLinkOptions {
  openOnClick: boolean;
  linkOnPaste: boolean;
  autolink: boolean;
  HTMLAttributes: Record<string, string | number | boolean>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    customLink: {
      setCustomLink: (attributes: { href: string; target?: string }) => ReturnType;
      toggleCustomLink: (attributes: { href: string; target?: string }) => ReturnType;
      unsetCustomLink: () => ReturnType;
    };
  }
}

export const CustomLink = Mark.create<CustomLinkOptions>({
  name: 'customLink',

  priority: 1000,

  keepOnSplit: false,

  addOptions() {
    return {
      openOnClick: false,
      linkOnPaste: false,
      autolink: false,
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      href: {
        default: null,
      },
      target: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'a[href]',
        getAttrs: (dom) => {
          const href = (dom as HTMLElement).getAttribute('href');
          const target = (dom as HTMLElement).getAttribute('target');
          return { href, target };
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    const attrs = mergeAttributes(this.options.HTMLAttributes, HTMLAttributes);

    if (attrs.target !== '_blank') {
      delete attrs.rel;
    } else {
      attrs.rel = 'noopener noreferrer';
    }

    return ['a', attrs, 0];
  },

  addCommands() {
    return {
      setCustomLink:
        (attributes) =>
        ({ chain }) => {
          return chain().setMark(this.name, attributes).run();
        },

      toggleCustomLink:
        (attributes) =>
        ({ chain }) => {
          return chain().toggleMark(this.name, attributes, { extendEmptyMarkRange: true }).run();
        },

      unsetCustomLink:
        () =>
        ({ chain }) => {
          return chain().unsetMark(this.name, { extendEmptyMarkRange: true }).run();
        },
    };
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('handleClickLink'),
        props: {
          handleClick: (view, pos, event) => {
            const link = (event.target as HTMLElement)?.closest('a');

            if (link) {
              const href = link.getAttribute('href');
              const target = link.getAttribute('target');

              if (href) {
                if (target === '_blank') {
                  window.open(href, '_blank', 'noopener,noreferrer');
                } else {
                  window.location.href = href;
                }
                return true;
              }
            }

            return false;
          },
        },
      }),
    ];
  },
});
