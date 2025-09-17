'use client';

import styled from '@emotion/styled';

export const PostContentContainer = styled.div`
  min-height: 30rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const DailyCardWrapper = styled.div`
  margin-bottom: 1.6rem;
`;

export const PostContentViewBox = styled.div`
  color: ${({ theme }) => theme.semantic.label.normal};

  p:empty {
    min-height: 1.6rem;
    margin: 0.5rem 0 !important;
  }

  span,
  div,
  p,
  li {
    font-size: 1.6rem !important;
  }

  h1 span {
    font-size: 2.4rem !important;
    font-weight: bold !important;
    margin: 1rem 0 !important;
  }

  h2 span {
    font-size: 2rem !important;
    font-weight: bold !important;
    margin: 0.8rem 0 !important;
  }

  h3 span {
    font-size: 1.6rem !important;
    font-weight: bold !important;
    margin: 0.6rem 0 !important;
  }

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
    color: ${({ theme }) => theme.semantic.static.black};
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
    color: ${({ theme }) => theme.semantic.static.black};
    margin-right: 0.5em;
  }

  li {
    margin: 0.25em 0;
  }

  p {
    margin: 0.5rem 0;
  }
`;
