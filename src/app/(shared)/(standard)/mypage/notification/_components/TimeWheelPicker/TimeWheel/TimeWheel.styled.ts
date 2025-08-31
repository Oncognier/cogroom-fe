'use client';

import styled from '@emotion/styled';

const WHEEL_H = '12rem';
const ITEM_H = '36px';

export const TimeWheel = styled.div`
  position: relative;
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 28.9rem;

  gap: 3.2rem;

  border-radius: 1.2rem;
  padding: 1.6rem 1.2rem;

  background-color: ${({ theme }) => theme.semantic.static.white};

  ${({ theme }) => theme.shadow.normal};
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  gap: 1.8rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  gap: 0.2rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline2.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const TimeInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4.8rem;

  gap: 0.4rem;

  border-radius: 1.2rem;

  ${({ theme }) => theme.typography.heading1.semibold};
  color: ${({ theme }) => theme.semantic.primary.normal};
  background-color: ${({ theme }) => theme.semantic.background.elevated.normal};
`;

export const WheelPicker = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 12rem;

  gap: 2.4rem;
`;

export const Wheel = styled.div`
  position: relative;
  width: 4.6rem;
  height: 100%;
  overflow: hidden;

  contain: paint;

  -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%);
`;

export const WheelScroll = styled.div`
  height: 100%;
  overflow-y: auto;

  padding-block: calc((${WHEEL_H} - ${ITEM_H}) / 2);

  &::-webkit-scrollbar {
    display: none;
  }

  scroll-snap-type: y proximity;
  overscroll-behavior: contain;
`;

export const WheelItem = styled.div<{ $selected?: boolean }>`
  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme, $selected }) => ($selected ? theme.semantic.primary.normal : theme.semantic.label.alternative)};

  height: ${ITEM_H};
  display: flex;
  align-items: center;
  justify-content: center;

  scroll-snap-align: center;
  scroll-snap-stop: always;
  scroll-behavior: smooth;

  cursor: pointer;
`;

export const WheelSelection = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: ${ITEM_H};
  transform: translateY(-50%);
  border-top: 1px solid ${({ theme }) => theme.semantic.line.normal};
  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  gap: 0.9rem;
`;
