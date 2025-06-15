import * as S from './SettingGroup.styled';

interface SettingGroupProps {
  title: string;
  children: React.ReactNode;
}

export default function SettingGroup({ title, children }: SettingGroupProps) {
  return (
    <S.SettingGroup>
      <S.GroupTitle>{title}</S.GroupTitle>
      {children}
    </S.SettingGroup>
  );
}
