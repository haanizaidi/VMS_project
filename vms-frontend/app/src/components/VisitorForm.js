import React, { useState } from 'react';
import { registerVisitor } from '../api';

const VisitorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hostName, setHostName] = useState('');
  const [hostEmail, setHostEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const visitorData = { name, email, phone, hostName, hostEmail };
    try {
      const response = await registerVisitor(visitorData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error: ' + error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Register Visitor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Host Name"
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Host Email"
          value={hostEmail}
          onChange={(e) => setHostEmail(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VisitorForm;
