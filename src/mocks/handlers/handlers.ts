import { authHandlers } from './auth';
import { memberHandlers } from './member';

export const handlers = [...authHandlers, ...memberHandlers];
