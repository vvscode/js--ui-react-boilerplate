import React from 'react';
import { mount } from 'enzyme';

import SecondStep from './component';
import FormInput from '@/components/FormInput/index';
import Button from 'material-ui/Button';

test('should call submit if form is valid', done => {
  const handleSubmit = jest.fn();

  const component = mount(
    <SecondStep defaultValues={{}} submit={handleSubmit} />,
  );
  const cardNumber = '1111 2222 3333 4444';
  const expirationDate = '10/18';
  const cvv = '333';

  const inputs = component.find(FormInput);
  const cardNumberInput = inputs.at(0);
  const expirationDateInput = inputs.at(1);
  const cvvInput = inputs.at(2);
  const submitButton = component.find(Button).at(0);

  cardNumberInput.props().onChange({ target: { value: cardNumber } });
  expirationDateInput.props().onChange({ target: { value: expirationDate } });
  cvvInput.props().onChange({ target: { value: cvv } });

  submitButton.simulate('click');

  setImmediate(() => {
    expect(handleSubmit).toHaveBeenCalledWith({
      cardNumber,
      expirationDate,
      cvv,
    });
    done();
  });
});

test('should not call submit if any field is invalid', done => {
  const handleSubmit = jest.fn();

  const component = mount(
    <SecondStep defaultValues={{}} submit={handleSubmit} />,
  );
  const invalidCardNumber = '1111 2222 3333 444a';
  const invalidExpirationDate = '10/18a';
  const invalidCvv = '333a';

  const inputs = component.find(FormInput);
  const cardNumberInput = inputs.at(0);
  const expirationDateInput = inputs.at(1);
  const cvvInput = inputs.at(2);
  const submitButton = component.find(Button).at(0);

  cardNumberInput.props().onChange({ target: { value: invalidCardNumber } });
  expirationDateInput
    .props()
    .onChange({ target: { value: invalidExpirationDate } });
  cvvInput.props().onChange({ target: { value: invalidCvv } });

  submitButton.simulate('click');

  setImmediate(() => {
    expect(handleSubmit).toHaveBeenCalledTimes(0);
    done();
  });
});
