import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-form';
import Button from 'material-ui/Button';

import CardNumberFormat from '@/components/CardNumberFormat/index';
import CVVFormat from '@/components/CVVFormat/index';
import ExpirationDateFormat from '@/components/ExpirationDateFormat/index';
import FormInput from '@/components/FormInput/index';
import {
  isValidCardNumber,
  isValidExpirationDate,
  isValidCVV,
} from '@/utils/format';
import { createValidator } from '@/utils/validate';

const validator = createValidator({
  cardNumber: value =>
    isValidCardNumber(value) ? null : 'Invalid card number',
  expirationDate: value =>
    isValidExpirationDate(value) ? null : 'Invalid expiration date',
  cvv: value => (isValidCVV(value) ? null : 'Invalid CVV'),
});

const SecondStep = props => (
  <Form
    validateOnSubmit
    dontValidateOnMount
    validateError={validator}
    defaultValues={props.defaultValues}
    onSubmit={values => props.submit(values)}
  >
    {formApi => {
      const formState = formApi.getFormState();
      const {
        values: { cardNumber, expirationDate, cvv },
        errors: {
          cardNumber: cardNumberError,
          expirationDate: expirationDateError,
          cvv: cvvError,
        },
      } = formState;

      return (
        <Fragment>
          <FormInput
            error={cardNumberError}
            value={cardNumber}
            placeholder={'Card Number'}
            inputComponent={CardNumberFormat}
            onChange={event =>
              formApi.setValue('cardNumber', event.target.value)
            }
          />
          <FormInput
            error={expirationDateError}
            value={expirationDate}
            placeholder={'Expiration Date'}
            inputComponent={ExpirationDateFormat}
            onChange={event =>
              formApi.setValue('expirationDate', event.target.value)
            }
          />
          <FormInput
            error={cvvError}
            value={cvv}
            placeholder={'CVV'}
            inputComponent={CVVFormat}
            onChange={event => formApi.setValue('cvv', event.target.value)}
          />
          <Button
            variant="raised"
            color="primary"
            onClick={() => formApi.submitForm()}
          >
            Next Step
          </Button>
        </Fragment>
      );
    }}
  </Form>
);

SecondStep.propTypes = {
  defaultValues: PropTypes.shape({
    cardNumber: PropTypes.string,
    expirationDate: PropTypes.string,
    cvv: PropTypes.string,
  }).isRequired,
  submit: PropTypes.func.isRequired,
};

export default SecondStep;
