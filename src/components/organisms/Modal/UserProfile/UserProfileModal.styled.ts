'use client';

import styled from '@emotion/styled';

export const UserProfileModalContainer = styled.div`
  width: 36.9rem;
  padding: 1.6rem 1.2rem;
  background-color: ${({ theme }) => theme.semantic.static.white};
  border-radius: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadow.normal};
  box-sizing: border-box;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;

export const UserName = styled.h3`
  ${({ theme }) => theme.typography.body1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
  text-align: center;
`;

export const IntroductionBox = styled.div`
  width: 100%;
  height: 12.8rem;
  padding: 1.2rem 1.6rem;

  background-color: ${({ theme }) => theme.semantic.static.white};
  border: 1px solid ${({ theme }) => theme.semantic.label.assistive};

  border-radius: 0.8rem;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const Introduction = styled.p`
  ${({ theme }) => theme.typography.body1.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
  line-height: 1.5;

  overflow: hidden;
`;
