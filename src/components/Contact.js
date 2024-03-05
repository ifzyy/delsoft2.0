import React, { useState } from 'react';
import './contact.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !phone || !text) {
      confirmAlert({
        title: 'Validation Error',
        message: 'Please fill in all fields.',
        buttons: [{ label: 'OK' }],
      });
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/moqglqvw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          text,
        }),
      });

      if (response.ok) {
        // Successful submission
        confirmAlert({
          title: 'Submission Successful',
          message: 'Your form has been submitted successfully.',
          buttons: [
            {
              label: 'OK',
              onClick: () => {
                // Clear input fields
                setName('');
                setEmail('');
                setPhone('');
                setText('');
              },
            },
          ],
        });
      } else {
        // Error during submission
        console.error('Error submitting form:', response.statusText);
        confirmAlert({
          title: 'Submission Failed',
          message: 'There was an error submitting your form. Please try again later.',
          buttons: [{ label: 'OK' }],
        });
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <div className="container-form">
      <div className="contact-box">
        <div className="right">
          <input
            type="text"
            className="field"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="field"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="field"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className="field"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
