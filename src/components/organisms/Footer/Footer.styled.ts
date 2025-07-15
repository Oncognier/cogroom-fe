// TODO: 추후 수정 필요
'use client';

import styled from '@emotion/styled';

export const Footer = styled.footer`
  width: 100%;

  border-top: 1px solid ${({ theme }) => theme.semantic.line.normal};
  background-color: ${({ theme }) => theme.semantic.static.white};
  padding-bottom: 16rem;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.1rem;

  max-width: 1100px;
  margin: 0 auto;
  padding: 4.5rem 2rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};

  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.assistive};
`;

export const Info = styled.p``;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 3.5rem;

  a {
    ${({ theme }) => theme.typography.label2.semibold};
    color: ${({ theme }) => theme.semantic.label.assistive};
  }

  span {
    ${({ theme }) => theme.typography.label2.semibold};
    color: ${({ theme }) => theme.semantic.label.assistive};
  }
`;
