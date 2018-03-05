import React from 'react';
import PropTypes from 'prop-types';

const d = ({ something }) => <h4>Hi! {something}</h4>;

d.defaultProps = {
  something: '',
};

d.propTypes = {
  something: PropTypes.string,
};

export default d;
