'use client';

import { css } from '@emotion/react';

import type { Theme } from './theme';

export const editorContentStyles = (theme: Theme) => css`
  /* 기본 본문 폰트 */
  ${theme.typography.body1.medium}
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

  ul {
    padding-left: 1em;
    margin: 0 0 0.5rem 0;
  }
  ul li {
    padding-left: 0.5em;
    text-indent: 0;
  }
  ul li::marker {
    content: '•';
    color: ${theme.semantic.static.black};
    margin-right: 0.5em;
  }

  ol {
    padding-left: 1em;
    counter-reset: item;
    margin: 0 0 1em 0;
  }
  ol li {
    counter-increment: item;
    padding-left: 0.5em;
    text-indent: 0;
  }
  ol li::marker {
    content: counter(item) '.';
    color: ${theme.semantic.static.black};
    margin-right: 0.5em;
  }

  li {
    margin: 0.25em 0;
  }

  h1,
  h2,
  h3 {
    &:first-child {
      margin-top: 0;
    }
  }

  h1,
  h1 span {
    ${theme.typography.title2.bold};
    font-size: 2.8rem !important;
    line-height: 3.8rem !important;
    letter-spacing: -0.0236em !important;
    font-weight: 700 !important;
  }

  h2,
  h2 span {
    ${theme.typography.heading1.semibold};
    font-size: 2.2rem !important;
    line-height: 3rem !important;
    letter-spacing: -0.0194em !important;
    font-weight: 600 !important;
  }

  h3,
  h3 span {
    ${theme.typography.headline1.semibold};
    font-size: 1.8rem !important;
    line-height: 2.6rem !important;
    letter-spacing: -0.002em !important;
    font-weight: 600 !important;
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

  a,
  .editor-link {
    color: ${theme.semantic.primary.normal};
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${theme.semantic.primary.strong};
    }
  }
`;
