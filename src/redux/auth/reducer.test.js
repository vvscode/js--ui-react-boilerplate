import reducer from './reducer';
import { authorize } from './actions';
import { AUTHORIZE } from './types';

describe(AUTHORIZE, () => {
  test('should set authorized to true', () => {
    const action = authorize();
    const state = reducer({ authorized: false }, action);

    expect(state).toEqual({ authorized: true });
  });
});
