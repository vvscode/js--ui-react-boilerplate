import React from 'react';
import { mount } from 'enzyme';

import ThirdStep from './component';
import FormInput from '@/components/FormInput/index';
import Button from 'material-ui/Button';

const defaultValues = {
  username: '',
  name: '',
  email: '',
  details: '',
};

test('should render correctly', () => {
  const component = mount(
    <ThirdStep defaultValues={defaultValues} submit={() => {}} />,
  );

  expect(component).toMatchSnapshot();
});

test('should handled correctly', done => {
  const handleSubmit = jest.fn();

  const component = mount(
    <ThirdStep defaultValues={defaultValues} submit={handleSubmit} />,
  );

  const inputs = component.find(FormInput);
  const usernameInput = inputs.at(0);
  const nameInput = inputs.at(1);
  const emailInput = inputs.at(2);
  const detailsInput = inputs.at(3);
  const submitButton = component.find(Button).at(0);

  usernameInput.props().onChange({ target: { value: 'foo' } });
  nameInput.props().onChange({ target: { value: 'bar' } });
  emailInput.props().onChange({ target: { value: 'aaaa@aaaa.com' } });
  detailsInput.props().onChange({ target: { value: 'lorem ipsum' } });

  submitButton.simulate('click');

  setImmediate(() => {
    expect(handleSubmit).toHaveBeenCalledWith({
      username: 'foo',
      name: 'bar',
      email: 'aaaa@aaaa.com',
      details: 'lorem ipsum',
    });
    done();
  });
});
