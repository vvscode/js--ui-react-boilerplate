import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-form';
import { createValidator } from '@/utils/validate';
import FormInput from '@/components/FormInput/index';
import { isValidEmail } from '@/utils/format';

import Button from 'material-ui/Button';

const validator = createValidator({
  username: value => (value ? null : 'Invalid username'),
  name: value => (value ? null : 'Invalid name'),
  email: value => (isValidEmail(value) ? null : 'Invalid email'),
  details: value => (value ? null : 'Invalid details'),
});

const ThirdStep = props => (
  <Form
    validateOnSubmit
    dontValidateOnMount
    validateError={validator}
    defaultValues={props.defaultValues}
    onSubmit={data => props.submit(data)}
  >
    {formApi => {
      const formState = formApi.getFormState();
      const {
        values: { username, name, email, details },
        errors: {
          username: usernameError,
          name: nameError,
          email: emailError,
          details: detailsError,
        },
      } = formState;

      return (
        <Fragment>
          <FormInput
            error={usernameError}
            value={username}
            placeholder={'User name'}
            onChange={event => formApi.setValue('username', event.target.value)}
          />
          <FormInput
            error={nameError}
            value={name}
            placeholder={'Name'}
            onChange={event => formApi.setValue('name', event.target.value)}
          />
          <FormInput
            error={emailError}
            value={email}
            placeholder={'Email'}
            onChange={event => formApi.setValue('email', event.target.value)}
          />
          <FormInput
            error={detailsError}
            value={details}
            placeholder={'Details'}
            multiline
            onChange={event => formApi.setValue('details', event.target.value)}
          />
          <Button
            variant="raised"
            color="primary"
            onClick={() => formApi.submitForm()}
          >
            Submit
          </Button>
        </Fragment>
      );
    }}
  </Form>
);

ThirdStep.propTypes = {
  defaultValues: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    details: PropTypes.string,
  }).isRequired,
  submit: PropTypes.func.isRequired,
};

export default ThirdStep;
