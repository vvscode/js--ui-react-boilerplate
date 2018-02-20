import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import { logIn } from '@/redux/auth/operations';
import styles from './styles';

class LoginPage extends Component {
  state = {
    login: '',
    password: '',
  };

  changeLogin = event => {
    this.setState({ login: event.target.value });
  };

  changePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { authorized, classes } = this.props;
    const { login, password } = this.state;

    if (authorized) {
      const defaultState = { from: { pathname: '/' } };
      const { location: { state: { from } = defaultState } } = this.props;

      return <Redirect to={from} />;
    }

    return (
      <Paper className={classes.greeting} elevation={2}>
        <TextField
          className={classes.input}
          label="Email"
          fullWidth
          onChange={this.changeLogin}
          value={login}
        />
        <TextField
          className={classes.input}
          onChange={this.changePassword}
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
            onClick={() => this.props.logIn({ login, password })}
          >
            Login
          </Button>
        </div>
      </Paper>
    );
  }
}

LoginPage.propTypes = {
  authorized: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
  logIn: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth: { authorized } }) => ({
  authorized,
});

const mapDispatchToProps = dispatch => ({
  logIn: credentials => dispatch(logIn(credentials)),
});

export default injectSheet(styles)(
  connect(mapStateToProps, mapDispatchToProps)(LoginPage),
);
