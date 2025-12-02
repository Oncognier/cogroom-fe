import { LargeModalProps, MediumModalProps, SmallModalProps } from '@/components/organisms/Modal/modalConfig2';

import { createModalStore } from './createModalStore';

export const useLargeModalStore = createModalStore<LargeModalProps>();
export const useMediumModalStore = createModalStore<MediumModalProps>();
export const useSmallModalStore = createModalStore<SmallModalProps>();
