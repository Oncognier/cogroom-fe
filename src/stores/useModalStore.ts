import { AppModalProps } from '@/components/organisms/Modal/modalConfig';
import { createModalStore } from './createModalStore';

export const useModalStore = createModalStore<AppModalProps>();
