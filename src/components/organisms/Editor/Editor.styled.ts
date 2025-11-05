'use client';

import styled from '@emotion/styled';

import { editorContentStyles } from '@/styles/editorContentStyles';
import { mqMax } from '@/styles/foundation';

type EditorWrapperProps = {
  height: number;
};

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  width: 100%;
  height: 100%;

  .ProseMirror {
    ${({ theme }) => editorContentStyles(theme)}
    height: 100%;
    color: ${({ theme }) => theme.semantic.label.normal};
    background-color: ${({ theme }) => theme.semantic.static.white};

    overflow-y: auto;
    outline: none;

    &.is-editor-empty:first-child::before {
      color: ${({ theme }) => theme.semantic.label.assistive};
      content: attr(data-placeholder);
      float: left;
      height: 0;
      pointer-events: none;
    }

    blockquote {
      margin: 1.6rem 0;
      padding: 1.2rem 1.6rem;
      border-left: 0.4rem solid ${({ theme }) => theme.semantic.accent.redOrange};
      background: ${({ theme }) => theme.semantic.background.normal.alternative};

      p {
        margin: 0;
      }
    }
  }

  /* readonly 모드 HTML 파싱 콘텐츠 스타일 */
  .readonly-content {
    ${({ theme }) => editorContentStyles(theme)}
    color: ${({ theme }) => theme.semantic.label.normal};

    p:empty {
      min-height: 1.6rem;
      margin: 0.5rem 0 !important;
    }

    p {
      margin: 0.5rem 0;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.8rem;

      &[data-align='left'] {
        display: block;
        margin-left: 0;
        margin-right: auto;
      }

      &[data-align='center'] {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      &[data-align='right'] {
        display: block;
        margin-left: auto;
        margin-right: 0;
      }
    }
  }
`;

export const EditorContent = styled.div<EditorWrapperProps & { readonly?: boolean }>`
  min-height: ${({ readonly }) => (readonly ? '200px' : '400px')};
  height: ${({ height, readonly }) => (readonly ? '100%' : `${height}px`)};
  padding: 1.2rem 1.6rem;

  border: ${({ readonly, theme }) => (readonly ? 'none' : `1px solid ${theme.semantic.label.assistive}`)};
  border-radius: 1.2rem;
  & > div {
    height: 100%;
    padding-top: 2rem;
  }
`;

export const FloatingButtonWrapper = styled.div`
  position: fixed;
  bottom: 1.8rem;
  right: 1.6rem;
  z-index: 1000;
  display: none;

  ${mqMax.tablet} {
    display: block;
  }
`;
