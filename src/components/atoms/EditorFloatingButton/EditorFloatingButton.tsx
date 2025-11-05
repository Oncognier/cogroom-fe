import Tune from '@/assets/icons/tune.svg';

import SolidButton from '../SolidButton/SolidButton';

interface EditorFloatingButtonProps {
  onClick: () => void;
}

export default function EditorFloatingButton({ onClick }: EditorFloatingButtonProps) {
  return (
    <SolidButton
      size='sm'
      color='primary'
      interactionVariant='normal'
      onClick={onClick}
      label='에디터 툴'
      round
      iconLeft={<Tune />}
    />
  );
}
