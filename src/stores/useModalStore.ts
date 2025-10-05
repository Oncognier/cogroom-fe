import { AlertModalProps, AppModalProps, SimpleModalProps } from '@/components/organisms/Modal/modalConfig';

import { createModalStore } from './createModalStore';

export const useAppModalStore = createModalStore<AppModalProps>();
export const useAlertModalStore = createModalStore<AlertModalProps>();
export const useSimpleModalStore = createModalStore<SimpleModalProps>();
