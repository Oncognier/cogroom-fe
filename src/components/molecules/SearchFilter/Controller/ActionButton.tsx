'use client';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';

import { FilterAction } from '../SearchFilter.types';

type Props = {
  action?: FilterAction;
};

export default function ActionButton({ action }: Props) {
  if (!action) return null;

  if (action.variant === 'solid') {
    return (
      <SolidButton
        type='submit'
        size='sm'
        color='primary'
        label={action.label}
        interactionVariant='normal'
      />
    );
  }

  return (
    <OutlinedButton
      type='submit'
      size='sm'
      color='primary'
      label={action.label}
      interactionVariant='normal'
    />
  );
}
