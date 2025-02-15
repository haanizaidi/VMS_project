// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleRegisterNow = () => {
//     navigate('/register'); // Redirect to the visitor registration form
//   };

//   const handlePreApproveVisitors = () => {
//     // Add functionality for pre-approval if needed
//   };

//   return (
//     <div className="home-container">
//       <header>
//         <h1>Welcome to the Visitor Management System</h1>
//         <p>
//           This application helps manage visitor registrations, approvals, and pre-approvals efficiently.
//         </p>
//       </header>
//       <br/><br/>
//       <div className="features">
//         <div className="feature-card">
//           <h2>Register Visitor</h2>
//           <p>Register new visitors quickly and efficiently.</p>
//           <button onClick={handleRegisterNow}>Register Now</button>
//         </div>

//         <div className="feature-card">
//           <h2>Pre-Approval</h2>
//           <p>Pre-approve visitors to streamline the process.</p>
//           <button onClick={handlePreApproveVisitors}>Pre-Approve Visitors</button>
//         </div>
//       </div><br/><br/><br/><br/>
//       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
//       <footer>
//         <p>© 2025 Visitor Management System</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;




// components/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleRegisterNow = () => {
    navigate("/register");
  };

  const handlePreApproveVisitors = () => {
    navigate("/pre-approve");
  };

  return (
    <div className="home-container">
      <header>
        <h1>Welcome to the Visitor Management System</h1>
        <p>
          This application helps manage visitor registrations, approvals, and
          pre-approvals efficiently.
        </p>
      </header>
      <br/><br/>
      <div className="features">
        <div className="feature-card">
          <h2>Register Visitor</h2>
          <p>Register new visitors quickly and efficiently.</p>
          <button onClick={handleRegisterNow}>Register Now</button>
        </div>

        <div className="feature-card">
          <h2>Pre-Approval</h2>
          <p>Pre-approve visitors to streamline the process.</p>
          <button onClick={handlePreApproveVisitors}>Pre-Approve Visitors</button>
        </div>
      </div><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <footer>
        <p>© 2025 Visitor Management System</p>
      </footer>
    </div>
  );
};

export default Home;