import React from 'react';
import { MemoryRouter, Redirect } from 'react-router-dom';
import { mount } from 'enzyme';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Login from './component';

test('should call logIn with login and password', done => {
  const handleLogIn = jest.fn();
  const component = mount(
    <Login authorized={false} location={{}} logIn={handleLogIn} />,
  );

  const inputs = component.find(TextField);
  const loginInput = inputs.at(0);
  const passwordInput = inputs.at(1);
  const submitButton = component.find(Button).at(1);

  loginInput.props().onChange({ target: { value: 'login' } });
  passwordInput.props().onChange({ target: { value: 'password' } });
  submitButton.simulate('click');

  setImmediate(() => {
    expect(handleLogIn).toHaveBeenCalledWith({
      login: 'login',
      password: 'password',
    });

    done();
  });
});

test('should render correctly', () => {
  const component = mount(
    <Login authorized={false} location={{}} logIn={() => {}} />,
  );

  expect(component).toMatchSnapshot();
});

test('should render redirect to "from" when authorized', () => {
  const redirect = mount(
    <MemoryRouter>
      <Login
        authorized
        location={{ state: { from: { pathname: '/test' } } }}
        logIn={() => {}}
      />
    </MemoryRouter>,
  ).find(Redirect);

  expect(redirect).toMatchSnapshot();
});

test('should render redirect to root when authorized and backward address is set', () => {
  const redirect = mount(
    <MemoryRouter>
      <Login authorized location={{}} logIn={() => {}} />
    </MemoryRouter>,
  ).find(Redirect);

  expect(redirect).toMatchSnapshot();
});
