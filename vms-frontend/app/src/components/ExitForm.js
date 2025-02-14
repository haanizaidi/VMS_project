import React, { useState } from 'react';
import { exitVisitor } from '../api';

const ExitForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleExit = async (e) => {
    e.preventDefault();
    const exitData = { email };
    try {
      const response = await exitVisitor(exitData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error: ' + error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Visitor Exit</h2>
      <form onSubmit={handleExit}>
        <input
          type="email"
          placeholder="Visitor Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Check Out</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ExitForm;
