'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const DesktopOnly = styled.div`
  display: block;

  ${mqMax.tablet} {
    display: none;
  }
`;

export const MobileOnly = styled.div`
  display: none;

  ${mqMax.tablet} {
    display: block;
  }
`;

export const SearchFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  width: 100%;
  padding: 0.8rem 0;

  ${mqMax.tablet} {
    flex-direction: row;
    gap: 0;
  }
`;

export const FilterContainer = styled.form`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  width: 100%;

  ${mqMax.tablet} {
    flex-direction: column;
    gap: 0;
  }
`;

export const FieldWrapper = styled.div`
  width: 20.3rem;

  ${mqMax.tablet} {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
  }
`;

export const OptionButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const MobileGroupLabel = styled.div`
  ${({ theme }) => theme.typography.headline1.medium};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.body1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  width: 100%;
  height: 6.9rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.semantic.line.normal};
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 4rem 2rem;

  width: 100%;
`;

export const BottomSheetTitle = styled.p`
  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme }) => theme.semantic.static.black};
`;

export const MenuSection = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 1.2rem;
  padding-bottom: 4rem;
`;

export const HandleBar = styled.div`
  width: 5.2rem;
  height: 0.3rem;

  background: ${({ theme }) => theme.semantic.label.assistive};
`;

export const FloatingButtonWrapper = styled.div`
  position: fixed;
  bottom: 1.7rem;
  right: 1.6rem;
  z-index: 1000;
`;
