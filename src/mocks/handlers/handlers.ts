import { authHandlers } from './auth';
import { dailyHandlers } from './daily';
import { fileHandlers } from './file';
import { memberHandlers } from './member';

export const handlers = [...authHandlers, ...dailyHandlers, ...memberHandlers, ...fileHandlers];
