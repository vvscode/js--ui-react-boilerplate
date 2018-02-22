import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';

const FirstStep = props => (
  <Form
    validateOnSubmit
    dontValidateOnMount
    defaultValues={props.defaultValues}
  >
    {formApi => {
      const formState = formApi.getFormState();
      const { values: { plan } } = formState;

      return (
        <RadioGroup
          value={plan}
          onChange={event => formApi.setValue('plan', event.target.value)}
        >
          <FormControlLabel value="simple" control={<Radio />} label="Simple" />
          <FormControlLabel
            value="standard"
            control={<Radio />}
            label="Standard"
          />
          <FormControlLabel
            value="premium"
            control={<Radio />}
            label="Premium"
          />
        </RadioGroup>
      );
    }}
  </Form>
);

FirstStep.propTypes = {
  defaultValues: PropTypes.shape({
    plan: PropTypes.string,
  }).isRequired,
};

export default FirstStep;
