import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterVisitor() {
  const [visitorData, setVisitorData] = useState({
    name: '',
    email: '',
    phone: '',
    hostName: '',
    hostEmail: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitorData({ ...visitorData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/visitors/register', visitorData);
      setMessage(response.data.message);

      // Redirect to Thank You page after successful registration
      setTimeout(() => {
        navigate('/thank-you');
      }, 2000);
    } catch (error) {
      setMessage('Error occurred during registration.');
    }
  };

  return (
    <div>
      <h2>Visitor Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} value={visitorData.name} placeholder="Name" required />
        <input type="email" name="email" onChange={handleChange} value={visitorData.email} placeholder="Email" required />
        <input type="text" name="phone" onChange={handleChange} value={visitorData.phone} placeholder="Phone" required />
        <input type="text" name="hostName" onChange={handleChange} value={visitorData.hostName} placeholder="Host Name" required />
        <input type="email" name="hostEmail" onChange={handleChange} value={visitorData.hostEmail} placeholder="Host Email" required />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegisterVisitor;
