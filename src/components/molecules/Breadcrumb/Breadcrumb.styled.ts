'use client';

import styled from '@emotion/styled';

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
  }
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.semantic.label.alternative};
`;
