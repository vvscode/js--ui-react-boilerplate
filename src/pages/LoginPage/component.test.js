import React from 'react';
import { mount } from 'enzyme';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import LoginPage from './component';

test('should call logIn with login and password', () => {
  const logIn = jest.fn();
  const loginPage = mount(
    <LoginPage authorized={false} location={{}} logIn={logIn} />,
  );

  const inputs = loginPage.find(TextField);
  const loginInput = inputs.at(0);
  const passwordInput = inputs.at(1);
  const submitButton = loginPage.find(Button).at(1);

  loginInput.props().onChange({ target: { value: 'login' } });
  passwordInput.props().onChange({ target: { value: 'password' } });
  submitButton.simulate('click');

  expect(logIn).toHaveBeenCalledWith({
    login: 'login',
    password: 'password',
  });
});
