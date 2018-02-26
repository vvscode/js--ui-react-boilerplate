import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-form';
import Button from 'material-ui/Button';

import FormInput from '@/components/FormInput';
import { createValidator } from '@/utils/validate';

const validator = createValidator({
  cardNumber: value => (value ? null : 'Invalid card number'),
});

const FirstStep = props => (
  <Form
    validateOnSubmit
    dontValidateOnMount
    validateError={validator}
    defaultValues={props.defaultValues}
    onSubmit={() => props.openNext()}
  >
    {formApi => {
      const formState = formApi.getFormState();
      const {
        values: { cardNumber },
        errors: { cardNumber: cardNumberError },
      } = formState;

      return (
        <Fragment>
          <FormInput
            error={cardNumberError}
            value={cardNumber}
            placeholder={'Card Number'}
            onChange={event =>
              formApi.setValue('cardNumber', event.target.value)
            }
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

FirstStep.propTypes = {
  defaultValues: PropTypes.shape({
    cardNumber: PropTypes.string,
  }).isRequired,
  openNext: PropTypes.func.isRequired,
};

export default FirstStep;
