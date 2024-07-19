import React, { useState } from 'react';
import axios from 'axios';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/subscribe', { email });
      setMessage(response.data);
    } catch (error) {
      setMessage('Subscription failed.');
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Subscribe</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SubscribeForm;
