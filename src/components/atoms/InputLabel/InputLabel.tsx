import * as S from './InputLabel.styled';

interface InputLabelProps {
  label: string;
  required?: boolean;
}

export default function InputLabel({ label, required = false }: InputLabelProps) {
  return (
    <S.Container>
      <S.InputLabel>{label}</S.InputLabel>
      {required && <S.RequiredBadge>*</S.RequiredBadge>}
    </S.Container>
  );
}
