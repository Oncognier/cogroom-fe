'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0rem 2rem;
  gap: 5rem;

  ${mqMax.tablet} {
    padding: 0;
  }
`;

export const MobileGuard = styled.div`
  ${mqMax.tablet} {
    display: none;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const WriteForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const CategorySelect = styled.div`
  width: 15rem;
`;

export const AnonymousCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.semantic.label.normal};

  label {
    cursor: pointer;
    user-select: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`;

export const CheckboxName = styled.span`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
`;
