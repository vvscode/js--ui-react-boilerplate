import React, { Component } from 'react';
import { Form } from 'react-form';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

class Subscribe extends Component {
  state = {
    activeStep: 0,
  };

  openNext = () => {
    this.setState(prevState => ({
      activeStep: Math.max(prevState.activeStep + 1, 0),
    }));
  };

  submitForm = () => {};

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
        <Form
          validateOnSubmit
          dontValidateOnMount
          defaultValues={{
            plan: 'standard',
            cardNumber: '',
            expirationDate: '',
            cvv: '',
            username: '',
            name: '',
            email: '',
            details: '',
          }}
        >
          {formApi => this.renderStep(activeStep, formApi)}
        </Form>
      </div>
    );
  }

  renderStep(activeStep, formApi) {
    const formState = formApi.getFormState();
    const { values } = formState;

    if (activeStep === 0) {
      return (
        <FirstStep
          defaultValues={values}
          submit={props => {
            formApi.setAllValues(props);
            this.openNext();
          }}
        />
      );
    } else if (activeStep === 1) {
      return (
        <SecondStep
          defaultValues={values}
          submit={props => {
            formApi.setAllValues(props);
            this.openNext();
          }}
        />
      );
    } else if (activeStep === 2) {
      return (
        <ThirdStep
          defaultValues={values}
          submit={props => {
            formApi.setAllValues(props);
            this.submitForm();
          }}
        />
      );
    }

    return null;
  }
}

export default Subscribe;
