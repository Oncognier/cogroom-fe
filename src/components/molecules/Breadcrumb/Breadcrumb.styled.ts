'use client';

import styled from '@emotion/styled';

import ChevronRight from '@/assets/icons/chevronright.svg';

export const Breadcrumb = styled.ol`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  ${({ theme }) => theme.typography.label2.semibold}
  color: ${({ theme }) => theme.semantic.label.normal};

  a {
    ${({ theme }) => theme.typography.label2.semibold}
    color: ${({ theme }) => theme.semantic.label.alternative};
    outline: none;
    text-decoration: none;
  }
`;

export const BreadcrumbChevron = styled(ChevronRight)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.semantic.label.alternative};
`;
