'use client';

import styled from '@emotion/styled';

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

    font-size: 1.6rem;
    line-height: 2.6rem;
    letter-spacing: 0.0057em;
    font-weight: 400;

    height: 100%;
    border-radius: 1.2rem;
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

    ul,
    ol {
      padding-left: 0;
      list-style: none;
      counter-reset: item;
    }

    li {
      display: flex;
      margin-bottom: 0.4rem;

      /* p 태그의 text-align에 따라 li 정렬 */
      &:has(p[style*='text-align: center']) {
        justify-content: center;
      }

      &:has(p[style*='text-align: right']) {
        justify-content: flex-end;
      }
    }

    /* 상위 요소의 text-align에 따른 리스트 정렬 */
    ul[style*='text-align: center'],
    ol[style*='text-align: center'] {
      li {
        justify-content: center;
      }
    }

    ul[style*='text-align: right'],
    ol[style*='text-align: right'] {
      li {
        justify-content: flex-end;
      }
    }

    ul li::before {
      content: '•';
      margin-right: 0.5em;
      flex-shrink: 0;
    }

    ol li::before {
      counter-increment: item;
      content: counter(item) '.';
      margin-right: 0.5em;
      flex-shrink: 0;
    }

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    h1,
    h2,
    h3 {
      margin: 2.4rem 0 1.2rem 0;
      font-weight: bold;

      &:first-child {
        margin-top: 0;
      }
    }

    h1 {
      font-size: 2.4rem;
      line-height: 1.3;
    }

    h2 {
      font-size: 2rem;
      line-height: 1.4;
    }

    h3 {
      font-size: 1.6rem;
      line-height: 1.5;
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

    .editor-link {
      color: ${({ theme }) => theme.semantic.primary.normal};
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.semantic.primary.strong};
      }
    }

    strong {
      font-weight: bold;
    }

    em {
      font-style: italic;
    }

    u {
      text-decoration: underline;
    }

    s {
      text-decoration: line-through;
    }
  }
`;

export const EditorContent = styled.div<EditorWrapperProps>`
  min-height: 300px;
  height: ${({ height }) => `${height}px`};
  padding: 1.2rem 1.6rem;
  border: 1px solid ${({ theme }) => theme.semantic.label.assistive};
  border-radius: 1.2rem;

  & > div {
    height: 100%;
  }
`;
