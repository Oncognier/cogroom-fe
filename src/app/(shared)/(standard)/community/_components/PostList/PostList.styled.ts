'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
`;

export const ButtonFilter = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: nowrap;

  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  & > * {
    flex: 0 0 auto;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
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
