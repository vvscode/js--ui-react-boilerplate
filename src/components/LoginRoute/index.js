import React from 'react';
import Paper from 'material-ui/Paper';
import injectSheet from 'react-jss';

const styles = {
  greeting: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 400,
    height: 400,
    transform: 'translate(-50%, -50%)',
  },
};

const Hello = ({ classes }) => (
  <Paper className={classes.greeting} zDepth={2}>
    Login Route
  </Paper>
);

export default injectSheet(styles)(Hello);
