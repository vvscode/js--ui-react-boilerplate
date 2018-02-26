import React from 'react';
import { mount } from 'enzyme';

import ThirdStep from './component';
import Button from 'material-ui/Button';

test('should render correctly', () => {
  const component = mount(<ThirdStep defaultValues={{}} submit={() => {}} />);

  expect(component).toMatchSnapshot();
});

test('should handled correctly', done => {
  const handleSubmit = jest.fn();

  const component = mount(
    <ThirdStep defaultValues={{}} submit={handleSubmit} />,
  );
  const usernameInput = component.find('.q-username input').at(0);

  usernameInput.props().onChange({ target: { value: 'foo' } });

  const nameInput = component.find('.q-name input').at(0);

  nameInput.props().onChange({ target: { value: 'bar' } });

  const emailInput = component.find('.q-email input').at(0);

  emailInput.props().onChange({ target: { value: 'aaaa@aaaa.com' } });

  const detailsInput = component.find('.q-details textarea[type="text"]').at(0);

  detailsInput.props().onChange({ target: { value: 'lorem ipsum' } });

  const submitButton = component.find(Button).at(0);

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
