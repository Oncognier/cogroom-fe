'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;

  padding: 0rem 2rem;

  ${mqMax.tablet} {
    padding: 0;
  }
`;

export const PostSectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 100%;
  max-width: 79.8rem;
  margin: 0 auto;
`;
