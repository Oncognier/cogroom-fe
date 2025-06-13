'use client';

import styled from '@emotion/styled';

interface SocialLinkIconProps {
  width: number;
}

export const SocialLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;

export const SocialLinkIcon = styled.a<SocialLinkIconProps>`
  width: ${({ width }) => width}px;

  color: ${({ theme }) => theme.semantic.label.assistive};
`;
