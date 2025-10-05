import styled from '@emotion/styled';

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const MetaIcon = styled.div<{ $isActive: boolean }>`
  width: 2rem;
  height: 2rem;
  color: ${({ theme, $isActive }) => ($isActive ? theme.semantic.primary.normal : theme.semantic.line.normal)};
`;

export const MetaText = styled.div`
  ${({ theme }) => theme.typography.caption1.regular};
  color: ${({ theme }) => theme.semantic.interaction.inactive};
`;
