import React from 'react';
import Stepper, { Step, StepContent, StepLabel } from 'material-ui/Stepper';

const Subscribe = () => (
  <Stepper activeStep={0} alternativeLabel>
    <Step>
      <StepLabel>Choose plan</StepLabel>
      <StepContent>111</StepContent>
    </Step>
    <Step>
      <StepLabel>Enter payment details</StepLabel>
      <StepContent>222</StepContent>
    </Step>
    <Step>
      <StepLabel>Enter contact details</StepLabel>
      <StepContent>333</StepContent>
    </Step>
  </Stepper>
);

export default Subscribe;
