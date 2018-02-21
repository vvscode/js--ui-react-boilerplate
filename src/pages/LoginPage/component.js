import React from 'react';
import { Form } from 'react-form';
import injectSheet from 'react-jss';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import { createValidator } from '@/utils/validate';
import styles from './styles';

const validator = createValidator({
  login: x => (x && x.length > 0 ? null : 'Login is required'),
  password: x => (x && x.length > 0 ? null : 'Password is required'),
});

const LoginPage = props => {
  const { authorized, classes, logIn } = props;

  if (authorized) {
    const defaultState = { from: { pathname: '/' } };
    const { location: { state: { from } = defaultState } } = props;

    return <Redirect to={from} />;
  }

  return (
    <Form
      validateOnSubmit
      dontValidateOnMount
      defaultValues={{ login: '', password: '' }}
      validateError={validator}
      onSubmit={({ login, password }) => logIn({ login, password })}
    >
      {formApi => {
        const formState = formApi.getFormState();
        const {
          values: { login, password },
          errors: { login: loginError, password: passwordError },
        } = formState;

        return (
          <Paper className={classes.greeting} elevation={2}>
            <TextField
              error={Boolean(loginError)}
              className={classes.input}
              label="Email"
              fullWidth
              onChange={event => formApi.setValue('login', event.target.value)}
              value={login}
            />
            <TextField
              error={Boolean(passwordError)}
              className={classes.input}
              onChange={event =>
                formApi.setValue('password', event.target.value)
              }
              type="password"
              fullWidth
              label="Password"
              value={password}
            />
            <div className={classes.footer}>
              <Button color="primary" size="small" className={classes.button}>
                Forgot password?
              </Button>
              <Button
                variant="raised"
                color="primary"
                className={classes.submitButton}
                onClick={() => formApi.submitForm()}
              >
                Login
              </Button>
            </div>
          </Paper>
        );
      }}
    </Form>
  );
};

LoginPage.propTypes = {
  authorized: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
  logIn: PropTypes.func.isRequired,
};

export default injectSheet(styles)(LoginPage);
