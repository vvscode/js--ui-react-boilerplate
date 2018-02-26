import React from 'react';
import InputMask from 'react-input-mask';

const CVVFormat = props => <InputMask {...props} mask="999" maskChar=" " />;

export default CVVFormat;
