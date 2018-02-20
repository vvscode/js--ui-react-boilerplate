import { authorize } from './actions';

export const logIn = () => dispatch => {
  return new Promise(resolve => {
    setTimeout(() => resolve(true), 1000);
  }).then(() => dispatch(authorize()));
};
