import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  greeting: {
    color: '#333',
  },
};

const Hello = ({ classes }) => (
  <h1 className={classes.greeting}>Hello, world!</h1>
);

export default injectSheet(styles)(Hello);
