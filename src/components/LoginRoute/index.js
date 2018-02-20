import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import { logIn } from '@/redux/auth/operations';
import styles from './styles';

class LoginRoute extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      login: '',
      password: '',
    };
  }

  render() {
    const { classes } = this.props;
    const { login, password } = this.state;

    return (
      <Paper className={classes.greeting} elevation={2}>
        <TextField
          className={classes.input}
          label="Email"
          fullWidth
          onChange={x => this.setState({ login: x.target.value })}
          value={login}
        />
        <TextField
          className={classes.input}
          onChange={x => this.setState({ password: x.target.value })}
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

LoginRoute.propTypes = {
  logIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logIn: credentials => dispatch(logIn(credentials)),
});

export default injectSheet(styles)(
  connect(null, mapDispatchToProps)(LoginRoute),
);
