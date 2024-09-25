import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import contactBg from "../images/contact.jpg"
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
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${contactBg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center h-full p-5">
        {/* Form Section */}
        <div className="bg-transparent bg-opacity-70 p-6 rounded-lg shadow-lg md:w-1/2 mr-4 ">
  <h2 className="text-xl font-bold mb-4">Contact Us</h2>
  <input
    type="text"
    className="field mb-4 w-full p-2 border rounded bg-transparent bg-opacity-80"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <input
    type="email"
    className="field mb-4 w-full p-2 border rounded bg-transparent bg-opacity-80"
    placeholder="Your Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="tel"
    className="field mb-4 w-full p-2 border rounded bg-transparent bg-opacity-80"
    placeholder="Phone"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
  />
  <textarea
    placeholder="Message"
    className="field mb-4 w-full p-2 border rounded bg-transparent bg-opacity-80"
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
  <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
    Send
  </button>
</div>


        {/* Additional Information Section */}
        <div className="bg-gray-800 text-white p-6 rounded-lg md:w-1/3">
          <h2 className="text-lg font-bold mb-2">Get in Touch</h2>
          <p>Phone: 08022902250, 08033261145</p>
          <p>Email: info@delsoft.ng</p>
          <p>Website: <a href="#home" className="text-blue-400">delsoft.ng</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
