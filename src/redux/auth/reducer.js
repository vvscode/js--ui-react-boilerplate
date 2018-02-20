import { handleActions } from 'redux-actions';

import { AUTHORIZE } from './types';

const initialState = {
  authorized: false,
};

const reducerMap = {
  [AUTHORIZE]: () => ({ authorized: true }),
};

export default handleActions(reducerMap, initialState);
