import { AlertModalProps, AppModalProps } from '@/components/organisms/Modal/modalConfig';

import { createModalStore } from './createModalStore';

export const useAppModalStore = createModalStore<AppModalProps>();
export const useAlertModalStore = createModalStore<AlertModalProps>();
