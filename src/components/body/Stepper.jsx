import React,{useState} from 'react'


function Stepper() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { label: 'User details' },
        { label: 'Payment' },
        { label: 'Booking confirmation' },
    ];

    function getSectionComponent() {
        switch (activeStep) {
            case 0: return 'hii';
            case 1: return 'byy';
            case 2: return 'hello';
            default: return null;
        }
    }
  return (
    <div>
          <Stepper
              steps={steps}
              activeStep={activeStep} />
          <div style={{ padding: '20px' }}>
              {getSectionComponent()}
              {(activeStep !== 0 && activeStep !== steps.length - 1)
                  && <button onClick={() => setActiveStep(activeStep - 1)}>Previous</button>
              }
              {activeStep !== steps.length - 1
                  && <button onClick={() => setActiveStep(activeStep + 1)}>Next</button>
              }
          </div>
    </div>
  )
}

export default Stepper