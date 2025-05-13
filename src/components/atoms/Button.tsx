import React from 'react';
import S from './Button.styled';

export interface ButtonProps {
  label: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button = ({ primary = false, size = 'medium', label, ...props }: ButtonProps) => {
  return (
    <S.Button
      primary={primary}
      size={size}
      {...props}
    >
      {label}
    </S.Button>
  );
};
