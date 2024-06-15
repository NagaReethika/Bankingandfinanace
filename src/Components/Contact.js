// src/components/Contact.js

import React from 'react';
import '../Styles/Contact.css'; // Import the corresponding CSS file

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>You can reach us via email or phone:</p>
      <ul>
        <li>Email: contact@example.com</li>
        <li>Phone: +1234567890</li>
      </ul>
    </div>
  );
}

export default Contact;