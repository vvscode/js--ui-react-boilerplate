import React, { Component } from 'react';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';

import FirstStep from './FirstStep';

class Subscribe extends Component {
  state = {
    activeStep: 0,
  };

  openNext = () => {
    this.setState(prevState => ({ activeStep: prevState.activeStep + 1 }));
  };

  render() {
    const { activeStep } = this.state;

    return (
      <div>
        <Stepper activeStep={activeStep} alternativeLabel>
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
        <div>{this.renderStep(activeStep)}</div>
      </div>
    );
  }

  renderStep(activeStep) {
    if (activeStep === 0) {
      return (
        <FirstStep
          defaultValues={{ plan: 'simple' }}
          openNext={this.openNext}
        />
      );
    }
  }
}

export default Subscribe;
