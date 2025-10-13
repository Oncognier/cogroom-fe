'use client';

import styled from '@emotion/styled';

import { editorContentStyles } from '@/styles/editorContentStyles';

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
`;
