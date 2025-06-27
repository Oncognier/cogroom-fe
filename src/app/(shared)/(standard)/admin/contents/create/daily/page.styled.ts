'use client';

import styled from '@emotion/styled';

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  padding: 1.2rem 0 0.4rem 0;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title3.bold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const ContentsForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  width: 100%;
  max-width: 58.3rem;
  margin: 0 auto;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;

  width: 100%;
`;

export const FixedSelectItem = styled.div`
  min-width: 28.55rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 18.6rem;
  margin-top: 0.8rem;
`;
