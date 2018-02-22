import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import styles from './styles';

function PaperSheet(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="headline" component="h3">
        UI React boilerplate page with some info
      </Typography>
      <Typography component="p">Shut up and give your money!</Typography>
    </Paper>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(PaperSheet);
