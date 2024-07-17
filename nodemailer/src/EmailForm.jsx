// EmailForm.js

import React, { useState } from 'react';

const EmailForm = ({ sendEmails }) => {
  const [email, setEmail] = useState('');
  const [emailsList, setEmailsList] = useState([]);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setEmailsList([...emailsList, email]);
      setEmail('');
    }
  };

  const handleSendEmails = () => {
    sendEmails(emailsList); // Call sendEmails function with emailsList
    setEmailsList([]); // Clear emailsList after sending
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleInputChange}
        />
        <button type="submit">Add Email</button>
      </form>
      <button onClick={handleSendEmails}>Send Emails</button>
    </div>
  );
};

export default EmailForm;
