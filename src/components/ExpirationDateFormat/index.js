import React from 'react';
import InputMask from 'react-input-mask';

const ExpirationDateFormat = props => (
  <InputMask {...props} mask="99/99" maskChar=" " />
);

export default ExpirationDateFormat;
