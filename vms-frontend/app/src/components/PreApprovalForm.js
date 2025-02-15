// import React, { useState } from "react";
// import { preApproveVisitor } from "../api";
// import { useNavigate } from "react-router-dom";

// const PreApprovalForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [hostName, setHostName] = useState("");
//   const [hostEmail, setHostEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const preApprovalData = { name, email, phone, hostName, hostEmail };
//     try {
//       const response = await preApproveVisitor(preApprovalData);
//       setMessage(response.data.message);
//       alert("Visitor pre-approved successfully!");
//     } catch (error) {
//       setMessage("Error: " + error.response.data.error);
//     }
//   };

//   const handleShowAllPreApprovedVisitors = () => {
//     navigate("/pre-approved-visitors"); // Redirect to the pre-approved visitors page
//   };

//   return (
//     <div className="pre-approval-form-container">
//       <h2>Pre-Approve Visitor</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Host Name"
//           value={hostName}
//           onChange={(e) => setHostName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Host Email"
//           value={hostEmail}
//           onChange={(e) => setHostEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Pre-Approve</button>
//       </form>
//       {message && <p>{message}</p>}
//       <button
//         onClick={handleShowAllPreApprovedVisitors}
//         className="show-all-button"
//       >
//         Show All Pre-Approved Visitors
//       </button>
//     </div>
//   );
// };

// export default PreApprovalForm;



// components/PreApprovalForm.js
import React, { useState } from "react";
import { preApproveVisitor } from "../api";
import { useNavigate } from "react-router-dom";
import "./PreApprovalForm.css"; // Import the CSS file

const PreApprovalForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hostName, setHostName] = useState("");
  const [hostEmail, setHostEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const preApprovalData = { name, email, phone, hostName, hostEmail };
    try {
      const response = await preApproveVisitor(preApprovalData);
      setMessage(response.data.message);
      alert("Visitor pre-approved successfully!");
    } catch (error) {
      setMessage("Error: " + error.response.data.error);
    }
  };

  const handleShowAllPreApprovedVisitors = () => {
    navigate("/pre-approved-visitors"); // Redirect to the pre-approved visitors page
  };

  return (
    <div className="pre-approval-form-container">
      <h2>Pre-Approve Visitor</h2>
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
        <button type="submit">Pre-Approve</button>
      </form>
      {message && <p>{message}</p>}
      <button
        onClick={handleShowAllPreApprovedVisitors}
        className="show-all-button"
      >
        Show All Pre-Approved Visitors
      </button>
    </div>
  );
};

export default PreApprovalForm;