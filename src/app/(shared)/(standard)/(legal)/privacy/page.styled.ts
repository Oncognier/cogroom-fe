'use client';

import styled from '@emotion/styled';

export const Privacy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title2.bold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Content = styled.p`
  ${({ theme }) => theme.typography.headline1.regular};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const Reference = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SubSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const SectionTitle = styled.div`
  display: flex;
  gap: 0.4rem;

  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const SectionNumber = styled.span`
  width: 2.8rem;
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const SubSectionTitle = styled.div`
  display: flex;
  gap: 0.4rem;

  ${({ theme }) => theme.typography.body1.regular};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const SubSectionNumber = styled.span`
  width: 1.6rem;
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const SubSectionContent = styled.div`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const SectionContentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  list-style: none;
`;

export const SectionContentListItem = styled.li`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const SectionContentSubItem = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  margin-left: 1.1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.semantic.background.normal.alternative};
`;

export const TableHeaderCell = styled.th`
  ${({ theme }) => theme.typography.body1.regular};
  padding: 1.6rem 2.4rem;
  color: ${({ theme }) => theme.semantic.label.alternative};
  text-align: left;
  border-right: 1px solid ${({ theme }) => theme.semantic.line.normal};

  &:last-of-type {
    border-right: none;
  }
`;

export const TableBody = styled.tbody``;

export const TableCell = styled.td`
  ${({ theme }) => theme.typography.body2.regular};
  padding: 1.6rem 2.4rem;
  color: ${({ theme }) => theme.semantic.label.neutral};
  border-right: 1px solid ${({ theme }) => theme.semantic.line.normal};

  &:last-of-type {
    border-right: none;
  }
`;
