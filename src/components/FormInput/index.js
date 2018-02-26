import React from 'react';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const FormInput = ({ error, placeholder, ...rest }) => {
  return (
    <FormControl error={Boolean(error)}>
      <InputLabel htmlFor="name-error">{placeholder}</InputLabel>
      <Input {...rest} id="name-error" />
      <FormHelperText id="name-error-text">{error}</FormHelperText>
    </FormControl>
  );
};

FormInput.defaultProps = {
  error: '',
  placeholder: '',
};

FormInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
