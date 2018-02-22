import React from 'react';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';

import FirstStep from './FirstStep';

const Subscribe = () => (
  <div>
    <Stepper activeStep={0} alternativeLabel>
      <Step>
        <StepLabel>Choose plan</StepLabel>
      </Step>
      <Step>
        <StepLabel>Enter payment details</StepLabel>
      </Step>
      <Step>
        <StepLabel>Enter contact details</StepLabel>
      </Step>
    </Stepper>
    <div>
      <FirstStep defaultValues={{ plan: 'simple' }} />
    </div>
  </div>
);

export default Subscribe;
