import styled from '@emotion/styled';

const Button = styled.button<{ primary?: boolean; size: 'small' | 'medium' | 'large' }>`
  font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${({ primary }) => (primary ? 'white' : '#333')};
  background-color: ${({ primary }) => (primary ? '#1ea7fd' : 'transparent')};
  box-shadow: ${({ primary }) => (primary ? 'none' : 'rgba(0, 0, 0, 0.15) 0 0 0 1px inset')};
  font-size: ${({ size }) => (size === 'small' ? '12px' : size === 'large' ? '16px' : '14px')};
  padding: ${({ size }) => (size === 'small' ? '10px 16px' : size === 'large' ? '12px 24px' : '11px 20px')};
`;

const S = {
  Button,
};

export default S;
