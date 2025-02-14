import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div>
      <h2>Registration Successful!</h2>
      <p>An email has been sent to your registered email address.</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default ThankYou;
