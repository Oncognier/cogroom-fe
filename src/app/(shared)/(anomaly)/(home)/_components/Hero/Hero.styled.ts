'use client';

import styled from '@emotion/styled';
import Image from 'next/image';

export const HeroWrapper = styled.div`
  position: relative;
  height: 50rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  margin-bottom: ${({ theme }) => theme.spacing[40]};
`;

export const HeroImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;

  width: 100%;

  color: ${({ theme }) => theme.semantic.static.white};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typography.body1.semibold}
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title1.bold}
`;

export const ButtonWrapper = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 1.1rem 2.3rem;

  border-radius: ${({ theme }) => theme.radius[12]};
  border: 1px solid ${({ theme }) => theme.semantic.label.assistive};
  background-color: ${({ theme }) => theme.semantic.static.white};
  color: ${({ theme }) => theme.semantic.label.normal};
  transition: padding 0.3s ease;

  ${({ theme }) => theme.typography.body2.semibold};

  &:hover {
    padding-right: 36px;
  }

  &:hover .icon {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    border-color: ${({ theme }) => theme.semantic.label.assistive};
    color: ${({ theme }) => theme.semantic.label.assistive};
    cursor: default;
    pointer-events: none;
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;

  & > svg {
    width: 1.2em;
    height: 1.2em;
  }
`;
