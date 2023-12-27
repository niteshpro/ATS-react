import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './addDashbord.module.css'
import { Stepper } from 'react-form-stepper';

function AddDashboard(props) {
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
    <>
      
        <Modal show={props.show} onHide={props.handleclose} className={`modal-xl ${style.modal}`}>
        <Modal.Header closeButton >
          <Modal.Title >Modal heading</Modal.Title >
        </Modal.Header>
        <Modal.Body >
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleclose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleclose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   
    </>
  );
}

export default AddDashboard;