import { authHandlers } from './auth';
import { fileHandlers } from './file';
import { memberHandlers } from './member';

export const handlers = [...authHandlers, ...memberHandlers, ...fileHandlers];
