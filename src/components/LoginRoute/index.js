import React from 'react';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import injectSheet from 'react-jss';

const styles = {
  greeting: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 400,
    height: 300,
    padding: [30, 40],
    boxSizing: 'border-box',
    transform: 'translate(-50%, -50%)',
  },
  input: {
    marginBottom: 10,
  },
  submitButton: {
    marginLeft: 'auto',
  },
  footer: {
    display: 'flex',
    width: '100%',
    marginTop: 30,
  },
};

const Hello = ({ classes }) => (
  <Paper className={classes.greeting} elevation={2}>
    <TextField className={classes.input} label="Email" fullWidth />
    <TextField
      className={classes.input}
      type="password"
      fullWidth
      label="Password"
    />
    <div className={classes.footer}>
      <Button color="primary" size="small" className={classes.button}>
        Forgot password?
      </Button>
      <Button variant="raised" color="primary" className={classes.submitButton}>
        Login
      </Button>
    </div>
  </Paper>
);

export default injectSheet(styles)(Hello);
