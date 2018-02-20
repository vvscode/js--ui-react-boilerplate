import { createAction } from 'redux-actions';

import { AUTHORIZE, DEAUTHORIZE } from './types';

export const authorize = createAction(AUTHORIZE);
export const deauthorize = createAction(DEAUTHORIZE);
