import React from 'react';
import './contact.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Contact = () => {
  const handleSubmit = () => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure you want to submit the form?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            // Logic to submit the form goes here
            // For now, you can simulate form submission
            console.log('Form submitted');
          },
        },
        {
          label: 'N',
          onClick: () => {
            // Do nothing or add any additional logic if needed
          },
        },
      ],
    });
  };

  return (
    <div className="container-form">
      <div className="contact-box">
        <div className="right">
          <input type="text" className="field" placeholder="Your Name" />
          <input type="text" className="field" placeholder="Your Email" />
          <input type="text" className="field" placeholder="Phone" />
          <textarea placeholder="Message" className="field" defaultValue={""} />
          <button className="btn" onClick={handleSubmit}>
            Sendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;