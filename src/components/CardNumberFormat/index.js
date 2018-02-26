import React from 'react';
import InputMask from 'react-input-mask';

const CardNumberFormat = props => (
  <InputMask {...props} mask="9999 9999 9999 9999" maskChar=" " />
);

export default CardNumberFormat;
