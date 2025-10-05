'use client';

import styled from '@emotion/styled';

import { editorContentStyles } from '@/styles/commonStyles';

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
    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      'Noto Sans',
      'Apple SD Gothic Neo',
      'Malgun Gothic',
      '맑은 고딕',
      'Nanum Gothic',
      sans-serif !important;

    height: 100%;
    color: ${({ theme }) => theme.semantic.label.normal};
    background-color: ${({ theme }) => theme.semantic.static.white};

    overflow: hidden;
    outline: none;

    &.is-editor-empty:first-child::before {
      color: ${({ theme }) => theme.semantic.label.assistive};
      content: attr(data-placeholder);
      float: left;
      height: 0;
      pointer-events: none;
    }

    ${({ theme }) => editorContentStyles(theme)}

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
`;

export const EditorContent = styled.div<EditorWrapperProps>`
  min-height: 400px;
  height: ${({ height }) => `${height}px`};
  padding: 1.2rem 1.6rem;

  border: 1px solid ${({ theme }) => theme.semantic.label.assistive};
  border-radius: 1.2rem;
  & > div {
    height: 100%;
    padding-top: 2rem;
  }
`;
